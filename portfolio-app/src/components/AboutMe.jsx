import React from "react";
import styled from "styled-components";
import me from "../assets/images/증명사진.jpg";
import Certification from "./Introduce/Certification";
import Stack from "./Introduce/Stack";

export default function AboutMe() {
  return (
    <About>
      <h1>SEOHYEON LEE</h1>
      <div className="intro">
        <p>
          oh track this 유연하게 춤 춰 내 groove 난 보여주는 중oh track this
          유연하게 춤 춰 내 groove 난 보여주는 중 oh track this 유연하게 춤 춰
          내 groove 난 보여주는 중 oh track this 유연하게 춤 춰 내 groove 난
          보여주는 중 oh track this 유연하게 춤 춰 내 groove 난 보여주는 중 oh
          track this 유연하게 춤 춰 내 groove 난 보여주는 중 oh track this
          유연하게 춤 춰 내 groove 난 보여주는 중 oh track this 유연하게 춤 춰
          내 groove 난 보여주는 중oh track this 유연하게 춤 춰 내 groove 난
          보여주는 중oh track this 유연하게 춤 춰 내 groove 난 보여주는 중oh
          track this 유연하게 춤 춰 내 groove 난 보여주는 중oh track this
          유연하게 춤 춰 내 groove 난 보여주는 중oh track this 유연하게 춤 춰 내
          groove 난 보여주는 중oh track this 유연하게 춤 춰 내 groove 난
          보여주는 중oh track this 유연하게 춤 춰 내 groove 난 보여주는 중
        </p>
        <img src={me} alt="" />
      </div>
      <div className="spec">
        <div className="front-end">
          <h2>STACK OF FRONTEND</h2>
          <Stack></Stack>
        </div>
        <div className="certification">
          <h2>CERTIFICATION</h2>
          <Certification></Certification>
        </div>
      </div>
    </About>
  );
}
const About = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-family: SANGJUGyeongcheonIsland;
    margin-top: 250px;
    margin-bottom: 100px;
    padding-left: 100px;
    font-size: 180px;
    //-webkit-text-stroke: 0.2px #ffffffd5;
    color: #f2f677;
    animation-duration: 1s;
    justify-content: center;
    align-items: center;
    animation-name: slidein;
    font-weight: 1000;
  }
  .intro {
    display: flex;
    flex-direction: row;
    margin: 120px 300px 100px 30px;
    p {
      padding-right: 120px;
      padding-left: 140px;
      width: 2500px;
      color: #fff;
      line-height: 1.7;
      font-family: ScORE;
      font-size: 40px;
      animation-duration: 1.5s;
      animation-name: slidein;
    }
    img {
      width: 500px;
      display: flex;
      margin-top: -150px;
      box-shadow: 35px 35px 35px rgb(0, 0, 0, 0.6);
    }
  }
  .spec {
    margin: 150px 80px 100px 250px;
    display: flex;
    flex-direction: row;
    p {
      font-size: 35px;
      font-weight: 900;
      color: #fff;
      padding-left: 20px;
      font-family: ScORE;
    }
    .certification {
      padding: 30px 0px 30px 0px;
      margin: 30px 0px 30px 0px;
      border: 7px solid #fff;
      width: 410px;
      margin-left: 200px;
      background-color: #0000009d;
      h2 {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
        padding-left: 20px;
        margin-top: 10px;
      }
    }
    .front-end {
      border: 7px solid #fff;
      padding: 30px 0px 30px 0px;
      margin: 30px 0px 30px 0px;
      margin-right: 100px;
      width: 1810px;
      background-color: #0000009d;
      color: #fff;
      h2 {
        font-size: 40px;
        font-weight: bold;
        color: #fff;
        padding-left: 20px;
        margin-top: 10px;
      }
    }
  }
`;
