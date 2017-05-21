/*
    用户评价购买收藏
        验证用户是否登录  需要redux
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

import * as storeActions from '../../../actions/store.js';

//引入组件
import BuyAndValue from '../../../components/buyAndValue/buyValve.jsx';


class BuyGoods extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isValue: false
        };
    }
    //验证是否登录
    isLoginFn(){
        const id = this.props.id;
        const userInfo = this.props.userInfo;
        //若用户名不存在，调到登录页面
        if(!userInfo.username){
            hashHistory.push('/login/'+ encodeURIComponent('/detail/') + id);

            return false;
        }
        return true;
    }
    componentDidMont(){
        //当前是否已经被收藏
        const id = this.props.id;
        const store = this.prosps.store;
        store.some(item=>{
            if(item.id === id){
                this.setState({
                    isValue: true
                });
                return true;
            }
            return;
        });
    }


    //购买.跳到用户中心
    buyHandleFn(){
        let loginState = this.isLoginFn();//拿到登录状态
        //若未登陆
        if(!loginState){
            return;
        }
        //若登陆 跳转到主页
        hashHistory.push('/user');
    }
    //收藏功能
    valueHandleFn(){
        let loginState = this.isLoginFn();//拿到登录状态
        //若未登陆
        if(!loginState){
            return;
        }

        const id = this.props.id;
        const actionsStore = this.props.actionsStore;

        if(this.state.isValue){
            //该商品已经收藏，点击取消收藏
            actionsStore.remove(
                {
                    id: id
                }
            );
        }else{
            actionsStore.add(
                {
                    id: id
                }
            );
        }
        //修改状态
        this.setState({
            isValue: !this.state.isValue
        });

    }
    render() {
        return (
            <div>
                <BuyAndValue isValue = {this.state.isValue} buyHandle={this.buyHandleFn.bind(this)}  valueHandle={this.valueHandleFn.bind(this)}/>
            </div>
        );
    }
}
//连接到redux，要拿到用户信息
function mapStateToProps(state){
    return {
        userInfo: state.userInfo,
        store: state.store
    };
}
function mapDispatchToProps(dispatch){
    return {
        actionsStore: bindActionCreators(storeActions, dispatch)
    };

}
export default connect(mapStateToProps, mapDispatchToProps)(BuyGoods);
