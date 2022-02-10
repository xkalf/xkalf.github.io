import React, { useEffect, useState } from "react";
import {
  AppContainer,
  EmptySpace,
  Buttons,
  TypeButton,
  SessionButton,
  themeDark,
  themeLight,
} from "./components/Style";

import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { displayTime, loadAvg } from "./utils/TimerUtils";
import { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("dark");
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [state, setState] = useState("");
  const [scramble, setScramble] = useState("scramble obso");
  const [ao5, setAo5] = useState([]);
  const [ao12, setAo12] = useState([]);
  let millSec = 0;
  let running = false;
  let keyPress = false;
  let myInterval;

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
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
  useEffect(() => {
    setDisplaySec(displayTime(0));

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
        />
        <Main displaySec={displaySec} state={state} scramble={scramble} />
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
