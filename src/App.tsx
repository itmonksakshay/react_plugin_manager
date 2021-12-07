import React from 'react';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import {
    createPluginStore,
    PluginProvider,
    RendererPlugin,
    PluginStore
} from "react-pluggable";
import './App.css';

import Root from "./components/Root";

const pluginStore: PluginStore = createPluginStore();
pluginStore.install(new RendererPlugin);


function App() {

    const state = useSelector((state: any) => state);
    console.log("state", state);

    return (
        <PluginProvider pluginStore={pluginStore}>
            <div className="App">
                <Root/>
            </div>
        </PluginProvider>
  );
}

export default App;
