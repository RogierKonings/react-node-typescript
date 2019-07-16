const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('../webpack.config');

const proxyMiddleware = require('http-proxy-middleware');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack(config);

const port = process.env.PORT || 3000;

const devConfig = config.devServer;

// app.use(function(req, res, next) {
//   res.writeHead(200, {
//     'Content-Type': 'text/event-stream',
//     'Cache-Control': 'no-cache',
//     'Connection': 'keep-alive'
//   });
//   next();
// });

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
if(devConfig.proxy) {
  Object.keys(devConfig.proxy).forEach(function(context) {
    app.use(proxyMiddleware(context, devConfig.proxy[context]));
  });
}


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('server running');
});
