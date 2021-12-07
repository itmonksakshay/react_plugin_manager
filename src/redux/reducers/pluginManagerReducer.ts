import { PluginManagerState } from '../types';
import { PLUGIN_MANAGER_REQUEST, GET_PLUGINS_SUCCESS, GET_PLUGINS_ERROR, PLUGIN_INSTALL_SUCCESS, PLUGIN_INSTALL_ERROR, PLUGIN_UNINSTALL_SUCCESS} from '../actionTypes';
const init: PluginManagerState = {
    isLoading: false,
    apps: [{ id: 1, appName: "To Do App", appKey: 'Todo', status: "DISABLED", pluginFile:"TodoPlugin" },
        { id: 2, appName: "Sephora Test App", appKey: 'SephoraTest', status: "DISABLED", pluginFile: "SephoraTestPlugin"  },
        { id: 3, appKey: 'SephoraTest2', appName: "Sephora Test App 2", status: "DISABLED", pluginFile: "SephoraTestPlugin2" },
        { id: 4, appKey: 'SephoraTest3', appName: "Sephora Test App 3", status: "DISABLED", pluginFile: "SephoraTestPlugin3" }    ],
    error:''
};
export function pluginManagerReducer(state: PluginManagerState = init,action: any): PluginManagerState {
    switch (action.type) {

        case PLUGIN_MANAGER_REQUEST: return { ...state, isLoading: true };
        case GET_PLUGINS_SUCCESS: return { ...state, isLoading: false, apps: action.payload };
        case GET_PLUGINS_ERROR: return { ...state, isLoading: false, apps: [], error: action.payload };
        case PLUGIN_INSTALL_SUCCESS: {
            let updatedList = state.apps.map((app:any) => {
                if (app.id === action.payload.id) {
                    app.status = "ENABLED";
                    return app;
                }
                return app;
            })
            return { ...state, apps: updatedList, isLoading: false };
        }
        case PLUGIN_UNINSTALL_SUCCESS: {
            let updatedList = state.apps.map((app: any) => {
                if (app.id === action.payload.id) {
                    app.status = "DISABLED";
                    return app;
                }
                return app;
            })
            return { ...state, apps: updatedList, isLoading: false };
        }
        case PLUGIN_INSTALL_ERROR: return { ...state, apps:[],isLoading: false,error:action.payload }
        default:  return state;
    }
}