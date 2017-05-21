/*
    搜索页面组件
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router'

//引用该页面需要的组件
import SearchHeader from '../../components/searchHeader/searchHeader.jsx';
import SearchList from './subpage/searchList.jsx';

class PageSearch extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        //console.log( this.props.params );
    }
    render() {
        const params = this.props.params;//拿到路由的参数
        return (
            <div>
                <SearchHeader keyword = {params.keyword} />
                <SearchList keyword={params.keyword} category={params.category} />
            </div>
        );
    }
}

export default PageSearch;
