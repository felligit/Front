import React, { useState, useEffect } from "react";
import "./MenuTop.scss";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/png/logo.png";
import SocialLinks from "../SocialLinks";
import { getMenuApi } from "../../../api/menu";

export default function MenuTop() {
  const [menuData, setMenuData] = useState({});
  console.log(menuData);
  useEffect(() => {
    getMenuApi().then((response) => {
      const arrayMenu = [];
      response.menu.forEach((item) => {
        item.active && arrayMenu.push(item);
      });
      setMenuData(arrayMenu);
    });
  }, []);

  return (
    <Menu className="menu-top" mode="horizontal">
      <Menu.Item className="menu-top__item">
        <Link to={"/"}>
          <img src={logo} alt="código-web-logo" />
        </Link>
      </Menu.Item>

      {Array.from(menuData).map((item) => {
        const external = item.url.indexOf("http") > -1 ? true : false;
        if (external) {
          return (
            <Menu.Item key={item._id} className="menu-top-web__item">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </Menu.Item>
          );
        }
        return (
          <Menu.Item key={item._id} className="menu-top-web__item">
            <Link to={item.url}>{item.title}</Link>
          </Menu.Item>
        );
      })}

      {/* <Menu.Item className="menu-top__item">
        <Link to={"/"}>Inicio</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/contact"}>Contacto</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/services"}>Servicios</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/apps"}>Productos</Link>
      </Menu.Item> */}
      <SocialLinks />
    </Menu>
  );
}
