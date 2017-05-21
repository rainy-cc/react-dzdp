import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link ,hashHistory } from 'react-router';

//需要的组件
import SearchInput from '../searchInput/searchInput.jsx';

import './homeHeader.less';

//定义头部搜索区域组件
class HomeHeader extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        };
    }

    enterHandleFn(value){
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <div id="home-header" className="clearfix">
                <div className="home-header-left fl">
                    {/*跳转到选择city页面*/}
                    <Link to="/city">
                        {this.props.cityName}&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-middle fl">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" enterFn = {this.enterHandleFn.bind(this)}/>
                    </div>
                </div>
                <div className="home-header-right fr">
                    {/*跳转到登录页面*/}
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>

            </div>
        );
    }
}

export default HomeHeader;
