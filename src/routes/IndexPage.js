import React from 'react';
import { connect } from 'dva';
import { Layout } from 'antd'
import { Switch, Redirect } from 'dva/router'
import { renderRoutes } from '../utils/router'
import NavBar from '../components/NavBar'

const {Content} = Layout

function IndexPage(props) {
  return (
    <Layout>
      <NavBar {...props}/>
      <Content>
        <Switch>
          {renderRoutes(props.routes)}
          <Redirect to="/home"/>
        </Switch>
      </Content>
    </Layout>
  );
}

export default connect()(IndexPage);
