/*
    登录页面的表单组件
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//需要的组件

import './login.less';


//定义头部搜索区域组件
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phoneNumber: ''
        };
    }
    componentDidMount(){
        //console.log(this.props.loginIn)
    }
    //onChange事件
    changeHandleFn(e){
        this.setState({
            phoneNumber: e.target.value
        });
    }
    //登录
    clickHandleFn(){
        const username = this.state.phoneNumber;
        this.props.loginIn(username);
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input
                        type="text"
                        placeholder="输入手机号"
                        onChange={this.changeHandleFn.bind(this)}
                        value={this.state.username}
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码"/>

                </div>
                <button className="btn-login" onClick={this.clickHandleFn.bind(this)}>登录</button>
            </div>
        );
    }
}

export default LoginForm;
