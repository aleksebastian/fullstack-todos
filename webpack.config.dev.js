module.exports = {
  mode: "development",
  entry: __dirname + "/client/src/index.js",
  module: {
    rules: [
      {
        test: [/\.jsx$|.js$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
  },
  devtool: "source-map",
  devServer: {
    static: __dirname + "/client/dist",
    compress: true,
    // open: true,
    // To open with your browser of choice comment line above and uncomment lines below
    open: {
      app: {
        name: "Brave Browser",
      },
    },
  },
};
