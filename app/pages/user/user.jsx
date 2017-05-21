/*
    用户user页面
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import { connect } from 'react-redux';
import { hashHistory} from 'react-router';

//需要的组件
import CityHeader from '../../components/cityHeader/cityHeader.jsx';
import UserInfo from '../../components/userInfo/userInfo.jsx';
import OrderList from './subpage/orderList.jsx';



//定义头部搜索区域组件
class PageUser extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        //用户未登录跳转到登录页面
        if(!this.props.userInfo.username){
            hashHistory.push('/login');
        }
    }
    render() {
        const userInfo = this.props.userInfo;
        //console.log(userInfo)
        return (
            <div style={{ height: "100%"}}>
                <CityHeader title="用户中心" backAddress = "/" />
                <UserInfo username = {userInfo.username} userAddress ={userInfo.cityName} />
                <OrderList username = {userInfo.username} />
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

     };
 }


export default connect(mapStateToProps, mapDispatchToProps)(PageUser);
