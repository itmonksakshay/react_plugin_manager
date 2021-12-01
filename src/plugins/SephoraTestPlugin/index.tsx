import * as React from 'react';
import { IPlugin, PluginStore } from "react-pluggable";
import Root from "./app/root";


export default class SephoraTestPlugin implements IPlugin {

    namespace = "SephoraTest";

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

    PluginComponent = () => {
        return (<Root/>);
    };

    activate(): void {
            this.pluginStore.executeFunction(
                "Renderer.add",
                "SephoraTest.plugin1",
                this.PluginComponent
            );
    }
    deactivate(): void {
        this.pluginStore.executeFunction(
            "Renderer.remove",
            "SephoraTest.plugin1",
            this.PluginComponent
        );
    }
}