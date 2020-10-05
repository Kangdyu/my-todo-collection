import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: ${({ color, theme }) => {
    const palette = theme.palette[color];
    return palette ? palette : color;
  }};
  background-color: ${({ bgColor, theme }) => {
    const palette = theme.palette[bgColor];
    return palette ? palette : bgColor;
  }};
`;

function Button({ children, bgColor, color, ...attrs }) {
  return (
    <StyledButton bgColor={bgColor} color={color} {...attrs}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "white",
  bgColor: "highlight",
};

export default Button;
