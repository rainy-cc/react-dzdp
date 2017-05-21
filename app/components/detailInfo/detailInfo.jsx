import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../star/star.jsx';
import './detailInfo.less';

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data;
        return (
            <div id="detail-info-container">
                <div className="info-container clearfix">
                    <div className="info-img fl">
                        <img src={data.img}/>
                    </div>
                    <div className="info-content">
                        <h2>{data.title}</h2>
                        <div className="star-container">
                            {/* 引用 Star 组件 */}
                            <Star starNum={data.star}/>
                            <span className="num">{data.evaluationNum}</span>
                            <span className="price">￥{data.price}/人</span>
                        </div>
                        <p className="sub-title">{data.subTitle}</p>
                        <p className="evaluation">{data.evaluation}</p>
                    </div>
                </div>
                <p className="info-address"><i className="icon-map-marker"></i><span>{data.address}</span><i className="icon-angle-right icon-r fr"></i></p>
                <p className="info-phone"><i className="icon-phone"></i><span>{data.phone}</span><i className="icon-angle-right icon-r fr"></i></p>
                {/* 设置 innerHTML */}
                {/*<p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>*/}
            </div>
        );
    }
}

export default DetailInfo;
