//超值特惠 组件
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getAdData } from '../../../fetch/home/home.js';

import HomeAd from '../../../components/homeAd/homeAd.jsx';

class Advertisement extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [ ]//存放获取的数据
        };
    }
    componentDidMount(){
        const result = getAdData(); //Promise对象
        //console.log(result);
        result.then((res)=>{
            return res.json();
        }).then((json)=>{
            const data = json;
            if(data.length){
                this.setState(
                    {
                        data: data
                    }
                );
            }
        });
    }
    render() {
        return (
            <div>{this.state.data.length?<HomeAd data={this.state.data} />:<div></div>}</div>
        );
    }
}

export default Advertisement;
