import express from "express";
import renderer from "../client/helpers/renderer";

const app = express();

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3002, () => {
  console.log("Hido ho, mate!");
});
