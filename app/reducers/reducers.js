import { combineReducers} from 'redux';
import userInfo from './userInfo.js';
import store from './store.js';

//整合规则
const rootReducer = combineReducers({
    //es6
    userInfo,
    store
});

export default rootReducer;
