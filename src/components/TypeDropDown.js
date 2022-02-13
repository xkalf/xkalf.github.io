import React from "react";
import { StyledDropDown, StyledTypeDropDownItem } from "../utils/Style";

const TypeDropDown = () => {
  const types = [
    "2x2",
    "3x3",
    "4x4",
    "5x5",
    "6x6",
    "7x7",
    "Megaminx",
    "Pyraminx",
    "Skewb",
    "Clock",
  ];
  return (
    <StyledDropDown>
      {types.map((el) => {
        return <StyledTypeDropDownItem key={el}>{el}</StyledTypeDropDownItem>;
      })}
    </StyledDropDown>
  );
};

export default TypeDropDown;
