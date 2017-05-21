/*
    订单部分
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import OrderListItem from './orderListItem/item.jsx';

class OrderListShow extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const data = this.props.data;
        return (
            <div>
                {
                    data.map((item, index) => {
                        return (<OrderListItem key={index} data={item} submitCommentFn = {this.props.submitFn} />);
                    })
                }
            </div>
        );
    }
}

export default OrderListShow;
