import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Icon } from "antd-v3";
import "./LoginForm.scss";
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    //e.preventDefault();

    const emailVal = input.email;
    const passwordVal = input.password;

    const result = await signInApi(input);
    console.log(result);

    if (result.message) {
      notification["error"]({
        message: result.message,
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login Correcto.",
      });
      window.location.href = "/admin";
    }

    /*     if (!emailVal || !passwordVal) {
      notification["error"]({ message: "todos los campos son obligatorios" });
    } else {
      const result = await signInApi(input);
      if (!result.ok) {
        notification["error"]({ message: result.message });
      } else {
        notification["success"]({ message: result.message });
      } */
    //resetForm();
    //}
  };

  return (
    <Form className="login-form" onChange={changeForm} onFinish={login}>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={input.email}
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
          type="password"
          name="password"
          placeholder="Contraseña"
          value={input.password}
          className="login-form__input"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" className="login-form__button">
          Entrar
        </Button>
      </Form.Item>
    </Form>
  );
}
