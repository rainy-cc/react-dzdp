/*
    订单页面的组件
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//引入数据
import {getOrderListData , postComment} from '../../../fetch/user/orderlist.js';
//引入组件
import OrderListShow from '../../../components/orderList/orderListShow.jsx';
import './orserList.less';
class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        };
    }

    componentDidMount(){
        const username = this.props.username;
        if(username){
            const result = getOrderListData(username);
            result.then(res => {
                return res.json();
            }).then(json => {
                // 获取数据
                this.setState({
                    data: json
                });
            });
        }
    }
    //提交评价
    submitFn(id, value, callback){

        const result = postComment(id,value);
        result.then(res=>{
            return res.json();
        }).then(json=>{
            //console.log(12344,json)
            if (json.errno === 0) {
                // 已经评价，修改状态
                callback();
            }
        });
    }

    render() {
        //console.log(121231231,this.state.data.length);
        return (

            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length?
                    <OrderListShow data = {this.state.data} submitFn = {this.submitFn.bind(this)} />:
                    <div>您暂时没有订单</div>
                }
            </div>
        );
    }
}

export default OrderList;
