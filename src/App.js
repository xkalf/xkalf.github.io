/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AppContainer, themeDark, themeLight } from "./utils/Style";

import SideBar from "./components/SideBar";
import Main from "./components/Main";
import EmptySpace from "./components/EmptySpace";
import { displayTime, loadAvg, getBest } from "./utils/TimerUtils";
import mainScramble from "./utils/Scramble";

function App() {
  const [theme, setTheme] = useState("dark");
  const [state, setState] = useState("");
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [ao5, setAo5] = useState([]);
  const [ao12, setAo12] = useState([]);
  const [best, setBest] = useState(0);
  const [scramble, setScramble] = useState("");
  const [currentType, setCurrentType] = useState("3x3");

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
    setBest(0);
    setAo5([]);
    setAo12([]);
    localStorage.setItem("solves", JSON.stringify([]));
  };
  useEffect(() => {
    setDisplaySec(displayTime(0));
    setScramble(mainScramble(currentType));
    setTheme(JSON.parse(localStorage.getItem("theme")) || "dark");
    setCurrentType(JSON.parse(localStorage.getItem("type")) || "3x3");

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
      } else if (event.altKey && event.code === "Digit2") {
        setCurrentType("2x2");
      } else if (event.altKey && event.code === "Digit3") {
        setCurrentType("3x3");
      } else if (event.altKey && event.code === "Digit4") {
        setCurrentType("4x4");
      } else if (event.altKey && event.code === "Digit5") {
        setCurrentType("5x5");
      } else if (event.altKey && event.code === "Digit6") {
        setCurrentType("6x6");
      } else if (event.altKey && event.code === "Digit7") {
        setCurrentType("7x7");
      } else if (event.altKey && event.code === "KeyM") {
        setCurrentType("megaminx");
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
    setScramble(mainScramble(currentType));

    if (solves.length !== 0) setBest(displayTime(getBest(solves)));
    else setBest(displayTime(0));

    if (solves.length >= 5) {
      addAo5();
    }

    if (solves.length >= 12) {
      addAo12();
    }
  }, [solves]);
  useEffect(() => {
    setScramble(mainScramble(currentType));
    localStorage.setItem("type", JSON.stringify(currentType));
  }, [currentType]);
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
          currentType={currentType}
        />
        <EmptySpace currentType={currentType} setCurrentType={setCurrentType} />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
