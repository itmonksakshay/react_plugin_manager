"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./App.css");
var react_pluggable_1 = require("react-pluggable");
var AuthPlugin_1 = require("./plugins/AuthPlugin");
var Root_1 = require("./components/Root");
var TodoPlugin_1 = require("./plugins/TodoPlugin");
var SephoraTestPlugin_1 = require("./plugins/SephoraTestPlugin");
//import PluginManager from './plugins/PluginManager'
var pluginStore = react_pluggable_1.createPluginStore();
pluginStore.install(new react_pluggable_1.RendererPlugin());
pluginStore.install(new AuthPlugin_1.default());
pluginStore.install(new TodoPlugin_1.default());
pluginStore.install(new SephoraTestPlugin_1.default());
function App() {
    return (React.createElement("div", null,
        React.createElement(react_pluggable_1.PluginProvider, { pluginStore: pluginStore },
            React.createElement(Root_1.default, null))));
}
exports.default = App;
//# sourceMappingURL=App.js.map