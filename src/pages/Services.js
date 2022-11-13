import React from "react";
import { Helmet } from "react-helmet";
import ServicesOffer from "../components/Web/ServicesOffer";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Servicios - Codesa</title>
        <meta
          name="description"
          content="Servicios | Nos ponemos a su disposición para  diseñar y desarrollar aplicaciones y páginas web, aplicaciones de escritorio, base de datos, entre otros | Codesa"
          data-react-helmet="true"
        />
      </Helmet>
      <ServicesOffer />;
    </>
  );
}
