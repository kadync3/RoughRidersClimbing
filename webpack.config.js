const path = require("path");

module.exports = function(_env, argv) {
  const isProduction = argv.mode === "production";
  const isDevelopment = !isProduction;

  return {
    devtool: isDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "assets/js/[name].[contenthash:8].js",
      publicPath: "/"
          },
    module: {
      rules: [
        { test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader' },
        
      ]
    },
    resolve: {
      extensions: [".js", ".jsx"]
    }
  };
};