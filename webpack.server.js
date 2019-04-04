const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternal = require("webpack-node-externals");
const config = {
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternal()]
};

module.exports = merge(baseConfig, config);
