import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getInfoData} from '../../../fetch/detail/detail.js';

//引入组件
import DetailInfo from '../../../components/detailInfo/detailInfo.jsx';



class Information extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        };
    }
    componentDidMount() {
        // 获取商户信息
        const id = this.props.id;
        const result = getInfoData(id);
        result.then(res => {
            return res.json();
        }).then(json => {
            //console.log(json)//可以获取到数据
            this.setState({
                info: json
            });
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.info?<DetailInfo data={this.state.info} />:''
                }
            </div>
        );
    }
}

export default Information;
