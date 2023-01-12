import React from "react";
import styled from "styled-components";
import github from "../../assets/images/github.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import sass from "../../assets/images/sass.png";
import react from "../../assets/images/react.png";
import redux from "../../assets/images/redux.png";
import jquery from "../../assets/images/jquery.png";
import netlify from "../../assets/images/netlify.png";
import js from "../../assets/images/js.png";
import css from "../../assets/images/css.png";
import es6 from "../../assets/images/es6.png";
import style from "../../assets/images/styled.png";

export default function Stack() {
  return (
    <Stacks>
      <li className="front">
        <h3>Frontend</h3>
        <div className="html">
          <img src={html} alt=""></img>
          <p>html</p>
        </div>
        <div className="css">
          <img src={css} alt=""></img>
          <p>css</p>
        </div>
        <div className="javascript">
          <img src={js} alt=""></img>
          <p>javascript</p>
        </div>
        <div className="es6">
          <img src={es6} alt=""></img>
          <p>es6</p>
        </div>
        <div className="sass">
          <img src={sass} alt=""></img>
          <p>sass</p>
        </div>
        <div className="styled">
          <img src={style} alt=""></img>
          <p>styled-components</p>
        </div>
        <div className="react">
          <img src={react} alt=""></img>
          <p>react</p>
        </div>
        <div className="redux">
          <img src={redux} alt=""></img>
          <p>redux</p>
        </div>
        <div className="jquery">
          <img src={jquery} alt=""></img>
          <p>jquery</p>
        </div>
      </li>
      <li className="deployment">
        <h3>Deployment</h3>
        <div className="netlify">
          <img src={netlify} alt=""></img>
          <p>netlify</p>
        </div>
      </li>
      <li className="version-control">
        <h3>Version-control</h3>
        <div className="github">
          <img src={github} alt=""></img>
          <p>github</p>
        </div>
        <div className="git">
          <img src={git} alt=""></img>
          <p>git</p>
        </div>
      </li>
    </Stacks>
  );
}
const Stacks = styled.ul`
  border-top: 12px dotted #fff;
  margin-top: 40px;
  width: 1800px;
  display: flex;
  flex-direction: column;
  li {
    padding: 20px 35px 10px 35px;
    display: flex;
    flex-flow: row wrap;
  }
  h3 {
    color: #fff;
    font-size: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: ScORE;
    display: grid;
  }
  img {
    margin: 10px 30px 10px 30px;
    width: 200px;
    height: 200px;
  }
`;
