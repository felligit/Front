import React from "react";
import logo from "../../../assets/img/png/logo.png";
import { Button, Icon } from "antd-v3";
import "./MenuTop.scss";

export default function MenuTop(props) {
  // console.log(props);
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={logo} alt="logo-codigo-web" />
        <Button type="default" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="default" onClick={() => console.log("Desconexión.")}>
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
