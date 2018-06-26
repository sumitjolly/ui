import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import pkg from "../package.json";

export default [
  {
    input: "src/index.js",
    output: {
      name: "infinitec-ui",
      file: pkg.main,
      format: "cjs"
    },
    external: [
      "react",
      "react-proptypes",
      "@infinitecsolutions/semantic-ui-react"
    ],
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
