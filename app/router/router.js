import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import PageIndex from '../pages/index.jsx';
import PageHome from '../pages/home/home.jsx';
import NotFound from '../pages/notFound/notFound.jsx';
import PageCity from '../pages/city/city.jsx';
import PageSearch from '../pages/search/search.jsx';
import PageDatail from '../pages/detail/detail.jsx';
import PageLogin from '../pages/login/login.jsx';
import PageUser from '../pages/user/user.jsx';

//页面路由的配置
class AppRouter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router history={this.props.history}>
                <Route path="/" component={PageIndex}>
                    {/*默认渲染home页面*/}
                    <IndexRoute component={PageHome}></IndexRoute>
                    <Route path="/city" component={PageCity}></Route>
                    <Route path="/search/:category(/:keyword)" component={PageSearch}></Route>
                    <Route path="/login(/:router)" component={PageLogin}></Route>
                    <Route path="/detail/:id" component={PageDatail}></Route>
                    <Route path="/user" component={PageUser}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Route>
            </Router>
        );
    }
}

export default AppRouter;
