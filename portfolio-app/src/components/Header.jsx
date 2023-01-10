import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const front = () => {
    navigate(+1);
  };
  return (
    <Container>
      <button onClick={back} className="back">
        <i className="fa-regular fa-hand-point-left"></i>
      </button>
      <Link to="/">
        <Head>Raelynne's Portfolio</Head>
      </Link>
      <button onClick={front} className="front">
        <i className="fa-regular fa-hand-point-right"></i>
      </button>
    </Container>
  );
}
const Container = styled.div`
  height: 75px;
  display: fixed;
  /* opacity: 0.3; */
  flex-direction: row;
  background-color: #9c9c9c;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    &:hover {
      transform: translateY(-5px);
    }
  }
  .back {
    font-size: 20px;
    display: flex;
    color: #4c4c4c;
    border: none;
    left: 0;
    width: 60px;
    height: 60px;
    outline: none;
    background-color: none;
    justify-content: center;
    align-items: center;
    margin-right: 140px;
    i {
      font-size: 40px;
      color: #000;
      margin-left: 140px;
    }
  }
  .front {
    font-size: 40px;
    display: flex;
    color: #000;
    border: none;
    left: 0;
    width: 60px;
    height: 60px;
    outline: none;
    background-color: none;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
  }
`;
const Head = styled.header`
  &:hover {
    color: #fff;
  }
  color: #000;
  opacity: 1;
  font-size: 40px;
  font-weight: bold;
`;
