import React, { useState } from "react";
import { Layout } from "antd";
//import { Layout } from "antd-v3";
import "antd/dist/antd.css";
import { Redirect, Route, Switch } from "react-router-dom";
import AdminSignIn from "../pages/Admin/SignIn";
import "./LayoutAdmin.scss";
//import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import useAuth from "../hooks/useAuth";

export default function LayoutAdmin(props) {
  //console.log(props);
  const { routes } = props;
  const { Content, Footer } = Layout;
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  const { userjf, isLoading } = useAuth();

  //console.log(userjf);

  if (!userjf && !isLoading) {
    return (
      <>
        <Route path="/admin/login" component={AdminSignIn} />
        <Redirect to="/admin/login" />
      </>
    );
  }

  if (userjf && !isLoading) {
    return (
      <Layout>
        <MenuSider
          menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed}
        />
        <Layout
          classnames="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          {/* menuCollapsed={menuCollapsed}
          setMenuCollapsed={setMenuCollapsed} */}
          <Content className="layout-admin__content">
            <LoadRoutes routes={routes} />
          </Content>
          <Footer className="layout-admin__footer">
            <h5>Daniel Lanzziano | Diseñador & desarrollador Web</h5>
          </Footer>
        </Layout>
      </Layout>
    );
  }
  return null;
}

function LoadRoutes({ routes }) {
  //console.log(props);

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
