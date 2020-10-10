import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type StyledButtonProps = {
  bgColor: string;
  color: string;
}

const StyledButton = styled.button<StyledButtonProps>`
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

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  bgColor: string;
  color: string;
}

function Button({ children, bgColor, color, ...attrs }: ButtonProps) {
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
