module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            // do the latest transform rules needed to meet the requirements of the last 2 versions of all popular browsers
            ["env", { targets: { browers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
};
