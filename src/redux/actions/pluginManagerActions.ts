import { PLUGIN_MANAGER_REQUEST, GET_PLUGINS_SUCCESS, GET_PLUGINS_ERROR, PLUGIN_INSTALL_SUCCESS, PLUGIN_INSTALL_ERROR, PLUGIN_UNINSTALL_SUCCESS} from '../actionTypes';
export const pluginInstallAction = (plugin: any) => {
        const action: { type: string; payload: any; } = {
            type: PLUGIN_INSTALL_SUCCESS,
            payload:plugin
    }
    return action;
}

export const pluginUninstallAction = (plugin: any) => {
    const action: { type: string; payload: any; } = {
        type: PLUGIN_UNINSTALL_SUCCESS,
        payload: plugin
    }
    return action;
}