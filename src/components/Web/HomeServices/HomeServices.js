import React from "react";
import "./HomeServices.scss";
import { Row, Col, Card, Button, Icon } from "antd";
import { Link } from "react-router-dom";
import crear from "../../../assets/img/jpg/crear.jpg";
import desarrollar from "../../../assets/img/jpg/desarrollar.jpg";
import programar from "../../../assets/img/jpg/programar.jpg";
import base_de_datos from "../../../assets/img/jpg/basededatos.jpg";

export default function HomeServices() {
  return (
    <Row className="home-services">
      <Col lg={24} className="home-services__title">
        <h2>Servicios</h2>
      </Col>

      <Col lg={4} />
      <Col lg={16} className="home-services__parra">
        <p>
          Desarrollamos programación de software a medida para personas
          independientes,pequeñas y medianas empresas, adaptádolo a las
          necesidades de su negocio. Disfruta de nuestros servicios que harán
          crecer tu marca, tus ventas, tus productos y tu bolsillo.
        </p>
        <Row className="row-services">
          <Col md={6}>
            <CardServices
              image={crear}
              title="Crear Portafolio"
              subtitle="subtitle"
              link="#ir a enlace interno al blog para más información"
            />
          </Col>
          <Col md={6}>
            <CardServices
              image={desarrollar}
              title="Desarrollar App"
              subtitle="subtitle"
              link="#ir a enlace interno al blog para más información"
            />
          </Col>
          <Col md={6}>
            <CardServices
              image={programar}
              title="Programar Web"
              subtitle="subtitle"
              link="#ir a enlace interno al blog para más información"
            />
          </Col>
          <Col md={6}>
            <CardServices
              image={base_de_datos}
              title="Gestionar Base de Datos"
              subtitle="subtitle"
              link="#ir a enlace interno al blog para más información"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardServices(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-services__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>Saber más</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
