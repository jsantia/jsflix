import React from "react";
import "./Menu.css";
import Logo from "./images/js-logo.png";
import Button from "./Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo" className="Logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo Video
      </Button>
    </nav>
  );
}
export default Menu;
