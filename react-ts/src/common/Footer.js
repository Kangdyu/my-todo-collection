import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  text-align: center;
  background-color: ${({ theme }) => theme.palette.mainStrong};
  padding: 10px 0;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <span>&copy; 2020 Kangdyu</span>
    </StyledFooter>
  );
}

export default Footer;
