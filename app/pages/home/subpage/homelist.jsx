/*home页面的列表*/
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData }  from '../../../fetch/home/home.js';
import ListShow from '../../../components/list/list.jsx';
import LoadMore from '../../../components/loadMore/loadMore.jsx';
import './style.less';

class HomeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [], //数据
            hasMore: false, //记录当前状态下还有没有加载数据
            isLoadingMore: false, //当前是加载中还是点击加载更多
            page: 1 //下一页的页码

        };
    }
    componentDidMount() {
        this.getFirstPageData();
        //存取数据
    }
    //加载更多的数据
    loadMoreData() {
        //记录状态,将状态变为加载中
        this.setState({
            isLoadingMore: true
        });
        const cityName = this.props.cityName;//Pagehome组件传过来的
        const page = this.state.page;//下一页页码
        const result = getListData(cityName, page);//拿到promise对象
        this.handleResult(result);
        //page++,同时加载完成
        this.setState({
            page: page + 1,
            isLoadingMore: false
        });

    }
    //获取第一页数据
    getFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, 0); //PROMISE
        //console.log(result, 111);
        this.handleResult(result);
    }
    //处理数据
    handleResult(result){
        result.then(res => {
            return res.json();
        }).then(json => {
            const data = json.data;
            const hasMore = json.hasMore;
            //重新设置状态
            this.setState({
                data: this.state.data.concat(data),
                hasMore: hasMore
            });

        });
    }
    render() {
        return (
            <div>
                <h2 className="guessLike">猜你喜欢</h2>
                {
                    this.state.data.length
                    ? <ListShow data={this.state.data}/>
                    : <div>加载中
                    </div>
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

export default HomeList;
