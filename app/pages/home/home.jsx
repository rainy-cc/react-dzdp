/*HOME页面*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/homeHeader/homeHeader.jsx';
import Carousel from '../../components/carousel/carousel.jsx';
import Advertisement from './subpage/advertisement.jsx';
import HomeList from './subpage/homelist.jsx';
import { connect } from 'react-redux';

import './home.less';

//定义头部组件
class PageHome extends React.Component {
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount (){
        //console.log(this.props.userInfo.cityName );
    }

    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userInfo.cityName} />
                <Carousel />
                <Advertisement />
                <HomeList />
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        userInfo: state.userInfo
    };
}
function mapDispatchToProps(dispatch){
    return {};
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps,mapDispatchToProps)(PageHome);
