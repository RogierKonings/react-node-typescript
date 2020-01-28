const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('../../webpack.config');

const proxyMiddleware = require('http-proxy-middleware');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);


const dotenv = require('dotenv');

dotenv.config();

const DEFAULT_PORT = 4200;

const port = process.env.PORT_CLIENT || DEFAULT_PORT;

const devConfig = config.devServer;


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  },
  historyApiFallback: true
}));



app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

// Set up the proxy.
if (devConfig.proxy) {
  Object.keys(devConfig.proxy).forEach(function (context) {
    app.use(proxyMiddleware(context, devConfig.proxy[context]));
  });
}


app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log(`server running at port ${port}`);
});
