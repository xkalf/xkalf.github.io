import React, { useState, useEffect } from "react";
import { getBest } from "../utils/TimerUtils";
import { Best, StatsContainer, Row, Avg } from "./Style";

function Stats({ solves, displayTime, ao5, ao12, addAo5, addAo12 }) {
  const [best, setBest] = useState(0);
  useEffect(() => {
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
    <StatsContainer>
      <Best>
        <span>Best</span>
        <span>{best}</span>
      </Best>
      <Row>
        <Avg>
          <span>Ao5</span>
          <span>
            {ao5.length === 0
              ? displayTime(0)
              : displayTime(ao5[ao5.length - 1])}
          </span>
        </Avg>
        <Avg>
          <span>Ao5 PB</span>
          <span>
            {ao5.length === 0 ? displayTime(0) : displayTime(Math.min(...ao5))}
          </span>
        </Avg>
      </Row>
      <Row>
        <Avg>
          <span>Ao12</span>
          <span>
            {ao12.length === 0
              ? displayTime(0)
              : displayTime(ao12[ao12.length - 1])}
          </span>
        </Avg>
        <Avg>
          <span>Ao12 PB</span>
          <span>
            {ao12.length === 0
              ? displayTime(0)
              : displayTime(Math.min(...ao12))}
          </span>
        </Avg>
      </Row>
    </StatsContainer>
  );
}

export default Stats;
