import styled from "styled-components";

export const themeDark = {
  textColor: "#fff",
  mainBackground: "#2e3439",
  scrambleText: "#b8b8b8",
  statBackground: "#33393e",
  solvesList: "#363c41",
  styledScramble: "#363c41",
  sideBar: "#454f57",
  toggleButton: "#33393e",
  pageContainer: "#485057",
  borderColor: "#797878",
  buttons: "linear-gradient(324.39deg, #3d444a 1.49%, #424b53 77.18%)",
  sessionButton: "linear-gradient(324.39deg, #3d444a -25.55%, #363c41 77.18%)",
};
export const themeLight = {
  textColor: "#000",
  mainBackground: "#e5e5e5",
  scrambleText: "#b8b8b8",
  statBackground: "#fff",
  solvesList: "#fff",
  styledScramble: "#fff",
  sideBar: "#fefefe",
  toggleButton: "#fff",
  pageContainer: "#fff",
  borderColor: "#dcdcdc",
  buttons: "fff",
  sessionButton: "fff",
};

export const StyledMain = styled.div`
  background-color: ${(props) => props.theme.mainBackground};
  flex: 8;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;
export const ScrambleContainer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
`;
export const ScrambleText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  line-height: 1.2em;
  letter-spacing: -0.017em;
  color: ${(props) => props.theme.scrambleText};
`;
export const TimeText = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
  line-height: 122px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.17em;
  color: ${(props) =>
    props.state === "ready"
      ? "#00ff00"
      : props.state === "waiting"
      ? "#ff0000"
      : props.theme.textColor};
  margin-top: 11%;
`;
export const StartText = styled.p`
  font-family: Montserrat, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.017em;
  color: ${(props) => props.theme.textColor};
  margin-top: 19px;
`;

export const Logo = styled.img`
  margin-top: 25vh;
  @media (max-height: 700px) {
    margin-top: 16vh;
  }
`;
export const TextContainer = styled.div`
  margin-top: 10vh;
`;

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const Best = styled.div`
  width: auto;
  height: 7vh;
  background-color: ${(props) => props.theme.statBackground};
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: ${(props) => props.theme.textColor};
  font-family: Inter, sans-serif;
  line-height: 21.78px;
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Avg = styled.div`
  width: 48%;
  height: 6vh;
  background-color: ${(props) => props.theme.statBackground};
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  line-height: 19.36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: ${(props) => props.theme.textColor};
  font-family: Inter, sans-serif;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

export const StyledSolvesList = styled.div`
  height: 30%;
  background-color: ${(props) => props.theme.solvesList};
  box-shadow: -3px -3px 24px rgba(255, 255, 255, 0.07),
    4px 4px 20px rgba(1, 1, 1, 0.25);
  border-radius: 20px;
  padding: 15px;
  padding-right: 10px;
  color: white;
  font-size: 18px;
  margin-top: 22px;
  overflow: auto;
`;

export const Span = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* or 100% */
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};
`;

export const Button = styled.button`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  /* or 100% */
  display: flex;
  align-items: center;
  background: none;
  border: none;
`;

export const StyledSolves = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;
export const SolvesButtons = styled.div`
  display: flex;
  gap: 5px;
`;
export const Plus2 = styled(Button)`
  color: rgba(202, 58, 58, 0.5);
  cursor: pointer;
`;
export const Dnf = styled(Button)`
  cursor: pointer;
  color: #fff;
`;
export const Delete = styled(Button)`
  color: #ca3a3a;
  cursor: pointer;
`;

export const SideBarContainer = styled.div`
  background-color: ${(props) => props.theme.sideBar};
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StyledScramble = styled.div`
  margin-top: 22px;
  background: ${(props) => props.theme.styledScramble};
  height: 23%;
  border-radius: 20px;
  box-shadow: -3px -3px 18px rgba(255, 255, 255, 0.04),
    4px 4px 20px rgba(0, 0, 0, 0.2);
`;

export const NavBarContainer = styled.div`
  height: 17%;
  gap: 20%;
  display: flex;
  flex-direction: column;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const LanguageToggleBtn = styled.button`
  background-color: ${(props) => props.theme.toggleButton};
  border: none;
  border-radius: 3px;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  box-sizing: border-box;
  margin-right: 4px;
  padding: 8px 10px;
  text-transform: uppercase;
`;
export const ColorModeBtn = styled.button`
  background-color: ${(props) => props.theme.toggleButton};
  border-radius: 43px;
  border: none;
  width: 67px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Email = styled.span`
  font-family: Inter, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.textColor};
  margin-right: 6vw;
  max-width: 200px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`;

export const PagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PageContainer = styled.div`
  width: 4vh;
  height: 4vh;
  background: ${(props) => props.theme.pageContainer};
  box-shadow: -3px -3px 18px rgba(255, 255, 255, 0.1),
    4px 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Border = styled.div`
  width: auto;
  height: 1px;
  background-color: ${(props) => props.theme.borderColor};
`;

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;
export const EmptySpace = styled.div`
  flex: 2.4;
  background-color: ${(props) => props.theme.mainBackground};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 6vh;
`;
export const Buttons = styled.div`
  background: ${(props) => props.theme.buttons};
  mix-blend-mode: normal;
  box-shadow: -3px -3px 12px rgba(255, 255, 255, 0.03),
    7px 7px 24px rgba(0, 0, 0, 0.2);
  border-radius: 200px;
  display: flex;
  align-items: center;
  width: 180px;
  padding: 5px;
`;
export const TypeButton = styled.button`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 18px;
  /* or 50% */
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  background: none;
  border: none;
  margin: 21px 13px;
`;
export const SessionButton = styled.button`
  height: 83px;
  width: 83px;
  background: ${(props) => props.theme.sessionButton};
  mix-blend-mode: normal;
  box-shadow: -3px -3px 12px rgba(255, 255, 255, 0.03),
    7px 7px 24px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  border: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 18px;
  color: ${(props) => props.theme.textColor};
`;
