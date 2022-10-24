import React from "react";
import "./ReviewServices.scss";
import { Row, Col, Card, Avatar } from "antd";
import persona from "../../../assets/img/jpg/persona.jpg";
import personal from "../../../assets/img/jpg/personal.jpg";
import privada from "../../../assets/img/jpg/privada.png";
import mecanica from "../../../assets/img/jpg/mecanica.jpg";
import estilista from "../../../assets/img/jpg/estilista.jpg";
import mascotas from "../../../assets/img/jpg/mascotas.jpg";

export default function ReviewServices() {
  return (
    <Row className="review-services">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="review-services__title">
          <h2>
            Forma parte de nuestros clientes satisfechos crece con nostros y
            consolida tu empresa.
          </h2>
        </Col>
        <Col lg={4} />
      </Row>

      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Ingrid Castañuela"
                subtitle="Portafolio de Servicios"
                avatar={persona}
                review="Me ha servido de a mucho haberles contratado para hacer que mi negocio escale un nivel mas alto dentro del comercio, me he beneficiado enormente en lo económico a travez de mi página web donde ofrezco mis servicios"
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="yonhanner Miranda"
                subtitle="Vendedor independiente"
                avatar={personal}
                review='Gracias a la tienda online que "Código Web" me ha creado" he visto  como mis ganancias han crecido, ya puedo ahorrar y hasta irme de vacaciones, los resultados significativos de vender por internet son sumamente enriquecedores.!'
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Automatics"
                subtitle="Compañìa & asociados"
                avatar={privada}
                review="Nosotros como empresa requeriamos un software potente y rapido que trabajase en tiempo real almacenando datos patra su posterior análisis,  sus servicios fueron de alta categoría y cumplieron nuestras espectativas..."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Catalina Barrientos"
                subtitle="Estilista profesional"
                avatar={estilista}
                review="Desde que abrí mi sitio web la cantidad de clientes que se suman va en aumento, tuve que conformar un equipo para suplir necesidades de mis clientes, el local, la economiá y mi vida en general va de maravilla, gracias"
              />
            </Col>
            <Col md={8}>
              .
              <CardReview
                name="Mecanics Enginners"
                subtitle="Asociación de ingenieros"
                avatar={mecanica}
                review='Como grupo emprendedor y futura empresa requeriamos de un inventario de productos, servicios, proveedores, repuestos,  clientes, etc, "Código Web"  fúe de gran ayuda y versatibilidad porque cumplió y nos dió un producto funcional, escalable y veloz. Excelente producto...'
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Magnolia Ramirez"
                subtitle="Veterinario"
                avatar={mascotas}
                review='En hora buena! un amigo me recomendó "Código Web" y desde entonces mas perros y gatos saludables, me encanta  ayudar a los animales, sus mascotas son las mías...Feliz y agradecida...Solo me falta un principe azul.'
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, review, avatar } = props;
  const { Meta } = Card;

  return (
    <Card className="review-services__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
