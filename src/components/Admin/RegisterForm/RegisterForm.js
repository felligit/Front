import React, { useState } from "react";
import "./RegisterForm.scss";
import { Icon } from "antd-v3";
import { Form, Input, Button, Checkbox, notification } from "antd";
import {
  emailValidation,
  minLengthValidation,
} from "../../../utils/formValidation";
import { signUpApi } from "../../../api/user";

export default function RegisterForm() {
  //

  const [input, setInput] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });

  const [formValid, setFormValid] = useState({
    email: false,
    password: false,
    repeatPassword: false,
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

    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(e.target) });
    }

    if (type === "password") {
      setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
    }

    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: e.target.checked });
    }
  };

  //
  const register = async (e) => {
    e.preventDefault();

    const emailVal = input.email;
    const passwordVal = input.password;
    const repeatPasswordVal = input.repeatPassword;
    const privacyPolicyVal = input.privacyPolicy;

    if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal) {
      notification["error"]({ message: "todos los campos son obligatorios" });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales",
        });
      } else {
        const result = await signUpApi(input);
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
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });
    setFormValid({
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Form
      className="register-form"
      onSubmitCapture={register}
      onChange={changeForm}
    >
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          className="register-form__input"
          onChange={inputValidation}
          value={input.email}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.password}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          type="password"
          name="repeatPassword"
          placeholder="Repetir Contraseña"
          className="register-form__input"
          onChange={inputValidation}
          value={input.repeatPassword}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox
          name="privacyPolicy"
          checked={input.privacyPolicy}
          onChange={inputValidation}
        >
          He leido y acepto las politicas de privacidad
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="register-form__button">
          Crear Cuenta
        </Button>
      </Form.Item>
    </Form>
  );
}
