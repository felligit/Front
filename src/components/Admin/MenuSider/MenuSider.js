import React from "react";
import { Layout, Menu, Icon } from "antd";
//import { Icon } from "antd-v3";

import { Link, withRouter } from "react-router-dom";
import "./MenuSider.scss";

function MenuSider(props) {
  const { menuCollapsed, location } = props;
  const { Sider } = Layout;
  console.log(location.pathname);

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <Menu
        theme="dark"
        mode="vertical"
        defaultSelectedKeys={[location.pathname]}
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
