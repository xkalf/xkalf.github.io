import React from "react";
import { StyledDropDown, StyledTypeDropDownItem } from "../utils/Style";

const TypeDropDown = ({ setCurrentType, setTypeOpened }) => {
  const types = ["2x2", "3x3", "4x4", "5x5", "6x6", "7x7", "megaminx"];
  return (
    <StyledDropDown>
      {types.map((el) => {
        return (
          <StyledTypeDropDownItem
            onClick={() => {
              setCurrentType(el);
              setTypeOpened(false);
            }}
            key={el}
          >
            {el}
          </StyledTypeDropDownItem>
        );
      })}
    </StyledDropDown>
  );
};

export default TypeDropDown;
