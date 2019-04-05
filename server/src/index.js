import "babel-polyfill";
import express from "express";
import renderer from "./client/helpers/renderer";
import serverStore from "./client/helpers/serverStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = serverStore();

  res.send(renderer(req, store));
});

app.listen(3002, () => {
  console.log("Hido ho, mate!");
});
