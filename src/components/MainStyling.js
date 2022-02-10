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
