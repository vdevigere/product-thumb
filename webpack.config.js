module.exports = {
  entry: {
    index: "./src/index.jsx"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react']
        }
      }
    ]
  }
};