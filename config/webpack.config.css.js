const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OmitJSforCSSPlugin = require("webpack-omit-js-for-css-plugin");
const CssoWebpackPlugin = require("csso-webpack-plugin").default;
const libraryName = "infinitec-ui";

module.exports = {
  entry: path.join(__dirname, "../src/semantic/index.js"),
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        include: /[/\\]node_modules[/\\]@infinitecsolutions[/\\]semantic-ui-less[/\\]/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "@infinitecsolutions/semantic-ui-less-module-loader",
            options: {
              defaultFolder: path.resolve(
                __dirname,
                "../node_modules/@infinitecsolutions/semantic-ui-less"
              ),
              siteFolder: path.resolve(__dirname, `../src/semantic/finavi`),
              themesFolder: path.resolve(__dirname, "../src/semantic/themes"),
              themeConfigPath: path.resolve(
                __dirname,
                "../src/semantic/theme.config"
              )
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new OmitJSforCSSPlugin(),
    new MiniCssExtractPlugin({
      filename: `${libraryName}.css`
    }),
    new CssoWebpackPlugin({ pluginOutputPostfix: "min" })
  ],
  resolve: {
    extensions: [".less"]
  }
};
