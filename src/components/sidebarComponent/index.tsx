import * as React from 'react';

export default function Sidebar(props:any) {

    return (<ul>
        <li key={0}><button className="btn btn-primary block" onClick={() => props.selectApp("pluginManager")}>Plugin Manager</button></li>
        {props.apps.map((app:any, key:number) => {
            if (app.status === "ENABLED") {
                return (<li key={key+1}><button className="btn btn-primary block" onClick={() => props.selectApp(app.appKey)}>{app.appName}</button></li>);
            }
        })}
    </ul>)

}