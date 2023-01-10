import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export default function MyPortfolio() {
  return (
    <>
      <High>
        <div className="movie">
          <Link to="/movie/popular">Movie App</Link>
        </div>
        <div className="youtube">
          <Link to="/youtube">Youtube App</Link>
        </div>
        <div className="netflix">
          <Link to="/netflix">Netflix App</Link>
        </div>
        <div className="mbti">
          <Link to="/mbti">MBTI Test</Link>
        </div>
      </High>
      <High>
        <div className="diary">
          <Link to="/diary">Diary App</Link>
        </div>
        <div className="todolist">
          <Link to="/todo">Todo List</Link>
        </div>
        <div className="voca">
          <Link to="/voca">Voca App</Link>
        </div>
        <div className="crawling">
          <Link to="/crawling">Crawling</Link>
        </div>
      </High>
    </>
  );
}
const High = styled.div`
  height: 500px;
  width: 3000px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px;
  @keyframes ball {
    0% {
      opacity: 0.2;
    }
    55% {
      opacity: 0.7;
    }
    to {
      opacity: 0.9;
    }
  }
  .movie {
    background-image: url("https://png.pngtree.com/element_pic/28/03/20/1656f9314b523cf.jpg");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 710px;
    background-position-x: -165px;
    background-position-y: -168px;
  }
  .voca {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 1700px;
    background-position-x: -20px;
    background-position-y: -1220px;
  }
  .crawling {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 1780px;
    background-position-x: -460px;
    background-position-y: -680px;
  }
  .mbti {
    background-image: url("https://creazilla-store.fra1.digitaloceanspaces.com/vectors/3270/planets-vector-md.png");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 1750px;
    background-position-x: -30px;
    background-position-y: -88px;
  }
  .diary {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfzTnlgNtcO2dV1RkaxJQXbZP61R9OaIXPVRduS4OFAKvYWaHlFX4ihNWoncboSYS0UY&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 430px;
    background-position-x: -20px;
    background-position-y: -28px;
  }
  .youtube {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dGIXLv93ge9d1bIKsJU_QYc75YW7r-iK_Q&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 700px;
    background-position-x: -150px;
    background-position-y: -58px;
  }
  .netflix {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCeKfGgu4GTGCiW1Uoz4ru_REfnDaxclVpug&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 700px;
    background-position-x: -150px;
    background-position-y: -58px;
  }
  .todolist {
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnEq5wQtfV6ha6AIkRgf4RuaW3-_FNCmhbg&usqp=CAU");
    background-repeat: no-repeat;
    background-position: absolute;
    background-size: 735px;
    background-position-x: -165px;
    background-position-y: -68px;
  }
  .movie,
  .youtube,
  .netflix,
  .mbti,
  .voca,
  .diary,
  .todolist,
  .crawling {
    animation: ball 3s ease-in infinite alternate;
    &:hover {
      color: #fff;
    }
    display: relative;
    justify-content: space-around;
    //background-image: url("data:image/jpeg;base64,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");
    /* background-repeat: no-repeat;
    background-position: absolute;
    background-size: 600px;
    background-position-x: -95px;
    background-position-y: -98px; */
    box-shadow: -55px 55px 55px rgba(0, 0, 0, 0.7);
    color: #000;
    height: 400px;
    width: 400px;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
    font-size: 50px;
    line-height: 380px;
    border-radius: 2000px;
    text-decoration: underline;
    text-underline-position: under;
  }
`;
