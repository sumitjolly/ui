const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const getSemanticLessRule = require("../config/webpack.rule.semanticLess.js");

module.exports = {
  plugins: [new MiniCssExtractPlugin({})],
  module: {
    rules: [
      {
        oneOf: [
          getSemanticLessRule("finavi"),
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
          },
          {
            exclude: [
              /\.js$/,
              /\.ejs$/,
              /\.html$/,
              /\.json$/,
              /\.config$/,
              /\.variables/,
              /\.overrides/
            ],
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
