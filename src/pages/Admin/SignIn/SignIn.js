import React from "react";
import "./SignIn.scss";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";
import logo from "../../../assets/img/png/logo.png";
import RegisterForm from "../../../components/Admin/RegisterForm";
import LoginForm from "../../../components/Admin/LoginForm";
import { getAccessTokenApi } from "../../../api/auth";

export default function SignIn() {
  const { Content } = Layout;
  const { TabPane } = Tabs;

  if (getAccessTokenApi()) {
    //window.location.reload();
    return <Redirect to="/admin" />;
    // return null;
  }

  return (
    <Layout className="sign-in">
      <Content className="sign-in__content">
        <h1 className="sign-in__content-logo">
          <img src={logo} alt="Logo  Código-Web" />
        </h1>
        <div className="sign-in__content-tabs">
          <Tabs className="sign-in__content-tabs__flex" type="card">
            <TabPane tab={<span>Entrar</span>} key="1">
              <LoginForm />
            </TabPane>
            <TabPane tab={<span>Nuevo Usuario</span>} key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </Layout>
  );
}
