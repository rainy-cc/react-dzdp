/*
    用户评价部分
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getCommentData } from '../../../fetch/detail/detail.js';
//引入组件
import CommentListShow from '../../../components/commentList/commentList.jsx';
import LoadMore from '../../../components/loadMore/loadMore.jsx';

import './style.less';

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        };
    }
    componentDidMount() {
        this.loadFirstPageData();
    }
    // 获取首页数据
    loadFirstPageData() {
        const id = this.props.id;
        const result = getCommentData(0, id);
        this.handleResult(result);
    }
    // 加载更多数据
    loadMoreData() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        });

        const id = this.props.id;
        const page = this.state.page;
        const result = getCommentData(page, id);
        this.handleResult(result);
        this.setState({
            isLoadingMore: false
        });
    }
    // 处理数据
    handleResult(result) {
        result.then(res => {
            return res.json();
        }).then(json => {
            // 增加 page
            const page = this.state.page;
            this.setState({
                page: page + 1
            });

            const hasMore = json.hasMore;
            const data = json.data;

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            });
        });
    }
    render() {
        return (
            <div className="detail-comment">
                <h2>网友点评</h2>
                {
                    this.state.data.length
                    ? <CommentListShow data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''
                }
            </div>
        );
    }

}

export default Comment;
