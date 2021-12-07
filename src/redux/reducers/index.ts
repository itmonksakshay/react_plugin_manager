import { combineReducers } from 'redux';
import { pluginManagerReducer } from './pluginManagerReducer';

const rootReducer = combineReducers({
    pluginManagerReducer: pluginManagerReducer
});

export default rootReducer;