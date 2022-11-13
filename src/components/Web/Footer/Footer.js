import React from "react";
import "./Footer.scss";
import { Layout, Row, Col } from "antd";
import MyInfo from "./MyInfo/MyInfo";
import NavigationFooter from "./NavigationFooter";
import Newsletter from "../Newsletter";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <Row>
        <Col md={2} />
        <Col md={20}>
          <Row>
            <Col md={8}>
              <MyInfo />
            </Col>
            <Col md={8}>{<NavigationFooter />}</Col>
            <Col md={8}>{<Newsletter />}</Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>Codesa | Diseño y Desarrollo Web.</Col>
            <Col md={12}>© 2023 Todos Los Derechos Reservados</Col>
          </Row>
        </Col>
        <Col md={2} />
      </Row>
    </Footer>
  );
}
