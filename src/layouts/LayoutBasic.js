import React from "react";
import { Layout } from "antd-v3";
import { Route, Switch } from "react-router-dom";

import "./LayoutBasic.scss";

export default function LayoutBasic({ routes }) {
  //console.log(props);

  const { Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Basic</h2>
      <Layout>
        <Content>
          <LoadRoutes routes={routes} />
        </Content>
        <Footer>
          <h5>Daniel Lanzziano | Diseñador & desarrollador Web</h5>
        </Footer>
      </Layout>
    </Layout>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
