import React, { useState } from "react";
import TypeDropDown from "./TypeDropDown";
import SessionDropDown from "./SessionDropDown";

import {
  StyledEmptySpace,
  Buttons,
  TypeButton,
  SessionButton,
} from "../utils/Style";

const EmptySpace = ({ currentType, setCurrentType }) => {
  const [typeOpened, setTypeOpened] = useState(false);
  const [sessionOpened, setSessionOpened] = useState(false);
  return (
    <StyledEmptySpace>
      {typeOpened && (
        <TypeDropDown
          setTypeOpened={setTypeOpened}
          setCurrentType={setCurrentType}
        />
      )}
      {sessionOpened && <SessionDropDown />}
      <Buttons>
        <TypeButton
          currentType={currentType}
          onClick={() => {
            setTypeOpened(!typeOpened);
            document.activeElement.blur();
            if (!typeOpened) setSessionOpened(false);
          }}
        >
          {currentType}
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
