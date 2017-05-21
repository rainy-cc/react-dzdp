import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './buyValue.less';

class BuyAndValue extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    buyClickHandle() {
        const buyHandle = this.props.buyHandle;
        buyHandle();
    }
    valueClickHandle() {
        const valueHandle = this.props.valueHandle;
        valueHandle()
    }

    render() {
        return (
            <div className="buy-store-container clearfix">
                <div className="item-container fl">
                {
                    // 是否已经收藏了
                    this.props.isValue
                    ? <button className="selected" onClick={this.valueClickHandle.bind(this)}>已收藏</button>
                    : <button onClick={this.valueClickHandle.bind(this)}>收藏</button>
                }
                </div>
                <div className="item-container fr">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        );
    }

}

export default BuyAndValue;
