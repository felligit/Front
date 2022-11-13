import React, { useRef, useState, useEffect } from "react";
import "./MenuBar.scss";
import { Col, Row } from "antd";
import logo from "../../../assets/img/png/logo.png";
import sologofavicon from "../../../assets/img/png/sologofavicon.png";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import { getMenuApi } from "../../../api/menu";

export default function MenuBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [menuData, setMenuData] = useState({});

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
    <>
      <Row>
        <Col md={1} />
        <Col md={22} className="menu-top">
          <header>
            <nav ref={navRef}>
              <button className="nav-btn-visible" onClick={showNavbar}>
                <Link to={"/"}>
                  <img src={logo} alt="Logo-Codesa" />
                </Link>
              </button>
              {Array.from(menuData).map((item) => {
                const external = item.url.indexOf("http") > -1 ? true : false;
                if (external) {
                  return (
                    <li key={item._id} className="item" onClick={showNavbar}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item._id} className="item" onClick={showNavbar}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
              <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                <FaTimes />
              </button>

              <button className="nav-btn-visible" onClick={showNavbar}>
                <SocialLinks />
              </button>

              <button className="init-section">
                <Link to={"/admin"}>
                  <img src={sologofavicon} alt="Favicon-Codesa" />
                </Link>
              </button>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </header>
        </Col>
        <Col md={1} />
      </Row>
    </>
  );
}
