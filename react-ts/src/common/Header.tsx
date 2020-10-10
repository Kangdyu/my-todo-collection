import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.palette.mainStrong};

  h1 {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

type HeaderProps = {
  title: string;
  subtitle: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </StyledHeader>
  );
}

export default Header;
