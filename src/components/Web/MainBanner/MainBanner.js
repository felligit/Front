import React from "react";
import "./MainBanner.scss";

import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark"></div>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            Impulsa tu negocio con tecnologías Web
            <hr /> Y llevalo al siguiente nivel
          </h2>
          <div className="font">
            <h3>Codesa es tu opción tecnológica de diseño y desarrollo Web.</h3>
            <h4>¡Funcionalidad y velocidad reactiva en su sitio!</h4>
          </div>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
