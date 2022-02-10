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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 6vh;
`;
const Buttons = styled.div`
  background: linear-gradient(324.39deg, #3d444a 1.49%, #424b53 77.18%);
  mix-blend-mode: normal;
  box-shadow: -3px -3px 12px rgba(255, 255, 255, 0.03),
    7px 7px 24px rgba(0, 0, 0, 0.2);
  border-radius: 200px;
  display: flex;
  align-items: center;
  width: 180px;
  padding: 5px;
`;
const TypeButton = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 18px;
  /* or 50% */
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  background: none;
  border: none;
  margin: 21px 13px;
`;
const SessionButton = styled.button`
  height: 83px;
  width: 83px;
  background: linear-gradient(324.39deg, #3d444a -25.55%, #363c41 77.18%);
  mix-blend-mode: normal;
  box-shadow: -3px -3px 12px rgba(255, 255, 255, 0.03),
    7px 7px 24px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: #ffffff;
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
      <EmptySpace>
        <Buttons>
          <TypeButton>3x3</TypeButton>
          <SessionButton>New</SessionButton>
        </Buttons>
      </EmptySpace>
    </AppContainer>
  );
}

export default App;
