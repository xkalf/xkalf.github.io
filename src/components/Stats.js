import React from "react";
import { Best, StatsContainer, Row, Avg } from "../utils/Style";

function Stats({ solves, displayTime, ao5, ao12, best }) {
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
