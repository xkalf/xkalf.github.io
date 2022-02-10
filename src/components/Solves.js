import React, { useState } from "react";
import { StyledSolves, Span, Buttons, Plus2, Dnf, Delete } from "./Style";

function Solves({ time, count, deleteTime, index, plusTime, dnfTime }) {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledSolves>
      <Span>
        {count}. {time}
      </Span>
      <Buttons>
        <Plus2
          onClick={() => {
            plusTime(index);
            setClicked(true);
          }}
          disabled={clicked}
        >
          +2
        </Plus2>
        <Dnf
          onClick={() => {
            dnfTime(index);
            setClicked(true);
          }}
        >
          DNF
        </Dnf>
        <Delete
          onClick={() => {
            deleteTime(index);
          }}
        >
          X
        </Delete>
      </Buttons>
    </StyledSolves>
  );
}

export default Solves;
