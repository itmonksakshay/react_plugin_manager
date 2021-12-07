import * as React from 'react';
import { IPlugin, PluginStore } from "react-pluggable";


 class SephoraTestPlugin2 implements IPlugin {

    namespace = "SephoraTest2";

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
        return (<h2>Sephora Plugin 2</h2>);
    };

    activate(): void {
        this.pluginStore.executeFunction(
            "Renderer.add",
            "SephoraTest2",
            this.PluginComponent
        );
    }
    deactivate(): void {
        this.pluginStore.executeFunction(
            "Renderer.remove",
            "SephoraTest2",
            this.PluginComponent
        );
    }
}

export default new  SephoraTestPlugin2;