//页面的容器
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import localStorageFn from '../utils/localStore.js';
import { CTIYNAME } from '../config/storageKey.js';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as actionsUserInfo from '../actions/userInfo.js';

class PageIndex extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false //初始状态
        };
    }
    componentDidMount() {
        //var _this = this;
        //localStorage获取城市
        let cityName = localStorageFn.getItem(CTIYNAME);
        //console.log(cityName);
        if(cityName == 'undefined'){
            cityName = '上海';
        }

        //存到redux
        this.props.userInfoActions.update({
            cityName: cityName
        });

        this.setState({
            initDone: true //加载完成
        });

    }
    render() {
        //children
        return (
            <div>
                {
                    this.state.initDone
                    ? this.props.children
                    : <div>loading...</div>
                }
            </div>
        );
    }
}
//redux
function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    };
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators( actionsUserInfo, dispatch )
    };
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps,mapDispatchToProps)(PageIndex);
