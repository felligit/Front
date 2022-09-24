import React from "react";
import "./Modal.scss";
import { Modal as ModalAntd } from "antd";

export default function ModalWindow(props) {
  const { children, title, isVisible, setIsVisible } = props;

  return (
    <ModalAntd
      className="config"
      title={title}
      centered
      visible={isVisible}
      onCancel={() => setIsVisible(false)}
      footer={false}
    >
      {children}
    </ModalAntd>
  );
}
