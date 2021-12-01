import * as React from "react";
import "./App.css";
import {
  createPluginStore,
  PluginProvider,
  RendererPlugin
} from "react-pluggable";
import AuthPlugin from "./plugins/AuthPlugin";
import Root from "./components/Root";
import { PluginStoreWithPlugins } from "./types";
import TodoPlugin from "./plugins/TodoPlugin";
import SephoraTestPlugin from "./plugins/SephoraTestPlugin";
//import PluginManager from './plugins/PluginManager'

const pluginStore: PluginStoreWithPlugins = createPluginStore();
pluginStore.install(new RendererPlugin());
pluginStore.install(new AuthPlugin());
pluginStore.install(new TodoPlugin());
pluginStore.install(new SephoraTestPlugin());


function App() {
  return (
    <div>
      <PluginProvider pluginStore={pluginStore}>
        <Root />
      </PluginProvider>
    </div>
  );
}

export default App;
