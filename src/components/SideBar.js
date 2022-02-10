import React from "react";
import { SideBarContainer } from "./Style";

import NavBar from "./NavBar";
import Stats from "./Stats";
import SolvesList from "./SolvesList";
import ScrambleImg from "./ScrambleImg";

function SideBar({ solves, displayTime, deleteTime, plusTime, dnfTime }) {
  return (
    <SideBarContainer>
      <NavBar />
      <Stats solves={solves} displayTime={displayTime} />
      <SolvesList
        solves={solves}
        displayTime={displayTime}
        deleteTime={deleteTime}
        plusTime={plusTime}
        dnfTime={dnfTime}
      />
      <ScrambleImg />
    </SideBarContainer>
  );
}

export default SideBar;
