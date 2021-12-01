import React from "react";
import { IPlugin, PluginStore } from "react-pluggable";
import App from './app';

class PluginManager implements IPlugin {
    namespace = "PluginManager";

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

    AppComponent = () => {
        return <App/>;
    };

    activate(): void {
        this.pluginStore.executeFunction(
            "Renderer.add",
            "Plugin.manager",
            this.AppComponent
        );
    }
    deactivate(): void {
        this.pluginStore.executeFunction(
            "Renderer.remove",
            "Plugin.manager",
            this.AppComponent
        );
    }
}

export default PluginManager;
