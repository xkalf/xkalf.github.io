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
} from "./Style";

import darkModeIcon from "../assets/dark-mode-icon.svg";
import lightModeIcon from "../assets/light-mode-icon.svg";

function NavBar({ themeToggler }) {
  return (
    <NavBarContainer>
      <UserContainer>
        <Email>amroos988</Email>
        <LanguageToggleBtn>en</LanguageToggleBtn>
        <ColorModeBtn
          onClick={() => {
            themeToggler();
          }}
        >
          <img src={lightModeIcon} alt="lightMode" />
          <img src={darkModeIcon} alt="darkMode" />
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
