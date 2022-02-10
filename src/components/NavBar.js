import React from "react";
import styled from "styled-components";

import darkModeIcon from "../assets/dark-mode-icon.svg";
import lightModeIcon from "../assets/light-mode-icon.svg";

const NavBarContainer = styled.div`
  height: 17%;
  gap: 20%;
  display: flex;
  flex-direction: column;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LanguageToggleBtn = styled.button`
  background-color: #33393e;
  border: none;
  border-radius: 3px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
  margin-right: 4px;
  padding: 8px 10px;
  text-transform: uppercase;
`;
const ColorModeBtn = styled.button`
  background-color: #33393e;
  border-radius: 43px;
  border: none;
  width: 67px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Email = styled.span`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  margin-right: 6vw;
  max-width: 200px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

const PagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PageContainer = styled.div`
  width: 4vh;
  height: 4vh;
  background: #485057;
  box-shadow: -3px -3px 18px rgba(255, 255, 255, 0.1),
    4px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Border = styled.div`
  width: auto;
  height: 1px;
  background-color: #797878;
`;

function NavBar() {
  return (
    <NavBarContainer>
      <UserContainer>
        <Email>amroos988</Email>
        <LanguageToggleBtn>en</LanguageToggleBtn>
        <ColorModeBtn>
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
