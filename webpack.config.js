const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  devtool: isDev ? "cheap-module-source-map" : false,

  entry: {
    content: path.join(__dirname, "src", "ts", "content.ts"),
    background: path.join(__dirname, "src", "ts", "background.ts"),
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: { filename: "assets/[name][ext]" },
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/manifest.json",
          transform: (content) =>
            Buffer.from(
              JSON.stringify({
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...JSON.parse(content.toString()),
              })
            ),
        },
        { from: "src/img", to: "img", noErrorOnMissing: true },
      ],
    }),

    new MiniCssExtractPlugin({ filename: "[name].css" }),

    ...(!isDev ? [new TerserPlugin({ extractComments: false })] : []),
  ],
};
