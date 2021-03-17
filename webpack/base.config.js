const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();


module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    // filename: "bundle.js",
    path: path.resolve('./dist')
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin() // { configFile: "./tsconfig.json" }
    ]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader", options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
        }
      },
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ title: "React TS", template: "./src/index.html" }),
  ]
};
