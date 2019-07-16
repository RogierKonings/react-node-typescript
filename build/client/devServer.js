var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('../webpack.config');
var proxyMiddleware = require('http-proxy-middleware');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();
var compiler = webpack(config);
var port = process.env.PORT || 3000;
var devConfig = config.devServer;
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
    console.log('server running');
});
//# sourceMappingURL=devServer.js.map