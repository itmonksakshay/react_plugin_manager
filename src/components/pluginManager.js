"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_pluggable_1 = require("react-pluggable");
function PluginManager() {
    var pluginStore = react_pluggable_1.usePluginStore();
    console.log("pluginStore Plugin Manager", pluginStore);
    return (React.createElement("div", null,
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "S.No"),
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Actions"))),
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null, "1"),
                    React.createElement("td", null, "App Name"),
                    React.createElement("td", null,
                        React.createElement("button", null, "Install")),
                    React.createElement("td", null,
                        React.createElement("button", null, "Uninstall")),
                    React.createElement("td", null,
                        React.createElement("button", null, "Delete")))))));
}
exports.default = PluginManager;
//# sourceMappingURL=pluginManager.js.map