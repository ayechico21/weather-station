import React from "react";
import { styled } from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Heading>Weather Station</Heading>
    </Wrapper>
  );
}
const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  border: 2px dotted red;
`;
const Heading = styled.h1``;

export default Header;
