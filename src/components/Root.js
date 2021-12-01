"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_pluggable_1 = require("react-pluggable");
var pluginManager_1 = require("./pluginManager");
var Root = function (props) {
    var pluginStore = react_pluggable_1.usePluginStore();
    var Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
    var _a = React.useState(false), loggedIn = _a[0], setLoggedIn = _a[1];
    var _b = React.useState(""), component = _b[0], setComponent = _b[1];
    var onLogin = function (event) {
        pluginStore.executeFunction("Auth.authenticate");
        setLoggedIn(true);
    };
    var onLogout = function (event) {
        pluginStore.executeFunction("Auth.logout");
        setLoggedIn(false);
    };
    var selectApp = function (component) {
        return setComponent(component);
    };
    return (React.createElement("div", { className: "container mt-5 row" },
        React.createElement("div", { className: "col-12 row justify-content-between" },
            React.createElement("h3", { className: "text-center text-white" }, "App Plugin Mananger"),
            React.createElement("div", null, !loggedIn ? (React.createElement("button", { className: "btn btn-primary btn-lg block", id: "login", style: { margin: "0 auto" }, onClick: onLogin }, "Login")) : (React.createElement("button", { className: "btn btn-primary btn-lg block", id: "logout", style: { margin: "0 auto" }, onClick: onLogout }, "Logout")))),
        React.createElement("div", { className: "col-12 row" },
            React.createElement("div", { className: "col-2" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("button", { className: "btn btn-primary block", onClick: function () { return selectApp("Todo.todos"); } }, "Todo App")),
                    React.createElement("li", null,
                        React.createElement("button", { className: "btn btn-primary block", onClick: function () { return selectApp("SephoraTest.plugin1"); } }, "Sephora Test App 1")))),
            React.createElement("div", { className: "col-10" },
                React.createElement(pluginManager_1.default, null),
                React.createElement(Renderer, { placement: component })))));
};
exports.default = Root;
//# sourceMappingURL=Root.js.map