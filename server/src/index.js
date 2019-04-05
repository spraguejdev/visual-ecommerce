import "babel-polyfill";
import express from "express";
import renderer from "./client/helpers/renderer";
import serverStore from "./client/helpers/serverStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = serverStore();

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
