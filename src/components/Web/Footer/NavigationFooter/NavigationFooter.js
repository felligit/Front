import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";
import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Datos De Contacto</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
      <Col md={24}>
        <RenderMail />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <Icon type="mobile" />
        <span>314 7677281</span>
      </li>
      <li>
        <Link to="/contact">
          <Icon type="code" />
          Contáctanos!
        </Link>
      </li>
      {/*       <li>
        <a href="#">
          <Icon type="right" />
          Politicas de privacidad
        </a>
      </li> */}
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <Icon type="mobile" />
        <span> 310 2294954 </span>
      </li>
      <li>
        <Link to="/apps">
          <Icon type="user" />
          Experiencia!
        </Link>
      </li>
      {/*       <li>
        <a href="#">
          <Icon type="right" />
          Politicas de kookies
        </a>
      </li> */}
    </ul>
  );
}

function RenderMail() {
  return (
    <ul>
      <li>
        <Icon type="mail" />
        <span> Codesa@gmail.com </span>
      </li>
      <li>
        <Icon type="mail" />
        <span> Codesa@Correoempresarial.com.co</span>
      </li>
    </ul>
  );
}
