import * as React from "react";
import { usePluginStore, PluginStore } from "react-pluggable";
import PluginManager from './pluginManager';
import { useSelector } from 'react-redux';
import Sidebar from "./sidebarComponent";

const Root = (props: any) => {
    const pluginStore: PluginStore = usePluginStore();
    let Renderer = pluginStore.executeFunction("Renderer.getRendererComponent");
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [component, setComponent] = React.useState("pluginManager");
    const pluginManagerState = useSelector((state: any) => state.pluginManagerReducer);

    console.log("Component", component);

    const onLogin = (event: any) => {
        pluginStore.executeFunction("Auth.authenticate");
        setLoggedIn(true);
    };
    const onLogout = (event: any) => {
        pluginStore.executeFunction("Auth.logout");
        setLoggedIn(false);
    };

    const selectApp = (component:any) => {
        return setComponent(component);

    }

    React.useEffect(() => {

    }, []);

    return (
        <div className="container mt-5 row">
            <div className="col-12 row justify-content-between">
                <h3 className="text-center text-white">
                    App Plugin Mananger
                </h3>
                <div>
                    {!loggedIn ? (
                        <button
                            className="btn btn-primary btn-lg block"
                            id="login"
                            style={{ margin: "0 auto" }}
                            onClick={onLogin}
                        >
                          Login
                        </button>
                        ) : (
                        <button
                            className="btn btn-primary btn-lg block"
                            id="logout"
                            style={{ margin: "0 auto" }}
                            onClick={onLogout}
                        >
                          Logout
                        </button>)}
                </div>
            </div>
            <div className="col-12 row">
                <div className="col-2">
                    <Sidebar selectApp={selectApp} apps={pluginManagerState.apps}/>
                </div>
                <div className="col-10">
                    {(component === "pluginManager") ? (<PluginManager apps={pluginManagerState.apps} />)
                      : (<Renderer placement={component} />)}

                </div>
            </div>    
        </div>);
};

export default Root;
