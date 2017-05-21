/*
    评论列表
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import CommentItem from './item/commentItem.jsx';

import './commentList.less';

class CommentListShow extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        // 获取数据
        const data = this.props.data;

        return (
            <div className="comment-list">
                {data.map((item, index) => {
                    return <CommentItem key={index} data={item}/>;
                })}
            </div>
        );
    }
}

export default CommentListShow;
