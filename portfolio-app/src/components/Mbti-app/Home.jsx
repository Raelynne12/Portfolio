import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/mbti/logoimg.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <h2 className="title">심리테스트</h2>
      </Title>
      <LogoImg>
        <img src={logo} alt="" style={{ width: "40%", borderRadius: "15%" }} />
      </LogoImg>
      <Button></Button>
    </Container>
  );
}
const Button = styled.button`
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LogoImg = styled.div`
  box-sizing: border-box;
  opacity: 100%;
  margin-top: 80px;
  margin-bottom: 30px;
  img {
    filter: brightness(90%);
  }
`;

const Container = styled.div`
  //display: flex;
  height: 100%;
  background-color: #ecaedf;
`;
const Title = styled.h2`
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  font-size: clamp(24px, 5vw, 48px);
  word-break: keep-all;
`;
