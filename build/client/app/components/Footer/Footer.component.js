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
var react_router_dom_1 = require("react-router-dom");
var Footer = (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "btn-group" },
                React.createElement(react_router_dom_1.Link, { to: "/nodejs" },
                    React.createElement("button", { className: "btn btn-default btn-sm" }, "NodeJS")),
                React.createElement(react_router_dom_1.Link, { to: "/express" },
                    React.createElement("button", { className: "btn btn-default btn-sm" }, "ExpressJS")),
                React.createElement(react_router_dom_1.Link, { to: "/mongo" },
                    React.createElement("button", { className: "btn btn-default btn-sm" }, "MongoDB")),
                React.createElement(react_router_dom_1.Link, { to: "/react" },
                    React.createElement("button", { className: "btn btn-default btn-sm" }, "ReactJS")))));
    };
    return Footer;
}(React.Component));
exports.default = Footer;
//# sourceMappingURL=Footer.component.js.map