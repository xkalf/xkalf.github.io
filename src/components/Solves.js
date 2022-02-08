import React, { useState } from "react";
import styled from "styled-components";

const Span = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* or 100% */
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* or 100% */
  display: flex;
  align-items: center;
  background: none;
  border: none;
`;

const StyledSolves = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
const Buttons = styled.div`
  display: flex;
  gap: 5px;
`;
const Plus2 = styled(Button)`
  color: rgba(202, 58, 58, 0.5);
  cursor: pointer;
`;
const Dnf = styled(Button)`
  cursor: pointer;
  color: #fff;
`;
const Delete = styled(Button)`
  color: #ca3a3a;
  cursor: pointer;
`;

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
