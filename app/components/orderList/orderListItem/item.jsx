/*
    订单部分
        评价功能
*/

import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

//样式引入
import './item.less';


class OrderListItem extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 1 //是否评价
        };
    }

    componentDidMount(){
        this.setState({
            commentState: this.props.data.commentState
        });
        //console.log(this.textareaDom)
    }
    //显示评价框
    showComment(){
        this.setState({
            commentState: 1
        });
    }
    //隐藏输入
    hideComment(){
        this.setState({
            commentState: 0
        });
    }
    clickSubmitFn(){
        const submitCommentFn = this.props.submitCommentFn;
        const id = this.props.data.id;
        if(!this.textareaDom.value){
            return;
        }
        submitCommentFn(id,this.textareaDom.value,this.submitOk.bind(this));
    }
    submitOk(){
        this.setState({
            commentState: 2
        });
    }

    render() {
        const data = this.props.data;
        return (
                <div className = 'item-wrap'>
                    <div className="clearfix order-item">
                        <div className="image fl">
                            <img src={data.img}/>
                        </div>
                        <div className="detail fl">
                            <span>商户：{data.title}</span>
                            <span>数量：{data.count}</span>
                            <span>价格：￥{data.price}</span>
                        </div>
                        {
                            this.state.commentState === 0?
                            <div className="comment fr" onClick = {this.showComment.bind(this)}>评价</div>:
                                this.state.commentState === 1?
                                <div></div>:
                                    <div className="comment fr unselect">已评价</div>
                        }
                    </div>
                    {
                        // “评价中”才会显示输入框
                        this.state.commentState === 1
                        ? <div className="comment-text">
                            <textarea className="comment-text" ref={(textarea)=>{this.textareaDom = textarea}}></textarea>
                            <div className="btn-wrap">
                                <button className="btn" onClick = {this.clickSubmitFn.bind(this)}>提交</button>
                                &nbsp;
                                <button className="btn unseleted" onClick = {this.hideComment.bind(this)}>取消</button>
                            </div>
                        </div>
                        : ''
                    }
                </div>
        );
    }
}
export default OrderListItem;
