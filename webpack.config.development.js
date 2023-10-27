const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
    experiments: {
      asyncWebAssembly: true,
      syncWebAssembly: true,
    },
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
          test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
          type: "javascript/auto",
          loader: "file-loader",
          options: {
            publicPath: "../",
            name: "[path][name].[ext]",
            context: path.resolve(__dirname, "src/assets"),
            emitFile: false,
          },
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: "javascript/auto",
          exclude: /images/,
          loader: "file-loader",
          options: {
            publicPath: "../",
            context: path.resolve(__dirname, "src/assets"),
            name: "[path][name].[ext]",
            emitFile: false,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        minify: false,
      }),
      new CopyPlugin({
        patterns: [
          { from: "./src/assets/images", to: "images" },
          { from: "./src/assets/fonts", to: "fonts" },
        ],
      }),
    ],
  };
};
