import React, { useState, useEffect } from "react";
import { getBest, getAvg } from "../utils/TimerUtils";
import { Best, StatsContainer, Row, Avg } from "./Style";

function Stats({ solves, displayTime }) {
  const [best, setBest] = useState(0);
  const [ao5, setAo5] = useState(0);
  const [ao12, setAo12] = useState(0);
  useEffect(() => {
    if (solves.length !== 0) setBest(displayTime(getBest(solves)));
    else setBest(displayTime(0));
    if (solves.length >= 5) setAo5(displayTime(getAvg(solves, 5)));
    else setAo5(displayTime(0));
    if (solves.length >= 12) {
      setAo5(displayTime(getAvg(solves, 5)));
      setAo12(displayTime(getAvg(solves, 12)));
    } else setAo12(displayTime(0));
  }, [solves]);
  return (
    <StatsContainer>
      <Best>
        <span>Best</span>
        <span>{best}</span>
      </Best>
      <Row>
        <Avg>
          <span>Ao5</span>
          <span>{ao5}</span>
        </Avg>
        <Avg>
          <span>Ao5 PB</span>
          <span>0.00</span>
        </Avg>
      </Row>
      <Row>
        <Avg>
          <span>Ao12</span>
          <span>{ao12}</span>
        </Avg>
        <Avg>
          <span>Ao12 PB</span>
          <span>0.00</span>
        </Avg>
      </Row>
    </StatsContainer>
  );
}

export default Stats;
