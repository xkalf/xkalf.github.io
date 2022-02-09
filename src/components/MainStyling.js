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
export const Buttons = styled.div`
  background: linear-gradient(324.39deg, #3d444a 1.49%, #424b53 77.18%);
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
  color: #ffffff;
  background: none;
  border: none;
  margin: 21px 13px;
`;
export const SessionButton = styled.button`
  height: 83px;
  width: 83px;
  background: linear-gradient(324.39deg, #3d444a -25.55%, #363c41 77.18%);
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
  color: #ffffff;
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
