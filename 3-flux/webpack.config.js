const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: "/",
  },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, "src/index.html"),
      scriptLoading: "defer",
    }),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
};
