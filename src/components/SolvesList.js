import React from "react";
import Solves from "./Solves";
import { StyledSolvesList } from "./Style";

function SolvesList({ solves, displayTime, deleteTime, plusTime, dnfTime }) {
  return (
    <StyledSolvesList>
      {solves.map((el, index) => {
        return (
          <Solves
            key={index}
            time={displayTime(el)}
            count={index + 1}
            deleteTime={deleteTime}
            index={index}
            plusTime={plusTime}
            dnfTime={dnfTime}
          />
        );
      })}
    </StyledSolvesList>
  );
}

export default SolvesList;
