import React from "react";
import styled from "styled-components";
import YoutubeSearch from "./YoutubeSearch";

export default function YoutubeHeader({ onSearch, showMain }) {
  const onClick = () => {
    showMain();
  };
  return (
    <Head>
      <h2 onClick={onClick}>YOUTUBE MUSIC</h2>
      <YoutubeSearch onSearch={onSearch}></YoutubeSearch>
    </Head>
  );
}
const Head = styled.div`
  h2 {
    cursor: pointer;
    //height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #9d1b1b;
    position: relative;
    font-size: clamp(70px, 4vw, 88px);
    margin-bottom: 230px;
    margin-top: 220px;
  }
`;
