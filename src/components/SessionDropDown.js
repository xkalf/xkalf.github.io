import React from "react";
import {
  SessionItems,
  SessionText,
  StyledDropDown,
  SessionName,
  Delete,
  NewSessionButton,
} from "../utils/Style";

const SessionDropDown = () => {
  const sessions = ["2022/02/13", "2022/02/14"];
  return (
    <StyledDropDown show>
      <SessionText>Session</SessionText>
      {sessions.map((el) => {
        return (
          <SessionItems key={el}>
            <SessionName>{el}</SessionName>
            <Delete>X</Delete>
          </SessionItems>
        );
      })}
      <NewSessionButton>+ New session</NewSessionButton>
    </StyledDropDown>
  );
};

export default SessionDropDown;
