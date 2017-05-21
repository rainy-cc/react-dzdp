import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Link } from 'react-router';

import './list.less';

//定义头部搜索区域组件
class ListShow extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data = this.props.data;
        return (
            <div className="list-wrap">
                {
                    data.map((value, index)=>{
                        console.log(value.id)
                        return (
                            <div key={index} className="list-item clearfix">
                                <Link to={'/detail/' + value.id}>
                                    <div className="item-img-container fl">
                                        <img src={value.img} alt={value.title}/>
                                    </div>
                                    <div className="item-content">
                                        <div className="item-title-container clearfix">
                                            <h3 className="fl">{value.title}</h3>
                                            <span className="fr">{value.distance}</span>
                                        </div>
                                        <p className="item-sub-title">
                                            {value.subTitle}
                                        </p>
                                        <div className="item-price-container clearfix">
                                            <span className="price fl">￥{value.price}</span>
                                            <span className="mumber fr">已售{value.mumber}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
                }
            </div>

        );
    }
}

export default ListShow;
