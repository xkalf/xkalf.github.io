import React, { useEffect, useRef } from "react";
import Solves from "./Solves";
import { StyledSolvesList } from "../utils/Style";

function SolvesList({ solves, displayTime, deleteTime, plusTime, dnfTime }) {
  const solvesListRef = useRef();
  useEffect(() => {
    solvesListRef.current.scrollTop = -100000000000000;
  }, [solves]);
  return (
    <StyledSolvesList ref={solvesListRef}>
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
