/*
    底部加载更多
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './loadMore.less';
class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn;
        const wrapper = this.wrapper;//拿到dom节点
        //console.log(wrapper);
        let timer = null;
        window.addEventListener('scroll',function(){
            if(this.props.isLoadingMore){
                return;
            }
            //防止连续滚动
            if(timer){
                clearTimeout(timer);
            }
            timer = setTimeout(cb,100);
        }.bind(this),false);

        function cb(){
            let top = wrapper.getBoundingClientRect().top;//拿到top值
            let windowHeight = window.screen.height;
            if(top && top<windowHeight){
                loadMoreFn();
            }
        }
    }
    //点击
    clickHandle(){
        this.props.loadMoreFn();
    }
    render() {
        //当前是否在加载
        return (
            <div className="load-more" ref={(div)=>{this.wrapper = div;}}>
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.clickHandle.bind(this)}>加载更多</span>
                }
            </div>
        );
    }
}
export default LoadMore;
