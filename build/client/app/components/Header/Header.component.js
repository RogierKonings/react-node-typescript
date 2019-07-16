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
var superagent = require("superagent");
var Header = (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { heading: '' };
        return _this;
    }
    Header.prototype.componentWillMount = function () {
        var _this = this;
        superagent
            .get('/api/hello')
            .end(function (_, res) {
            _this.setState({
                heading: res.body.msg
            });
        });
    };
    Header.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("h1", { className: "heading" }, this.state.heading)),
            React.createElement("h1", { className: "page-header" }, "Express-React-Scaffholding")));
    };
    return Header;
}(React.Component));
exports.default = Header;
//# sourceMappingURL=Header.component.js.map