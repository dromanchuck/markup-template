const path = require("path");
const webpack = require("webpack");

const WebpackNotifierPlugin = require("webpack-notifier");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");
const utils = require("./utils");

const htmlGlob = require("./htmlGlob");

module.exports = env => {
  console.log(process);
  return {
    context: path.resolve(__dirname, "../src"),
    entry: {
      app: "./js/common.js"
    },
    output: {
      path: path.resolve(__dirname, "../dist"),
      publicPath: "/",
      //      filename: 'assets/js/[name].bundle.js'
      filename: "assets/js/[name].[hash:7].bundle.js"
    },
    devServer: {
      contentBase: path.resolve(__dirname, "../src")
    },
    resolve: {
      extensions: [".js"],
      alias: {
        source: path.resolve(__dirname, "../src"), // Relative path of src
        images: path.resolve(__dirname, "../src/assets/images"), // Relative path of images
        fonts: path.resolve(__dirname, "../src/assets/fonts") // Relative path of fonts
      }
    },

    /*
      Loaders with configurations
    */
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            env === "development"
              ? "style-loader"
              : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true,
                minimize: true,
                colormin: false
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            env === "development"
              ? {
                  loader: "style-loader",
                  options: {
                    sourceMap: true
                  }
                }
              : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: true,
                colormin: false
              }
            },

            "postcss-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 3000,
            name: "assets/images/[name].[hash:7].[ext]"
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 5000,
            name: "assets/fonts/[name].[hash:7].[ext]"
          }
        },
        {
          test: /\.(mp4)(\?.*)?$/,
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "assets/videos/[name].[hash:7].[ext]"
          }
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true
        })
      ],
      splitChunks: {
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            filename: "assets/js/vendor.[hash:7].bundle.js",
            // sync + async chunks
            chunks: "all",
            // import file path containing node_modules
            test: /node_modules/
          }
        }
      }
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "assets/css/[name].[hash:7].bundle.css",
        chunkFilename: "[id].css"
      }),
      ...htmlGlob.pages(env),

      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery",
        "window.jQuery": "jquery"
      }),
      new WebpackNotifierPlugin({
        title: "Arateg project"
      })
    ]
  };
};
