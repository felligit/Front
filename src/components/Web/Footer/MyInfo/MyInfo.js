import React from "react";
import "./MyInfo.scss";
import logo from "../../../../assets/img/png/logo.png";
import SocialLinks from "../../../../components/Web/SocialLinks";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={logo} alt="Logo-Código-Web" />
      <h4>
        Escríbenos para consultas o llámanos para un pedido, con gusto
        atenderemos tus solicitudes.
      </h4>
      <SocialLinks />
    </div>
  );
}
