import * as actionTypes from '../constants/userInfo.js';

export function update(data){
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    };
}
