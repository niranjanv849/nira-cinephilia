import React, { useState, useEffect } from "react";
import logo from "./logo.png";
import avatar from "./avatar.png";
import "./Nav.css";
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="NIRA LOGO" />
      <img className="nav__avatar" src={avatar} alt="AVATAR" />
    </div>
  );
}

export default Nav;
