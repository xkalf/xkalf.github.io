import React, { useEffect, useState } from "react";
import {
  AppContainer,
  EmptySpace,
  Buttons,
  TypeButton,
  SessionButton,
  themeDark,
  themeLight,
} from "./utils/Style";

import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { displayTime, loadAvg, getBest } from "./utils/TimerUtils";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("dark");
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [best, setBest] = useState(0);
  const [state, setState] = useState("");
  const [scramble, setScramble] = useState(
    "R D R U' F' D2 L B U2 F D2 F D2 F R2 U2 B' U2 F L U'"
  );
  const [ao5, setAo5] = useState([]);
  const [ao12, setAo12] = useState([]);

  let millSec = 0;
  let running = false;
  let keyPress = false;
  let myInterval;

  const themeToggler = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");

    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };
  const timeStart = () => {
    millSec = 0;
    myInterval = setInterval(() => {
      millSec++;
      setDisplaySec(displayTime(millSec));
    }, 10);
    running = true;
  };
  const timeStop = () => {
    setSolves((curr) => [...curr, millSec]);
    clearInterval(myInterval);
    running = false;
  };
  const deleteTime = (index) => {
    const temp = [...solves];
    temp.splice(index, 1);
    setSolves(temp);
  };
  const plusTime = (index) => {
    const temp = [...solves];
    temp[index] += 200;
    setSolves(temp);
  };
  const dnfTime = (index) => {
    const temp = [...solves];
    temp[index] = -1;
    setSolves(temp);
  };
  const addAo5 = () => {
    setAo5(loadAvg(solves, 5));
  };
  const addAo12 = () => {
    setAo12(loadAvg(solves, 12));
  };
  const resetSolves = () => {
    let answer = window.confirm("Are you sure?");
    if (!answer) return;
    setSolves([]);
    localStorage.clear();
  };
  useEffect(() => {
    setDisplaySec(displayTime(0));
    setScramble("R D R U' F' D2 L B U2 F D2 F D2 F R2 U2 B' U2 F L U'");
    setTheme(JSON.parse(localStorage.getItem("theme")) || "dark");

    setSolves(JSON.parse(localStorage.getItem("solves")) || []);
    setAo5(loadAvg(solves, 5));
    setAo12(loadAvg(solves, 12));

    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        if (running === true) {
          timeStop();
          setState("");
        } else {
          setState("ready");
        }
      } else if (event.altKey && event.code === "KeyD") {
        resetSolves();
      } else if (event.altKey && event.code === "KeyZ") {
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        if (running === false && keyPress === false) {
          timeStart();
          setState("");
          keyPress = true;
        } else {
          keyPress = false;
        }
      }
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("solves", JSON.stringify(solves));

    if (solves.length !== 0) setBest(displayTime(getBest(solves)));
    else setBest(displayTime(0));

    if (solves.length >= 5) {
      addAo5();
    }

    if (solves.length >= 12) {
      addAo12();
    }
  }, [solves]);
  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <AppContainer>
        <SideBar
          solves={solves}
          displayTime={displayTime}
          deleteTime={deleteTime}
          plusTime={plusTime}
          dnfTime={dnfTime}
          ao5={ao5}
          ao12={ao12}
          addAo5={addAo5}
          addAo12={addAo12}
          themeToggler={themeToggler}
          best={best}
          theme={theme}
        />
        <Main
          theme={theme}
          displaySec={displaySec}
          state={state}
          scramble={scramble}
        />
        <EmptySpace>
          <Buttons>
            <TypeButton>3x3</TypeButton>
            <SessionButton>New</SessionButton>
          </Buttons>
        </EmptySpace>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
