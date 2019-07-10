const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

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
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: "vue-style-loader!css-loader!sass-loader",
            sass: "vue-style-loader!css-loader!sass-loader?indentedSyntax"
          }
        }
      },
      {
        test: /\.js?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  devtool: "source-map"
}

module.exports = [mainConfig, rendererConfig]
