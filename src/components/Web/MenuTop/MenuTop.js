import React from "react";
import { Col, Row } from "antd";
import "./MenuTop.scss";

import MenuBar from "../MenuBar";

export default function MenuTop() {
  //console.log(menuData);

  return (
    <Row>
      <Col lg={2} />
      <Col lg={20} className="menu-top">
        <MenuBar />
      </Col>
      <Col lg={2} />
    </Row>
  );
}

/*       <Link to={"/"}>
        <img src={logo} alt="código-web-logo" />
      </Link> */

/* <Menu.Item className="menu-top__item">
        <Link to={"/"}>Inicio</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/contact"}>Contacto</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/services"}>Servicios</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/apps"}>Productos</Link>
      </Menu.Item> */
