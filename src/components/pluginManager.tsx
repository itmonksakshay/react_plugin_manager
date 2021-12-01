import * as React from "react";
import { usePluginStore, PluginStore } from "react-pluggable";

export default function PluginManager() {

    const pluginStore: PluginStore = usePluginStore();
    console.log("pluginStore Plugin Manager", pluginStore);

    return (<div>
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>App Name</td>
                    <td><button>Install</button></td>
                    <td><button>Uninstall</button></td>
                    <td><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>);

}