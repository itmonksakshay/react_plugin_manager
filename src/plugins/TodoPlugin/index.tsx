import * as React from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import TodoApp from "./components/TodoApp";

class TodoPlugin implements IPlugin {
  namespace = "Todo";

  pluginStore!: PluginStore;

  getPluginName(): string {
    return `${this.namespace}@1.0.0`;
  }
  getDependencies(): string[] {
    return [];
  }

  init(pluginStore: PluginStore): void {
    this.pluginStore = pluginStore;
  }

  TodoComponent = () => {
    return <TodoApp />;
  };

  activate(): void {
      this.pluginStore.executeFunction(
        "Renderer.add",
        "Todo.todos",
        this.TodoComponent
      );
  }
  deactivate(): void {
    this.pluginStore.executeFunction(
      "Renderer.remove",
      "Todo.todos",
      this.TodoComponent
    );
  }
}

export default TodoPlugin;
