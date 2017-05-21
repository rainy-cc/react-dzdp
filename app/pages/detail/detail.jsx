import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CityHeader from '../../components/cityHeader/cityHeader.jsx';
import Information from './subpage/information.jsx';
import Comment from './subpage/comment.jsx';
import BuyGoods from './subpage/buy.jsx';


class PageDetail extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        // 获取商户
        const params = this.props.params;
        return (
            <div>
                <CityHeader title="商户详情" />
                <Information id={ params.id } />
                <BuyGoods id={ params.id } />
                <Comment id={ params.id } />
            </div>
        );
    }
}

export default PageDetail;
