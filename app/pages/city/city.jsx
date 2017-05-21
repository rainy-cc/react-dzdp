/*
    city页面
        选择当前城市
        修改.......
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsUserInfo from '../../actions/userInfo.js';
import localStorageFn from '../../utils/localStore.js';
import {CTIYNAME} from '../../config/storageKey.js';
import { hashHistory } from 'react-router';

//该页面中用到的组件
import CityHeader from '../../components/cityHeader/cityHeader.jsx';
import CurrentCity from '../../components/cityCurrent/cityCurrent.jsx';
import HotCityList from '../../components/cityHotList/hotCityList.jsx';

class PageCity extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount() {
        //console.log(this.props.userInfo);
        //console.log(this.props.userInfoActions);
    }
    //修改当前城市
    cityChangeFn(newCity) {

        if (newCity == 'undefined') {
            return;
        }
        //修改redux；
        const userInfo = this.props.userInfo;
        userInfo.cityName = newCity;
        this.props.userInfoActions.update(userInfo);
        //修改localstorage
        localStorageFn.setItem(CTIYNAME, newCity);
        //跳转到首页
        hashHistory.push('/');
    }
    render() {
        return (
            <div>
                <CityHeader title='请选择城市'/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <HotCityList cityChangeFn={this.cityChangeFn.bind(this)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {userInfo: state.userInfo};
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(actionsUserInfo, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(PageCity);
