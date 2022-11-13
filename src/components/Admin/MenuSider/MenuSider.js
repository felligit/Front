import React from "react";
import { Layout, Menu, Icon, Button } from "antd";
import logo_ver from "../../../assets/img/png/logo-ver.png";
import { logout } from "../../../api/auth";
import { Redirect } from "react-router-dom";
//import { Icon } from "antd-v3";

import { Link, withRouter } from "react-router-dom";
import "./MenuSider.scss";

function MenuSider(props) {
  // const { menuCollapsed, location } = props;
  // console.log(location.pathname);
  const { menuCollapsed, setMenuCollapsed } = props;
  const { Sider } = Layout;

  const logoutUserjf = () => {
    logout();
    window.location.reload();
    <Redirect to="/admin/login" />;
    //console.log("Desconectado.");
  };

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="vertical"
        //  defaultSelectedKeys={[location.pathname]}
        style={{
          backgroundColor: "#050a30", //not working
        }}
      >
        <div className="logo">
          <Link to={"/"}>
            <img src={logo_ver} className="logo__img-ver" alt="Logo-Codesa" />
          </Link>
        </div>
        <div className="buttons">
          <div className="buttons__left">
            <Button onClick={() => setMenuCollapsed(!menuCollapsed)}>
              <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
            </Button>
          </div>

          <div className="buttons__right">
            <Button onClick={logoutUserjf}>
              <Icon type="poweroff" />
            </Button>
          </div>
        </div>
      </Menu>

      <Menu
        theme="dark"
        mode="vertical"
        //        defaultSelectedKeys={[location.pathname]}
        style={{
          backgroundColor: "#050a30", //not working
        }}
      >
        {/*         <div className="menu-sider__control">
          <div className="menu-sider__config"> */}
        <Menu.Item key="/admin">
          {/* <div className="menu-sider__config-space"> */}
          <Link to={"/admin"}>
            <Icon type="home" />
            <span className="nav-text">Home</span>
          </Link>
          {/* </div> */}
        </Menu.Item>

        <Menu.Item key="/admin/users">
          <div className="menu-sider__config-space">
            <Link to={"/admin/users"}>
              <Icon type="user" />
              <span
                style={{
                  visibility: menuCollapsed ? "collapse" : "visible",
                }}
                className="nav-text"
              >
                Usuarios
              </span>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="/admin/menu">
          <div className="menu-sider__config-space">
            <Link to={"/admin/menu"}>
              <Icon type="menu" />
              <span
                style={{
                  visibility: menuCollapsed ? "collapse" : "visible",
                }}
                className="nav-text"
              >
                Menú
              </span>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="/admin/blog">
          <div className="menu-sider__config-space">
            <Link to={"/admin/blog"}>
              <Icon type="message" />
              <span
                style={{
                  visibility: menuCollapsed ? "collapse" : "visible",
                }}
                className="nav-text"
              >
                Blog
              </span>
            </Link>
          </div>
        </Menu.Item>
        {/*           </div>
        </div> */}
      </Menu>
    </Sider>
  );
}

export default withRouter(MenuSider);
