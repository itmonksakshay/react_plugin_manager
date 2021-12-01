"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TodoApp_1 = require("./components/TodoApp");
var TodoPlugin = /** @class */ (function () {
    function TodoPlugin() {
        this.namespace = "Todo";
        this.TodoComponent = function () {
            return React.createElement(TodoApp_1.default, null);
        };
    }
    TodoPlugin.prototype.getPluginName = function () {
        return this.namespace + "@1.0.0";
    };
    TodoPlugin.prototype.getDependencies = function () {
        return [];
    };
    TodoPlugin.prototype.init = function (pluginStore) {
        this.pluginStore = pluginStore;
    };
    TodoPlugin.prototype.activate = function () {
        this.pluginStore.executeFunction("Renderer.add", "Todo.todos", this.TodoComponent);
    };
    TodoPlugin.prototype.deactivate = function () {
        this.pluginStore.executeFunction("Renderer.remove", "Todo.todos", this.TodoComponent);
    };
    return TodoPlugin;
}());
exports.default = TodoPlugin;
//# sourceMappingURL=index.js.map