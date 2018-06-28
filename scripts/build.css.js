"use strict";

const webpack = require("webpack");
const getWebpackConfig = require("../config/webpack.config.css.js");

function build(site) {
  webpack(getWebpackConfig(site)).run((err, stats) => {});
}

// TODO: display output feedback
build("beesy");
build("fenius");
build("finavi");
