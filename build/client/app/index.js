"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_Router_1 = require("./layouts/App.Router");
require("./index.html");
require("./style.css");
ReactDOM.render(React.createElement(App_Router_1.default, null), document.getElementById('root'));
if (module.hot) {
    module.hot.accept('./layouts/App.Router.tsx', function () {
        var AppRouter = require('./layouts/App.Router.tsx').default;
        console.log('>>>>>> Router Updated !! <<<<<<<');
        ReactDOM.render(React.createElement(AppRouter, null), document.getElementById('root'));
    });
}
//# sourceMappingURL=index.js.map