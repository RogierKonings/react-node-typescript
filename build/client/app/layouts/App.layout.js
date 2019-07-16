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
var react_redux_1 = require("react-redux");
var store_config_1 = require("../config/store.config");
var Header_component_1 = require("../components/Header/Header.component");
var Footer_component_1 = require("../components/Footer/Footer.component");
var AppLayout = (function (_super) {
    __extends(AppLayout, _super);
    function AppLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLayout.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, { store: store_config_1.default({ initialState: {} }) },
            React.createElement("div", { id: "app-container", className: "container-fluid" },
                React.createElement(Header_component_1.default, null),
                this.props.children,
                React.createElement(Footer_component_1.default, null))));
    };
    return AppLayout;
}(React.Component));
exports.default = AppLayout;
//# sourceMappingURL=App.layout.js.map