import React from "react";
import {
  NavBarContainer,
  UserContainer,
  Email,
  LanguageToggleBtn,
  ColorModeBtn,
  PagesContainer,
  PageContainer,
  Border,
} from "../utils/Style";

import lightModeIcon from "../assets/light-mode-icon.svg";
import darkModeIcon from "../assets/dark-mode-icon.svg";

function NavBar({ themeToggler, theme }) {
  return (
    <NavBarContainer>
      <UserContainer>
        <Email>amroos988</Email>
        <LanguageToggleBtn>en</LanguageToggleBtn>
        <ColorModeBtn
          onClick={() => {
            themeToggler();
            document.activeElement.blur();
          }}
        >
          <img
            src={theme === "light" ? lightModeIcon : darkModeIcon}
            alt="icon"
          />
        </ColorModeBtn>
      </UserContainer>
      <PagesContainer>
        <PageContainer>1</PageContainer>
        <PageContainer>2</PageContainer>
        <PageContainer>3</PageContainer>
        <PageContainer>4</PageContainer>
      </PagesContainer>
      <Border />
    </NavBarContainer>
  );
}

export default NavBar;
