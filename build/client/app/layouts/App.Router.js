"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var App_layout_1 = require("./App.layout");
var Nodejs_component_1 = require("../components/Body/Nodejs.component");
var Expressjs_component_1 = require("../components/Body/Expressjs.component");
var Reactjs_component_1 = require("../components/Body/Reactjs.component");
var Mongodb_component_1 = require("../components/Body/Mongodb.component");
var AppRouter = function () { return (React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(react_router_1.Route, { path: "/", component: App_layout_1.default }),
    React.createElement(react_router_1.Route, { path: "/nodejs", component: Nodejs_component_1.default }),
    React.createElement(react_router_1.Route, { path: "/express", component: Expressjs_component_1.default }),
    React.createElement(react_router_1.Route, { path: "/mongo", component: Mongodb_component_1.default }),
    React.createElement(react_router_1.Route, { path: "/react", component: Reactjs_component_1.default }))); };
exports.default = AppRouter;
//# sourceMappingURL=App.Router.js.map