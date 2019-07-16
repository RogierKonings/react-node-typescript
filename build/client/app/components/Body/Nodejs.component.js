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
var NodeJS = (function (_super) {
    __extends(NodeJS, _super);
    function NodeJS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeJS.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("p", { className: "lead" }, "NodeJS"),
            React.createElement("p", null, "NodeJS is the platform to run javascript on Google's V8 engine.")));
    };
    return NodeJS;
}(React.Component));
exports.default = NodeJS;
//# sourceMappingURL=Nodejs.component.js.map