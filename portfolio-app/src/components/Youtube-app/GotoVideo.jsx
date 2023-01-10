import React from "react";
import styled from "styled-components";

export default function GotoVideo({ id, title, description }) {
  return (
    <Container>
      <iframe
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
    </Container>
  );
}
const Container = styled.div`
  box-shadow: 60px 60px 60px rgb(0, 0, 0, 0.5);
  border: 5px solid #fff;
  background-color: #00000057;
  color: #fff;
  margin-bottom: 150px;
  margin: 200px 600px 100px 600px;
  padding: 30px 50px 30px 50px;
  iframe {
    width: 100%;
    height: calc() (1400px * 0.7 * 9/16);
    //width: calc(33.33%-20px);
    padding: 10px 300px 10px 300px;
    font-size: 34px;
    font-size: 30px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 35px;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;
