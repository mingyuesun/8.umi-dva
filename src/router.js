import React from 'react';
import { Router, Switch } from 'dva/router';
import routerConfig from './routerConfig'
import { renderRoutes } from './utils/router'
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routerConfig, app)}
        {/* <Route path="/" exact component={IndexPage} /> */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
