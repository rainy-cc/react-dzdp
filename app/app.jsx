import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {hashHistory} from 'react-router';

import configureStore from './store/store.js';
import AppRouter from './router/router.js';
//样式引入
import './static/css/reset.less';
import './static/css/font.css';
// 创建 Redux 的 store 对象
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
    <AppRouter history={hashHistory}/>
</Provider>, document.getElementById('root'));
