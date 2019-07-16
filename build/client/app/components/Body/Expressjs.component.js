"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ExpressJS = (function (_super) {
    __extends(ExpressJS, _super);
    function ExpressJS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpressJS.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("p", { className: "lead" }, "ExpressJS"),
            React.createElement("p", null, "ExpressJS is the server side framework for NodeJS platform.")));
    };
    return ExpressJS;
}(React.Component));
exports.default = ExpressJS;
//# sourceMappingURL=Expressjs.component.js.map