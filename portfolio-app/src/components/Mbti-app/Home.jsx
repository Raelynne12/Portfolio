import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/mbti/logoimg.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>MBTI TEST</Header>
      <Title>
        <h2 className="title">심리테스트</h2>
      </Title>
      <LogoImg>
        <img src={logo} alt="" style={{ width: "40%", borderRadius: "15%" }} />
      </LogoImg>
      <Button
        onClick={() => {
          navigate("/mbti/question");
        }}
      >
        Game Start!
      </Button>
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
  height: 100%;
  background-color: #ecaedf;
  justify-content: center;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  background-color: #f172cb;
  border-bottom: 3px solid #000;
  font-size: 25px;
  color: #000;
  align-items: center;
  justify-content: center;
  height: 70px;
`;
const Title = styled.h2`
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  font-size: clamp(24px, 5vw, 48px);
  word-break: keep-all;
`;
