const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: { popup: path.resolve("./src/popup.tsx") },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader", // postcss loader needed for tailwindcss
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      title: "reactjs borderplate",
      filename: "popup.html",
      chunks: ["popup"],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("public"),
          to: path.resolve("dist"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: { filename: "[name].js" },
};
