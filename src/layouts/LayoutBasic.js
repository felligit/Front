import React from "react";
import { Row, Col } from "antd";
//import { Layout } from "antd-v3";
import { Route, Switch } from "react-router-dom";
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";

export default function LayoutBasic({ routes }) {
  //console.log(props);

  return (
    <>
      <Row>
        <Col sm={4} />
        <Col sm={16}>
          <MenuTop />
        </Col>
        <Col sm={4} />
      </Row>
      <LoadRoutes routes={routes} />
      <Footer />
    </>
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
