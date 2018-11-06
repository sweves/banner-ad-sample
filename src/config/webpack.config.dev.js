const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const GoogleFontsPlugin = require("google-fonts-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "../../src/js/scripts.js"),
  devServer: {
    contentBase: "./docs",
    compress: true,
    port: 9000
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "../../docs"),
    publicPath: ""
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "main.css"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../../src/views/index.pug")
    }),
    new GoogleFontsPlugin(
      path.resolve(__dirname, "../../src/js/fonts/fonts.json")
    )
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader"
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "postcss-loader",
              options: {
                config: {
                  path: path.join(
                    __dirname,
                    "../../src/config/postcss.config.js"
                  )
                }
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "videos/[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};
