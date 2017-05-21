import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';
import './cityHeader.less';

class CityHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    backFn(){
        //看返回地址存不存在
        const backAddress = this.props.backAddress;
        if(backAddress){
            hashHistory.push(backAddress);
        }else{
            window.history.back();
        }

    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.backFn.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

export default CityHeader;
