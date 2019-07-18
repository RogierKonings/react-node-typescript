"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('./routes/index');
var App = (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        this.express.use('/api', router);
        this.express.use('/', function (req, res) { return res.sendFile(path.join(__dirname, '../dist', 'index.html')); });
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map