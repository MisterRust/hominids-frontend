import styled from "styled-components";
import ether from "../../assets/token/ci.png";
import bnb from "../../assets/token/bnb.png";

export const FullDiv = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 560px) {
    padding: 0 15px;
  }
`;

export const Space = styled.div<{
  $height: number;
  $mdH?: number;
  $smH?: number;
}>`
  width: 100%;
  height: ${(props) => props.$height}px;
  @media (max-width: 768px) {
    height: ${(props) => props.$mdH}px;
  }
  @media (max-width: 500px) {
    height: ${(props) => props.$smH}px;
  }
`;

export const MenuItem = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;

export const MenuBox = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  @media (max-width: 1080px) {
    gap: 0;
    justify-content: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const H_40 = styled.h1`
  color: #fff;
  font-family: Black Han Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
    font-weight: 900;
  }
  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const H_24 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  @media (max-width: 1260px) {
    text-align: center;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const H_24_hid = styled(H_24)`
  @media (max-width: 955px) {
    display: none;
  }
`;

export const BridgeContainer = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  gap: 40px;
  border-radius: 55px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 460px) {
    padding: 10px;
  }
`;

export const Diagram = styled.svg`
  width: 240px;
  height: 240px;
  width: 20%;
  @media (max-width: 1260px) {
    display: none;
  }
`;

export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 20px;
  @media (max-width: 1260px) {
    width: 100%;
  }
`;

export const FromTo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 955px) {
    flex-direction: column;
  }
`;

export const SignBox = styled.div`
  display: flex;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px); */
  flex-grow: 4;
  @media (max-width: 1260px) {
    padding: 16px 25px;
  }
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const EtherSign = styled.div`
  background-color: #5d3068;
  background-image: url(${ether});
  background-size: 38px 45px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 76px;
  height: 76px;
  margin-right: 5px;
  @media (max-width: 600px) {
    background-size: 28px 34px;
    width: 40px;
    height: 40px;
  }
`;

export const BNBSign = styled(EtherSign)`
  background-image: url(${bnb});
  @media (max-width: 600px) {
    background-size: 30px 30px;
  }
`;
export const SpanWithMargin = styled(H_24)`
  margin-right: 10px;
`;

export const PlusBox = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 9;
  padding: 30px 20px 0 20px;
  @media (max-width: 955px) {
    width: 180px;
    transform: rotate(90deg);
    height: 120px;
    margin: 40px 0 30px 40%;
  }
  @media (max-width: 600px) {
    margin: 18px 0 22px 23%;
  }
  @media (max-width: 700px) {
    margin-left: 34%;
  }

  @media (max-width: 500px) {
    margin-left: 28%;
  }
`;

export const Hr = styled.hr`
  min-width: 20px;
  flex-grow: 9;
  border-color: #935ebd70;
  border-style: dotted;
  /* max-width: 80px; */
  @media (max-width: 955px) {
    width: 30px;
    flex-grow: unset;
  }
`;

export const PlusBtn = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: #af51bd;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 4px;
  font-size: 38px;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 5px;
  margin: 0 10px;
`;

export const SpanFlex = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

export const YouSend = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpanSec = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextUp = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
  @media (max-width: 955px) {
    justify-content: center;
  }
`;

export const BtnSent = styled.div`
  display: flex;
  width: 100%;
  /* height: 108px; */
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid #5d3068;
  @media (max-width: 600px) {
    justify-content: center;
  }
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px); */
`;

export const BtnFrom = styled.div`
  display: flex;
  /* justify-content: center; */
  /* padding: 40px; */
  gap: 40px;
  width: max-content;
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H_magneta = styled.div`
  color: #af50bd;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 30.24px */
`;

export const H_magneta_small = styled(H_magneta)`
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const BtnDown = styled.div`
  display: flex;
  width: 100%;
  height: 108px;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  padding: 16px 40px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px); */
  @media (max-width: 460px) {
    padding: 16px 20px;
  }
`;

export const TextBoxMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H_32 = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 40.32px */
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const Line = styled.div`
  @media (min-width: 955px) {
    display: none;
  }
  width: 70%;
  margin-left: 15%;
  height: 1px;
  background-image: linear-gradient(
    90deg,
    #111012 0%,
    #af50bd 40%,
    #af50bd 60%,
    #121013 100%
  );
`;
