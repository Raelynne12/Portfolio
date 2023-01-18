import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <p className="footer">CopyrightⓒRaelynne. All rights reserved.</p>
    </Container>
  );
}
const Container = styled.footer`
  background-color: #000;
  height: 50px;
  display: flex;
  //position: absolute;
  transform: translateY(-100%);
  justify-content: center;
  align-items: center;
  border: none;
  //bottom: 0;
  opacity: 0.6;
  p {
    padding: 5px 40px;
    font-size: 20px;
    color: #fff;
  }
`;
