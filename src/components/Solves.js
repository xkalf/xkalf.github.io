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
`;
const Dnf = styled(Span)``;
const Delete = styled(Span)`
  color: #ca3a3a;
`;

function Solves({ time, count }) {
  return (
    <StyledSolves>
      <Span>
        {count}. {time}
      </Span>
      <Buttons>
        <Plus2>+2</Plus2>
        <Dnf>DNF</Dnf>
        <Delete>X</Delete>
      </Buttons>
    </StyledSolves>
  );
}

export default Solves;
