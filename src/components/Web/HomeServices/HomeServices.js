import React from "react";
import "./HomeServices.scss";
import plan_duo from "../../../assets/img/png/plan-duo.png";
import plan_trio from "../../../assets/img/png/plan-trio.png";
import plan_cuarteto from "../../../assets/img/png/plan-cuarteto.png";
import { Row, Col, Card, Button } from "antd";
import crear from "../../../assets/img/jpg/crear.jpg";
import desarrollar from "../../../assets/img/jpg/desarrollar.jpg";
import programar from "../../../assets/img/jpg/programar.jpg";
import base_de_datos from "../../../assets/img/jpg/basededatos.jpg";

export default function HomeServices() {
  return (
    <Row className="home-services">
      <Col sm={24} className="home-services__title">
        <h2>Servicios</h2>
      </Col>

      <Col sm={4} />
      <Col sm={16} className="home-services__parra">
        <p>
          Desarrollamos programación de software a medida para personas
          independientes, pequeñas y medianas empresas, adaptándolo a las
          necesidades de su negocio. Disfrute de nuestros servicios que harán
          crecer tu marca, tus ventas, tus productos y tu bolsillo.
        </p>
        <Row className="row-services">
          <Col sm={6} className="flex-item">
            <CardServices
              bordered={false}
              image={crear}
              title="Portafolios Web"
              subtitle="Creamos"
              link="/services"
            />
          </Col>
          <Col sm={6} className="flex-item">
            <CardServices
              bordered={false}
              image={desarrollar}
              title="Apps - Aplicaciones"
              subtitle="Desarrollamos"
              link="/services"
            />
          </Col>
          <Col sm={6} className="flex-item">
            <CardServices
              bordered={false}
              image={programar}
              title="Sitios Web Dinámicos"
              subtitle="Personalizados"
              link="/services"
            />
          </Col>
          <Col sm={6} className="flex-item">
            <CardServices
              bordered={false}
              image={base_de_datos}
              title="Base de Datos"
              subtitle="Gestionamos"
              link="/services"
            />
          </Col>
        </Row>
        {/* /////////////////////////////////////// */}
        <br />
        <p>
          Nos ponemos a su disposición para crear, diseñar, desarrollar, y
          gestionar:
        </p>
        <ul>
          <li>Aplicaciones y páginas Web.</li>
          <li>Aplicaciones de escritorio.</li>
          <li>Creación y gestión de base de datos.</li>
          <li>Sistemas de facturación e inventarios.</li>
          <li>Sistemas de geolocalización.</li>
        </ul>
        <Row>
          <Col sm={24} className="home-services__title">
            <h2>Planes</h2>
          </Col>
        </Row>
        {/* /////////////////////////////////////// */}

        <Row>
          <Col sm={24} className="row-payments">
            <div className="flex-item">
              <img src={plan_duo} alt="Plan Dúo" />
            </div>
            <div className="flex-item">
              <img src={plan_trio} alt="Plan Trío" />
            </div>
            <div className="flex-item">
              <img src={plan_cuarteto} alt="Plan Cuarteto" />
            </div>
          </Col>
        </Row>
        {/* /////////////////////////////////////// */}
      </Col>
      <Col sm={4} />
    </Row>
  );
}

function CardServices(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} /* target="_blank" rel="noopener noreferrer" */>
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
