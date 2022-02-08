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
  flex: 2.4;
  background-color: #2e3439;
`;

function App() {
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [state, setState] = useState("");
  const [scramble, setScramble] = useState(
    "L U' D L' B2 R2 D' U2 L2 F L2 D2 B R2 U2 B U2 F R' "
  );
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

  useEffect(() => {
    setDisplaySec(displayTime(0));

    setSolves(JSON.parse(localStorage.getItem("solves")) || []);

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
    <AppContainer>
      <SideBar
        solves={solves}
        displayTime={displayTime}
        deleteTime={deleteTime}
        plusTime={plusTime}
        dnfTime={dnfTime}
      />
      <Main displaySec={displaySec} state={state} scramble={scramble} />
      <EmptySpace />
    </AppContainer>
  );
}

export default App;
