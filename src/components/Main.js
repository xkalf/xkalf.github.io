import React from "react";

import whiteLogo from "../assets/Timer-white.png";
import blackLogo from "../assets/Timer-black.png";
import {
  StyledMain,
  ScrambleContainer,
  ScrambleText,
  TimeText,
  StartText,
  Logo,
  TextContainer,
} from "../utils/Style";

function Main({ theme, displaySec, state, scramble }) {
  return (
    <StyledMain>
      <ScrambleContainer>
        <ScrambleText>{scramble}</ScrambleText>
      </ScrambleContainer>
      <TextContainer>
        <TimeText state={state}>{displaySec}</TimeText>
        <StartText>Press and hold Space to start</StartText>
      </TextContainer>
      <Logo src={theme === "dark" ? whiteLogo : blackLogo} alt="logo" />
    </StyledMain>
  );
}

export default Main;
