import * as actionTypes from '../constants/store.js';

export function update(data){
    return {
        type: actionTypes.STORE_UPDATE,
        data
    };

}
export function add(text){
    return {
        type: actionTypes.STORE_ADD,
        data: text
    };
}

export function remove(text){
    return {
        type: actionTypes.STORE_REMOVE,
        data: text
    };
}
