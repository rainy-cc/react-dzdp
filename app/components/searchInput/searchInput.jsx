/*
    搜索框的组件 两个页面共用
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './searchInput.less';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        };
    }
    componentDidMount(){
        this.setState({
            value: this.props.value || ''
        });
    }
    //value值变化
    changeHandleFn(e){
        this.setState({
            value: e.target.value
        });
    }
    //如果按下了回车键
    keyUpHandleFn(e){
        if(e.keyCode !== 13){
            return;
        }
        //console.log(this.state.value);
        //吊用组件传来的enterFn;
        this.props.enterFn(this.state.value);
    }
    render() {
        return (
            <input type="text" className="search-input" placeholder="请输入关键字" value={this.state.value} onChange={this.changeHandleFn.bind(this)} onKeyUp = {this.keyUpHandleFn.bind(this)}/>
        );
    }
}

export default SearchInput;
