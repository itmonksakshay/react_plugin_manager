"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var root_1 = require("./app/root");
var SephoraTestPlugin = /** @class */ (function () {
    function SephoraTestPlugin() {
        this.namespace = "SephoraTest";
        this.PluginComponent = function () {
            return (React.createElement(root_1.default, null));
        };
    }
    SephoraTestPlugin.prototype.getPluginName = function () {
        return this.namespace + "@1.0.0";
    };
    SephoraTestPlugin.prototype.getDependencies = function () {
        return [];
    };
    SephoraTestPlugin.prototype.init = function (pluginStore) {
        this.pluginStore = pluginStore;
    };
    SephoraTestPlugin.prototype.activate = function () {
        this.pluginStore.executeFunction("Renderer.add", "SephoraTest.plugin1", this.PluginComponent);
    };
    SephoraTestPlugin.prototype.deactivate = function () {
        this.pluginStore.executeFunction("Renderer.remove", "SephoraTest.plugin1", this.PluginComponent);
    };
    return SephoraTestPlugin;
}());
exports.default = SephoraTestPlugin;
//# sourceMappingURL=index.js.map