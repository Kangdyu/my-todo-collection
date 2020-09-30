import React from "react";
import "./Header.css";

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </header>
  );
}

export default Header;
