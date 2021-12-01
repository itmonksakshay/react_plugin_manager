"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function App() {
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
exports.default = App;
//# sourceMappingURL=index.js.map