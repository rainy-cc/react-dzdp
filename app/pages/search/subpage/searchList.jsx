/*
    搜索页面的列表展示
*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

import ListShow from '../../../components/list/list.jsx';
import LoadMore from '../../../components/loadMore/loadMore.jsx';

import { getSearchData } from '../../../fetch/search/search.js';



class SearchList extends React.Component {
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
        // 获取首页数据
        this.getFirstPageData();
    }
    // 获取首页数据
    getFirstPageData() {
        const cityName = this.props.userInfo.cityName;//从redux获取当前城市
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(0, cityName, category, keyword);
        this.handleResult(result);
    }
    // 加载更多数据
    loadMoreDataFn() {
        // 记录状态
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.userInfo.cityName;
        const page = this.state.page;
        const keyword = this.props.keyword || '';
        const category = this.props.category;
        const result = getSearchData(page, cityName, category, keyword);
        this.handleResult(result);

        // 更新状态
        this.setState({
            isLoadingMore: false
        });
    }
    // 处理数据
    handleResult(result) {
        //  page 计数
        const page = this.state.page;
        this.setState({
            page: page + 1
        });

        result.then(res => {
            return res.json();
        }).then(json => {
            const hasMore = json.hasMore;
            const data = json.data;
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            });
        });
    }
    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword;
        const category = this.props.category;

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return;
        }
        // 重置 state
        this.setState({
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        });
        // 重新加载数据
        this.loadFirstPageData();
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                    ? <ListShow data={this.state.data}/>
                    : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreDataFn.bind(this)}/>
                    : ''
                }
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList);
