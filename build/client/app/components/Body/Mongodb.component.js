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
var MongoDB = (function (_super) {
    __extends(MongoDB, _super);
    function MongoDB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MongoDB.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("p", { className: "lead" }, "MongoDB"),
            React.createElement("p", null, "MongoDB is the document based database. It stores JSON object in the form of BSON.")));
    };
    return MongoDB;
}(React.Component));
exports.default = MongoDB;
//# sourceMappingURL=Mongodb.component.js.map