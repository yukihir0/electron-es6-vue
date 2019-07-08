const path = require("path");

const outputPath = path.join(__dirname, "dist");
const mode = "development";
const enableSourceMap = mode === "development";

const mainConfig = {
  mode: mode,
  target: "electron-main",
  entry: "./src/main/index.js",
  output: {
    path: outputPath,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}

const rendererConfig = {
  mode: mode,
  target: "electron-renderer",
  entry: "./src/renderer/index.js",
  output: {
    path: outputPath,
    filename: "renderer.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        },
        exclude: /node_modules/
      }
    ]
  },
  devtool: "source-map"
}

module.exports = [mainConfig, rendererConfig]
