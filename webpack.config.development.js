const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    mode: options.mode,
    entry: "./src/App.tsx",
    resolve: { extensions: [".tsx", ".ts", ".js", ".css"] },
    output: {
      filename: "js/[name].bundle.js",
      path: path.resolve(__dirname, "./dist"),
      publicPath: "",
    },
    devServer: {
      static: {
        directory: "./dist",
      },
    },
    target: "web",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|scss)$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
                },
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.svg/,
          type: "asset/inline",
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: false,
      }),
    ],
  };
};
