import React from "react";
import { Row, Col } from "antd";
import { Helmet } from "react-helmet";
import ContactForm from "../components/Web/ContactForm";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contacto - Codesa</title>
        <meta
          name="description"
          content="Contacto | Llámenos - con gusto atenderemos su solicitud | Codesa"
          data-react-helmet="true"
        />
      </Helmet>

      <Row>
        <Col md={4} />
        <Col md={16}>
          <ContactForm />
        </Col>
        <Col md={4} />
      </Row>
    </>
  );
}
