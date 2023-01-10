import React from "react";
import styled from "styled-components";

export default function PopularVideo({ id, selectVideo, scrollTop }) {
  const onClickFunc = () => {
    selectVideo({
      id: id.id,
      title: id.snippet.title,
      description: id.snippet.description,
    });
    scrollTop();
  };

  return (
    <Container>
      <li className="video" onClick={onClickFunc}>
        <div className="img-box">
          <img src={id.snippet.thumbnails.high.url} alt={id.snippet.title} />
        </div>
        <div className="info">
          <h3 dangerouslySetInnerHTML={{ __html: id.snippet.title }} />
          <p dangerouslySetInnerHTML={{ __html: id.snippet.description }} />
        </div>
      </li>
    </Container>
  );
}
const Container = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  .video {
    opacity: 0.7;
    &:hover {
      opacity: 1;
      box-shadow: 20px 20px 20px rgb(0, 0, 0, 1);
    }
    box-shadow: 20px 20px 20px rgb(0, 0, 0, 0.6);
    width: calc(33.33%-20px);
    margin: 10px;
    display: flex;
    box-sizing: border-box;
    color: #000;
    background-color: #fff;
    position: relative;
    flex-direction: row;
    border-radius: 10px;
    .img-box {
      img {
        vertical-align: top;
        padding: 20px 20px 20px 20px;
        width: 400px;
      }
    }
    .info {
      margin: 30px 30px 30px 30px;
      border-left: 7px dotted #000;
      padding-left: 30px;
      h3 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 20px;
        margin-top: 20px;
      }
      p {
        border-top: 6px solid #858585;
        padding-top: 30px;
        font-size: 25px;
        font-family: face;
        line-height: 1.5;
      }
    }
  }
`;
