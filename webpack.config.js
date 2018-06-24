const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "examples/src/index.html"),
  filename: "./index.html"
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const libraryName = "library";
const glob = require("glob");

function getEntries(pattern) {
  const entries = {};
  glob.sync(pattern).forEach(file => {
    entries[file.replace("src/", "")] = path.join(__dirname, file);
  });
  return entries;
}

module.exports = {
  entry: getEntries("src/**/*.js"),
  // entry: path.join(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    library: libraryName,
    filename: "[name]",
    libraryTarget: "commonjs"
    // umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      // {
      //   test: /\.less$/i,
      //   // include: /[/\\]node_modules[/\\]@infinitecsolutions[/\\]semantic-ui-less[/\\]/,
      //   use: [
      //     // {
      //     //   loader: "style-loader"
      //     // // },
      //     // {
      //     //   loader: "css-loader",
      //     //   options: {
      //     //     sourceMap: true,
      //     //     modules: true,
      //     //     localIdentName: "[local]___[hash:base64:5]"
      //     //   }
      //     // },
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "less-loader"
      //   ]
      //   // use: MiniCssExtractPlugin.extract({
      //   //   use: [
      //   //     {
      //   //       loader: "css-loader",
      //   //       options: {
      //   //         importLoaders: 2,
      //   //         sourceMap: true,
      //   //         minimize: true
      //   //       }
      //   //     },
      //   //     { loader: "postcss-loader", options: { sourceMap: true } },
      //   //     {
      //   //       loader: "@infinitecsolutions/semantic-ui-less-module-loader",
      //   //       options: {
      //   //         defaultFolder: path.resolve(
      //   //           __dirname,
      //   //           "../node_modules/@infinitecsolutions/semantic-ui-less"
      //   //         ),
      //   //         siteFolder: path.resolve(
      //   //           __dirname,
      //   //           `../src/semantic-ui/finavi`
      //   //         ),
      //   //         themesFolder: path.resolve(
      //   //           __dirname,
      //   //           "../src/semantic-ui/themes"
      //   //         ),
      //   //         themeConfigPath: path.resolve(
      //   //           __dirname,
      //   //           "../src/semantic-ui/theme.config"
      //   //         )
      //   //       }
      //   //     }
      //   //   ]
      //   // })
      // },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    port: 3001
  },
  externals: {
    react: "react"
  }
};
