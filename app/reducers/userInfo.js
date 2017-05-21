import * as actionTypes from '../constants/userInfo.js';//整体加载
const initialState = [];

export default function userInfo(state = initialState, action) {
    switch (action.type) {
        //修改登录城市
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}
