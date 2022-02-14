import React, { useState } from "react";
import TypeDropDown from "./TypeDropDown";
import SessionDropDown from "./SessionDropDown";

import {
  StyledEmptySpace,
  Buttons,
  TypeButton,
  SessionButton,
} from "../utils/Style";

const EmptySpace = () => {
  const [typeOpened, setTypeOpened] = useState(false);
  const [sessionOpened, setSessionOpened] = useState(false);
  return (
    <StyledEmptySpace>
      {typeOpened && <TypeDropDown />}
      {sessionOpened && <SessionDropDown />}
      <Buttons>
        <TypeButton
          onClick={() => {
            setTypeOpened(!typeOpened);
            document.activeElement.blur();
            if (!typeOpened) setSessionOpened(false);
          }}
        >
          3x3
        </TypeButton>
        <SessionButton
          onClick={() => {
            setSessionOpened(!sessionOpened);
            document.activeElement.blur();
            if (!sessionOpened) setTypeOpened(false);
          }}
        >
          New
        </SessionButton>
      </Buttons>
    </StyledEmptySpace>
  );
};

export default EmptySpace;
