import React from "react";
import { SideBarContainer } from "../utils/Style";

import NavBar from "./NavBar";
import Stats from "./Stats";
import SolvesList from "./SolvesList";
import ScrambleImg from "./ScrambleImg";

function SideBar({
  ao5,
  ao12,
  solves,
  displayTime,
  deleteTime,
  plusTime,
  dnfTime,
  addAo5,
  addAo12,
  themeToggler,
  best,
  theme,
}) {
  return (
    <SideBarContainer>
      <NavBar themeToggler={themeToggler} theme={theme} />
      <Stats
        ao5={ao5}
        ao12={ao12}
        solves={solves}
        displayTime={displayTime}
        best={best}
      />

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
