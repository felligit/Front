import React from "react";
import MainBanner from "../components/Web/MainBanner";
import HomeServices from "../components/Web/HomeServices";
import ReviewServices from "../components/Web/ReviewServices";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Inicio - Código-Web</title>
        <meta
          name="description"
          content="Web Comercial para desarrollo del software y aplicaciones Web"
          data-react-helmet="true"
        />
      </Helmet>
      <MainBanner />
      <HomeServices />
      <ReviewServices />
    </>
  );
}
