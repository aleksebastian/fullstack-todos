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
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              import: false,
              modules: true,
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/client/dist",
  },
  devtool: "source-map",
  watch: true,
};
