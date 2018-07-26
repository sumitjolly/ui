"use strict";

const webpack = require("webpack");
const getWebpackConfig = require("../config/webpack.config.css.js");
const chalk = require("chalk");

function printErrors(summary, errors) {
  console.log(chalk.red(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

function build(site) {
  webpack(getWebpackConfig(site)).run((err, stats) => {
    if (err) {
      printErrors("Failed to compile. Errors: ", [err]);
      process.exit(1);
    }

    if (stats.compilation.errors.length) {
      printErrors(
        "Failed to compile. Compilation errors: ",
        stats.compilation.errors
      );
      process.exit(1);
    }
  });
}

// TODO: display output feedback
build("beesy");
build("fenius");
build("finavi");
