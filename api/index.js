var express = require("express");
var bodyParser = require("body-parser");
const controllers = require("./controllers.js");
const db = require("./database/index.js");

var app = express();
const port = 3003;

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());

app.get("/products", controllers.getProducts);

app.get("/product/single-item", controllers.getSingleItem);

app.put("/product-update", controllers.productUpdate);

app.post("/products", controllers.addProduct);

app.listen(port, function() {
  console.log(`Hido ho, captn! Listening on port ${port}`);
});
