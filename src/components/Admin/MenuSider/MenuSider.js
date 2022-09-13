import React from "react";
import { Layout, Icon } from "antd-v3";

import { Link } from "react-router-dom";
import "./MenuSider.scss";

export default function MenuSider(props) {
  //console.log(props);
  const { menuCollapsed } = props;
  const { Sider } = Layout;

  return (
    <Sider className="menu-sider" collapsed={menuCollapsed}>
      <div className="menu-sider__control">
        <div className="menu-sider__config">
          <div className="menu-sider__config-space">
            <Link to={"/admin"}>
              <Icon type="home" />
              <span
                style={{ visibility: menuCollapsed ? "collapse" : "visible" }}
                className="nav-text"
              >
                Home
              </span>
            </Link>
          </div>

          <div className="menu-sider__config-space">
            <Link to={"/admin/menuWeb"}>
              <Icon type="menu" />
              <span
                style={{ visibility: menuCollapsed ? "collapse" : "visible" }}
                className="nav-text"
              >
                Menu Web
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Sider>
  );
}
