import React from "react";
import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;

  ${(props) => {
    const bgColor = props.theme.palette.mainStrong;
    return css`
      background-color: ${bgColor};
    `;
  }}

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export default function Header({ title, subtitle }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </StyledHeader>
  );
}
