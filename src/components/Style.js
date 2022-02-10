import styled from "styled-components";

export const StyledMain = styled.div`
  background-color: #2e3439;
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
  color: #b8b8b8;
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
      : "#ffffff"};
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
  color: #ffffff;
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
  background-color: #33393e;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: white;
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
  background-color: #33393e;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.2),
    -3px -3px 18px rgba(255, 255, 255, 0.04);
  border-radius: 10px;
  line-height: 19.36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  color: white;
  font-family: Inter, sans-serif;
  @media (max-width: 900px) {
    font-size: 13px;
  }
`;

export const StyledSolvesList = styled.div`
  height: 30%;
  background-color: #363c41;
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
export const Buttons = styled.div`
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
  background-color: #454f57;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const StyledScramble = styled.div`
  margin-top: 22px;
  background: #363c41;
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
export const ColorModeBtn = styled.button`
  background-color: #33393e;
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
  color: #fff;
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
  background: #485057;
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
  background-color: #797878;
`;
