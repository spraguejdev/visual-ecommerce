import "babel-polyfill";
import express from "express";
import renderer from "./client/helpers/renderer";
import serverStore from "./client/helpers/serverStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import proxy from "express-http-proxy";

const app = express();

// Proxy for api, any route trying to access this route will be sent off to the api
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));
// Route handler
app.get("*", (req, res) => {
  // Create our server Store here
  // Pass in our req objet to the createStore function to we can use the cookie
  const store = serverStore(req);

  // Chain on a second.map here so that we map over each promise, check to see if it is a promise
  // We are created an arrap of promisses for all requests related to a particular routes. After that array is created
  // We will map over the array of promises, and create a new promise for each one. Whenever the new promise is resolved,
  // Or when the new promise is rejected, we will instantly resolve that the promise that was created, no matter what.
  // Essentially, that will give us new list of promises, some might containt the data from the store, and some might
  // Contain the value null
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  // After all of our requests are completed, send the response to the browser
  Promise.all(promises).then(() => {
    // Define our context object to use in the static router and pass into the renderer function
    const context = {};
    // Create our html template
    const content = renderer(req, store, context);
    if (context.url) {
      return res.redirect(301, context.url);
    }
    // Check to see if there is a property of notFound in our context object, if so, set status to 404
    if (context.notFound) {
      res.status(404);
    }
    res.send(content);
  });
});

app.listen(3000, () => {
  console.log("Hido ho, mate!");
});
