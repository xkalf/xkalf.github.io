import React, { useState } from "react";
import { StyledSolves, Span, SolvesButtons, Plus2, Dnf, Delete } from "./Style";

function Solves({ time, count, deleteTime, index, plusTime, dnfTime }) {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledSolves>
      <Span>
        {count}. {time}
      </Span>
      <SolvesButtons>
        <Plus2
          onClick={() => {
            plusTime(index);
            setClicked(true);
            document.activeElement.blur();
          }}
          disabled={clicked}
        >
          +2
        </Plus2>
        <Dnf
          disabled={clicked}
          onClick={() => {
            dnfTime(index);
            setClicked(true);
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
