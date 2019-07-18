"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var DEFAULT_PORT = 3000;
var Server = (function () {
    function Server() {
        this.port = process.env.PORT || DEFAULT_PORT;
        this.normalizedPort = this.normalizePort(this.port);
        this.start(this.normalizedPort);
    }
    Server.prototype.start = function (port) {
        app_1.default.listen(port, function (err) {
            if (err) {
                return console.log(err);
            }
            return console.log("server is listening on " + port);
        });
    };
    Server.prototype.normalizePort = function (value) {
        var port = parseInt(value, 10);
        if (isNaN(port)) {
            return value;
        }
        if (port >= 0) {
            return port;
        }
        return DEFAULT_PORT;
    };
    return Server;
}());
new Server();
//# sourceMappingURL=index.js.map