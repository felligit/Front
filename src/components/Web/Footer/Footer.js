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
        <Col md={4} />
        <Col md={16}>
          <Row>
            <Col md={6}>
              <MyInfo />
            </Col>
            <Col md={12}>{<NavigationFooter />}</Col>
            <Col md={6}>{<Newsletter />}</Col>
          </Row>
          <Row className="footer__copyright">
            <Col md={12}>Código-Web | Diseño y Desarrollo Web.</Col>
            <Col md={12}>© 2023 Todos Los Derechos Reservados</Col>
          </Row>
        </Col>
        <Col md={4} />
      </Row>
    </Footer>
  );
}
