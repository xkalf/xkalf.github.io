import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getBest, getAvg } from "../utils/TimerUtils";

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const Best = styled.div`
  width: auto;
  height: 7vh;
  background-color: #33393e;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: white;
  font-family: Inter, sans-serif;
  line-height: 21.78px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Avg = styled.div`
  width: 48%;
  height: 6vh;
  background-color: #33393e;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  line-height: 19.36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: white;
  font-family: Inter, sans-serif;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

function Stats({ solves, displayTime }) {
  const [best, setBest] = useState(0);
  const [ao5, setAo5] = useState(0);
  const [ao12, setAo12] = useState(0);
  useEffect(() => {
    if (solves.length !== 0) setBest(displayTime(getBest(solves)));
    if (solves.length >= 5) setAo5(displayTime(getAvg(solves, 5)));
    if (solves.length >= 12) {
      setAo5(displayTime(getAvg(solves, 5)));
      setAo12(displayTime(getAvg(solves, 12)));
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
          <span>0</span>
        </Avg>
      </Row>
    </StatsContainer>
  );
}

export default Stats;
