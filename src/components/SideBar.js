import React from "react";
import styled from "styled-components";

import NavBar from "./NavBar";
import Stats from "./Stats";
import SolvesList from "./SolvesList";
import ScrambleImg from "./ScrambleImg";

const SideBarContainer = styled.div`
  background-color: #454f57;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

function SideBar({ solves, displayTime }) {
  return (
    <SideBarContainer>
      <NavBar />
      <Stats solves={solves} displayTime={displayTime} />
      <SolvesList solves={solves} displayTime={displayTime} />
      <ScrambleImg />
    </SideBarContainer>
  );
}

export default SideBar;
