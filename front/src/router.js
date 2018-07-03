import React from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './routes/home/HomePage';
import LoginPage from './routes/login/LoginPage';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
