import React from "react";
import "./Button.css";

function Button({ className, children }) {
  const name = "btn" + (className ? ` ${className}` : "");

  return <button className={name}>{children}</button>;
}

export default Button;
