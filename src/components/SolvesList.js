import React from "react";
import styled from "styled-components";

import Solves from "./Solves";

const StyledSolvesList = styled.div`
  height: 30%;
  background-color: #363c41;
  box-shadow: -3px -3px 24px rgba(255, 255, 255, 0.07),
    4px 4px 20px rgba(1, 1, 1, 0.25);
  border-radius: 20px;
  padding: 15px;
  color: white;
  font-size: 18px;
  margin-top: 22px;
  overflow: auto;
`;

function SolvesList({ solves, displayTime }) {
  return (
    <StyledSolvesList>
      {solves.map((el, index) => {
        return <Solves key={index} time={displayTime(el)} count={index + 1} />;
      })}
    </StyledSolvesList>
  );
}

export default SolvesList;
