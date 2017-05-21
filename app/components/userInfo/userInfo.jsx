import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './userInfo.less';


class CityHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div className="userinfo">
                <p>
                    <i className = "icon-user"></i>
                    <span>{this.props.username}</span>
                </p>
                <p>
                    <i className = "icon-map-marker"></i>
                    <span>{this.props.userAddress}</span>
                </p>
            </div>
        );
    }
}

export default CityHeader;
