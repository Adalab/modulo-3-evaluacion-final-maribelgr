import React from "react";
import logo from "../images/Rick_and_Morty_-_logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
