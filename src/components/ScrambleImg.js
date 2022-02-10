import React from "react";
import styled from "styled-components";

const StyledScramble = styled.div`
  margin-top: 22px;
  background: #363c41;
  height: 23%;
  border-radius: 20px;
  box-shadow: -3px -3px 18px rgba(255, 255, 255, 0.04),
    4px 4px 20px rgba(0, 0, 0, 0.2);
`;

function ScrambleImg() {
  return <StyledScramble></StyledScramble>;
}

export default ScrambleImg;
