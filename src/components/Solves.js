import React, { useState } from "react";
import {
  StyledSolves,
  Span,
  SolvesButtons,
  Plus2,
  Dnf,
  Delete,
} from "../utils/Style";

function Solves({ time, count, deleteTime, index, plusTime, dnfTime }) {
  const [plusClicked, setPlusClicked] = useState(false);
  const [dnfCLicked, setDnfClicked] = useState(false);
  return (
    <StyledSolves>
      <Span>
        {count}. {time}
      </Span>
      <SolvesButtons>
        <Plus2
          onClick={() => {
            plusTime(index);
            setPlusClicked(true);
            document.activeElement.blur();
          }}
          disabled={plusClicked || dnfCLicked}
        >
          +2
        </Plus2>
        <Dnf
          disabled={dnfCLicked}
          onClick={() => {
            dnfTime(index);
            setDnfClicked(true);
            document.activeElement.blur();
          }}
        >
          DNF
        </Dnf>
        <Delete
          onClick={() => {
            deleteTime(index);
            document.activeElement.blur();
          }}
        >
          X
        </Delete>
      </SolvesButtons>
    </StyledSolves>
  );
}

export default Solves;
