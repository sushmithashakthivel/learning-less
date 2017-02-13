const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const METADATA = {
  host: "localhost",
  port: 8080
}
module.exports = {
  entry: [
    // "webpack-dev-server/client?http://"+ METADATA.host + ":" + METADATA.port
    `eventsource-polyfill`, // HMR support Internet explorer
    `webpack-dev-server/client?http://${METADATA.host}:${METADATA.port}`,
    `webpack/hot/only-dev-server`,
    `${__dirname}/index`
  ],
  devtool: "cheap-module-eval-source-map",
  output:{
    path: __dirname,
    filename:"bundle.js"
  },
  resolve: {
    // resolving the extension when import the js file.
    extensions: [".js"],
    alias: {
      "bootstrap-less": path.resolve(__dirname, "node_modules/bootstrap/less/bootstrap.less"),
      "font-awesome-less": path.resolve(__dirname, "node_modules/font-awesome/less/font-awesome.less")
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader!postcss-loader!less-loader"
        })
      },
      {
        test: /\.(eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.gif/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        postcss: [require("autoprefixer")]
      }
    }),
    new ExtractTextPlugin("css/style.css"),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      "ENV": JSON.stringify("development"),
      "process.env": {
        "ENV": JSON.stringify("development"),
        "NODE_ENV": JSON.stringify("development")
      }
    }),
    new webpack.WatchIgnorePlugin([
      path.resolve(__dirname, '/node_modules/')
    ])
  ]
};