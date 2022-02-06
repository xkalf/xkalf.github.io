import React from "react";
import styled from "styled-components";

import logo from "../assets/Timer-white.png";
import {
  StyledMain,
  ScrambleContainer,
  ScrambleText,
  TimeText,
  StartText,
  Footer,
  Buttons,
  TypeButton,
  SessionButton,
} from "./MainStyling";

function Main({ displaySec, state, scramble }) {
  return (
    <StyledMain>
      <ScrambleContainer>
        <ScrambleText>{scramble}</ScrambleText>
      </ScrambleContainer>
      <TimeText state={state}>00.00</TimeText>
      <StartText>Press and hold Space to start</StartText>
      <Footer>
        <img src={logo} alt="logo" />
        <Buttons>
          <TypeButton>3x3</TypeButton>
          <SessionButton>New</SessionButton>
        </Buttons>
      </Footer>
    </StyledMain>
  );
}

export default Main;
