import React, { useState } from "react";
import "./ContactForm.scss";
import {
  Form,
  Input,
  Button,
  Col,
  Row,
  Icon,
  Checkbox,
  notification,
} from "antd";

import {
  nameValidation,
  minLengthValidationTelephone,
  emailValidation,
  commentsValidation,
} from "../../../utils/formValidation";

import { contactFormApi } from "../../../api/mailerContactForm";

export default function ContactForm() {
  //
  const { TextArea } = Input;

  const [input, setInput] = useState({
    name: "",
    telephone: "",
    email: "",
    subject: "",
    comments: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    name: false,
    telephone: false,
    email: false,
    subject: false,
    comments: false,
    privacyPolicy: false,
  });

  const changeForm = (e) => {
    if (e.target.name === "privacyPolicy") {
      setInput({ ...input, [e.target.name]: e.target.checked });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };

  const inputValidation = (e) => {
    //console.log("validando...");
    const { type, name } = e.target;

    if (type === "text") {
      setFormValid({ ...formValid, [name]: nameValidation(e.target) });
    }

    if (type === "number") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidationTelephone(e.target),
      });
    }

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }

    if (type === "text") {
      setFormValid({ ...formValid, [name]: commentsValidation(e.target) });
    }

    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameVal = input.name;
    const telephoneVal = input.telephone;
    const emailVal = input.email;
    const subjectVal = input.subject;
    const commentsVal = input.comments;
    const privacyPolicyVal = input.privacyPolicy;

    if (!nameVal || !telephoneVal || !emailVal || !subjectVal || !commentsVal) {
      notification["error"]({ message: "todos los campos son obligatorios" });
    } else {
      if (privacyPolicyVal !== true) {
        notification["error"]({
          message: "Por favor acepte las politicas de privacidad",
        });
      } else {
        const result = await contactFormApi(input);
        if (!result.ok) {
          notification["error"]({ message: result.message });
        } else {
          notification["success"]({ message: result.message });
        }
        resetForm();
      }
    }
  };

  const resetForm = () => {
    const input = document.getElementsByTagName("input");

    for (let i = 0; i < input.length; i++) {
      input[i].classList.remove("success");
      input[i].classList.remove("error");
    }
    setInput({
      name: "",
      telephone: "",
      email: "",
      subject: "",
      comments: "",
      privacyPolicy: false,
    });
    setFormValid({
      name: false,
      telephone: false,
      email: false,
      subject: false,
      comments: false,
      privacyPolicy: false,
    });
  };

  return (
    <Row className="contact-form">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="contact-form__title">
          <h2>Contáctenos</h2>
          <h3>Con gusto atenderemos su solicitud...</h3>
          <p className="contact-form__parag">
            Desarrollamos programación de software a medida para personas
            independientes,pequeñas y medianas empresas, adaptádolo a las
            necesidades de su negocio. Disfruta de nuestros servicios que harán
            crecer tu marca, tus ventas, tus productos y tu bolsillo.
          </p>
        </Col>
        <Col lg={4} />
      </Row>

      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Form
            className="contact-form-scheme"
            onSubmitCapture={handleSubmit}
            onChange={changeForm}
          >
            <Form.Item>
              <Input
                type="text"
                name="name"
                placeholder="nombre o empresa"
                onChange={inputValidation}
                value={input.name}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="number"
                name="telephone"
                placeholder="telefono/celular"
                onChange={inputValidation}
                value={input.telephone}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="email"
                name="email"
                /* title="El campo 'Email' es incorrecto"
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" */
                placeholder="Escribe tu email"
                onChange={inputValidation}
                value={input.email}
                required
              />
            </Form.Item>
            <Form.Item>
              <Input
                type="text"
                name="subject"
                placeholder="Escribe asunto a tratar"
                onChange={inputValidation}
                value={input.subject}
                required
              />
            </Form.Item>
            <Form.Item>
              <TextArea
                type="text"
                name="comments"
                //cols="50"
                rows="5"
                placeholder="Cuéntanos tu solicitud y/o aplicación que requieras"
                className="contact-form-scheme__textarea"
                onChange={inputValidation}
                value={input.comments}
                required
              />
            </Form.Item>
            <Form.Item>
              <Checkbox
                className="contact-form-scheme__check"
                name="privacyPolicy"
                onChange={inputValidation}
                checked={input.privacyPolicy}
              >
                He leido y acepto politicas de privacidad
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                className="contact-form-scheme__button"
                value="Enviar"
              >
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}
