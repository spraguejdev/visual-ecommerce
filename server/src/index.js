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
      opts.headers["x-forwarded-hots"] = "localhost:3000";
      return opts;
    }
  })
);

app.use(express.static("public"));
app.get("*", (req, res) => {
  // Create our server Store here
  // Pass in our req objet to the createStore function to we can use the cookie
  const store = serverStore(req);

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3002, () => {
  console.log("Hido ho, mate!");
});
