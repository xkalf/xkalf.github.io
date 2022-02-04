import React from "react";
import styled from "styled-components";

import logo from "../assets/nomad-logo.svg";
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

function Main({ displaySec, state }) {
  return (
    <StyledMain>
      <ScrambleContainer>
        <ScrambleText>
          F2 U' R L2 D L2 B' R' D2 L2 U2 F B2 L2 U2 F D2 R2 F'
        </ScrambleText>
      </ScrambleContainer>
      <TimeText state={state}>{displaySec}</TimeText>
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
