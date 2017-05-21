/*
    搜索页面的头部
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router';

//引入组件和央视
import SearchInput from '../searchInput/searchInput.jsx';
import './searchHeader.less';

class SearchHeader extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    clickBackFn(){
        window.history.back();
    }
    //小红新输入路由的变更
    enterHandleFn(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <div  id="search-header" className="clearfix">
                <span className="back-icon fl" onClick={this.clickBackFn.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container fr">
                    <span className="search-icon fl">
                        <i className="icon-search"></i>
                    </span>
                    <SearchInput  value={this.props.keyword || ''} enterFn = {this.enterHandleFn.bind(this)}/>
                </div>

            </div>
        );
    }
}

export default SearchHeader;
