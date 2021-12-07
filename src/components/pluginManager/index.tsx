import * as React from "react";
import { usePluginStore, PluginStore } from "react-pluggable";
import { useSelector, useDispatch } from 'react-redux';


import { pluginInstallAction, pluginUninstallAction } from "../../redux/actions/pluginManagerActions";

export default function PluginManager(props:any) {
    const dispatch = useDispatch();
    const pluginStore: any = usePluginStore();

    const pluginInstallHandler = async(event: any, plugin: any) => {
        event.preventDefault();
        const x = await import(`../../plugins/${plugin.pluginFile}`).then((r) => r);


        console.log("selectedPlugin", x);
        pluginStore.install(x.default);
        dispatch(pluginInstallAction(plugin));
    }
    const pluginUninstallHandler = (event: any, plugin: any) => {
        event.preventDefault();
        pluginStore.uninstall(plugin.appKey);
        dispatch(pluginUninstallAction(plugin));

    }
    console.log("pluginStore Plugin Manager", pluginStore);
    return (<div>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Application Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.apps.map((app: any, key: number) => {

                    return (<tr key={key}>
                        <td>{key+1}</td>
                        <td>{app.appName}</td>
                        <td>{(app.status === 'DISABLED') ? (<><button onClick={(e) => pluginInstallHandler(e, app)}>Install</button></>) : (<><button onClick={(e) => pluginUninstallHandler(e, app)}>Uninstall </button><button> Update</button></>)}</td>
                        
                        <td><button>Delete</button></td>
                    </tr>);

                })}

            </tbody>
        </table>
    </div>);

}