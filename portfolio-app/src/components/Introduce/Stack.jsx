import React from "react";
import styled from "styled-components";

export default function Stack() {
  return <Stacks></Stacks>;
}
const Stacks = styled.div`
  border-top: 12px dotted #fff;
  margin-top: 40px;
  width: 1800px;
  .lists {
    margin-top: 60px;
    p {
      margin-bottom: 30px;
    }
  }
`;
