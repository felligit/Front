import React from "react";
import "./MyInfo.scss";
import logo from "../../../../assets/img/png/logo.png";
import SocialLinks from "../../../../components/Web/SocialLinks";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={logo} alt="Logo-Código-Web" />
      <h4>
        Para consultas o pedidos Escríbenos Y/o llámanos, con gusto atenderemos
        tus solicitudes.
      </h4>
      <SocialLinks />
    </div>
  );
}
