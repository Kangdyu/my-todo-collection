import React from "react";
import "./Button.css";

function Button({ className, children, ...attrs }) {
  const name = "btn" + (className ? ` ${className}` : "");

  return (
    <button className={name} {...attrs}>
      {children}
    </button>
  );
}

export default Button;
