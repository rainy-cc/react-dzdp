/*
    登录页面
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionsUserInfo from '../../actions/userInfo.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';
//需要的组件
import CityHeader from '../../components/cityHeader/cityHeader.jsx'
import LoginForm from '../../components/login/loginForm.jsx';


//定义头部搜索区域组件
class PageLogin extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isLogin: true
        };
    }

    componentDidMount(){
        const userInfo = this.props.userInfo;
        if(userInfo.username){
            //已经登陆
            hashHistory.push('/user');
        }else{
            // 未登录
            this.setState({
                isLogin: false
            });
        }
    }
    //登陆陈功以后
    loginIn(username){
        //保存用户名
        const actions = this.props.userInfoActions;
        let userInfo = this.props.userInfo;
        userInfo.username = username;
        actions.update(userInfo);

        //跳转链接
        const router= this.props.params.router;//获取路由参数
        if(router){
            hashHistory.push(router);
        }else{
            hashHistory.push('/user');
        }
    }

    render() {
        return (
            <div>
                <CityHeader title="登录"/>
                    {
                        this.state.isLogin?<div></div>:<LoginForm loginIn = {this.loginIn.bind(this)}/>
                    }
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    };
}
function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(actionsUserInfo, dispatch)
    };
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps,mapDispatchToProps)(PageLogin);
