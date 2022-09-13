import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import { Icon } from "antd-v3";
import "./LoginForm.scss";
import { signInApi } from "../../../api/user";

export default function LoginForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeForm = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    console.log(input);

    const result = await signInApi(input);
  };

  return (
    <Form className="login-form" onChange={changeForm} onSubmitCapture={login}>
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
