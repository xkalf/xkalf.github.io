import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SideBar from "./components/SideBar";
import Main from "./components/Main";
import { displayTime } from "./utils/TimerUtils";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
const EmptySpace = styled.div`
  flex: 1;
  background-color: #2e3439;
`;

function App() {
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [state, setState] = useState("");

  let millSec = 0;
  let running = false;
  let keyPress = false;
  let myInterval;

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
    localStorage.setItem("solves", solves);
    clearInterval(myInterval);
    running = false;
  };

  useEffect(() => {
    setDisplaySec(displayTime(0));

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

  return (
    <AppContainer>
      <SideBar solves={solves} displayTime={displayTime} />
      <Main displaySec={displaySec} state={state} />
      <EmptySpace />
    </AppContainer>
  );
}

export default App;