import React from "react";
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
const Plus2 = styled(Span)`
  color: rgba(202, 58, 58, 0.5);
  cursor: pointer;
`;
const Dnf = styled(Span)`
  cursor: pointer;
`;
const Delete = styled(Span)`
  color: #ca3a3a;
  cursor: pointer;
`;

function Solves({ time, count, deleteTime, index, plusTime, dnfTime }) {
  let clicked = false;
  return (
    <StyledSolves>
      <Span>
        {count}. {time}
      </Span>
      <Buttons>
        <Plus2
          onClick={() => {
            plusTime(index);
          }}
        >
          +2
        </Plus2>
        <Dnf
          onClick={() => {
            dnfTime(index);
          }}
        >
          DNF
        </Dnf>
        <Delete
          onClick={() => {
            if (clicked === false) {
              deleteTime(index);
              clicked = true;
            }
          }}
        >
          X
        </Delete>
      </Buttons>
    </StyledSolves>
  );
}

export default Solves;
