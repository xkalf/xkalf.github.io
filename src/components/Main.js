import React from "react";
import styled from "styled-components";

import logo from "../assets/Timer-white.png";
import {
  StyledMain,
  ScrambleContainer,
  ScrambleText,
  TimeText,
  StartText,
  Logo,
  TextContainer,
} from "./MainStyling";

function Main({ displaySec, state, scramble }) {
  return (
    <StyledMain>
      <ScrambleContainer>
        <ScrambleText>{scramble}</ScrambleText>
      </ScrambleContainer>
      <TextContainer>
        <TimeText state={state}>{displaySec}</TimeText>
        <StartText>Press and hold Space to start</StartText>
      </TextContainer>
      <Logo src={logo} alt="logo" />
    </StyledMain>
  );
}

export default Main;
