import cardImg from "../../assets/cards/card_avatar.png";
import styled from "styled-components";
import { H1, H2,  H6 } from "styles";



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

export const Space = styled.div<{ $height: number; $mdH?: number; $smH?: number }>`
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


export const BtnContainer = styled.div`
  display: flex;
  @media (max-width: 1020px) {
    justify-content: center;
    gap: 40px;
  }
`;
export const LeftBtns = styled.div`
  display: flex;
  gap: 10px;
  width: 50%;
  @media (max-width: 1020px) {
    width: auto;
    gap: 40px;
  }
  @media (max-width: 560px) {
    width: auto;
    justify-content: space-between;
    gap: 5px;
  }
`;
export const RightBtns = styled.div`
  width: 50%;
  @media (max-width: 1020px) {
    width: auto;
    gap: 40px;
  }
  @media (max-width: 560px) {
    width: auto;
    gap: 0;
  }
`;
export const IconBtn = styled.div`
  display: inline-flex;
  padding: 6px 24px;
  height: 36px;
  align-items: center;
  gap: 24px;
  border-radius: 1000px;
  border: 1px solid #5d3068;
  background: rgba(17, 6, 6, 0.05);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  cursor: pointer;
  &:hover {
    background-color: #5d3068;
  }
  &:active {
    background-color: #5d306860;
    transform: translate(3px, 3px);
  }
  @media (max-width: 1020px) {
    height: 62px;
  }
  @media (max-width: 450px) {
    height: 40px;
    font-size: 12px;
    padding: 6px;
  }
`;
export const TotalBtn = styled.div`
  display: inline-flex;
  height: 40px;
  padding: 6px 24px;
  align-items: center;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 1000px;
  border: 1px solid #5d3068;
  background: rgba(17, 6, 6, 0.05);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  cursor: pointer;
  color: white;
  &:hover {
    background-color: #5d3068;
  }
  &:active {
    background-color: #5d306860;
    transform: translate(3px, 3px);
  }
  @media (max-width: 1020px) {
    height: 62px;
  }
  @media (max-width: 450px) {
    height: 40px;
    font-size: 12px;
    padding: 6px;
  }
`;

export const LiveBtn = styled.div`
  display: inline-flex;
  padding: 8px 32px;
  align-items: center;
  gap: 16px;
  border-radius: 24px;
  border: 3px solid #5d3068;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  color: white;
  &:hover {
    background-color: #5d3068;
  }
  &:active {
    background-color: #5d306860;
    transform: translate(3px, 3px);
  }
  @media (max-width: 450px) {
    height: 40px;
    padding: 8px 15px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Box = styled.div`
  width: 50%;
  padding: 0 30px 0 0;
  @media (max-width: 1020px) {
    width: 100%;
    padding: 50px 50px 0 50px;
  }
  @media (max-width: 650px) {
    padding: 10px 10px 0 10px;
  }
`;

export const AvatarBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const AvatarLg = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${cardImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 24px;
  @media (max-width: 1400px) {
    height: 550px;
  }
  @media (max-width: 768px) {
    height: 450px;
  }
  @media (max-width: 560px) {
    height: 327px;
  }
`;

export const SmallAvatars = styled(AvatarLg)`
  height: 152px;
  max-width: 152px;
  border-radius: 10px;
  @media (max-width: 1400px) {
    height: 122px;
    max-width: 130px;
  }
  @media (max-width: 1020px) {
    max-width: 180px;
    height: 150px;
  }
  @media (max-width: 768px) {
    max-width: 130px;
    height: 120px;
  }
  @media (max-width: 560px) {
    height: 110px;
  }
  @media (max-width: 450px) {
    height: 70px;
  }
`;

export const AvatarBoxSm = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media (max-width: 1400px) {
    gap: 15px;
  }
  @media (max-width: 560px) {
    height: 110px;
  }
`;
export const MintBox = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
  gap: 36px;
  @media (max-width: 1300px) {
    padding-left: 15px;
  }
  @media (max-width: 1020px) {
    padding: 50px;
  }
  @media (max-width: 650px) {
    padding: 10px;
  }
`;

export const StageBox = styled.div`
  width: 100%;
  height: 700px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  padding: 40px;
  @media (max-width: 680px) {
    padding: 10px 10px 30px 10px;
  }
`;

export const TotalMint = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  border-radius: 24px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 450px) {
    padding: 20px 15px;
  }
`;

export const OddIcon = styled.div`
  display: inline-flex;
  padding: 6px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #1b131e;
  color: #b869c5;
  font-feature-settings: "ss01" on;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 530px) {
    font-size: 14px;
  }
`;

export const SBbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: #b869c5;
  font-feature-settings: "ss01" on;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const H_32 = styled(H2)`
  font-size: 32px;
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  @media (max-width: 1200px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 530px) {
    font-size: 18px;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const WalletBox = styled.div`
  display: flex;
`;

export const OptionBtn = styled.div`
  transition: 0.1s all ease-in-out;
  padding: 5px 10px 10px 15px;
  &:hover {
    border-radius: 12px;
    border: 1px solid #111012;
    background: rgba(255, 255, 255, 0.05);
  }
  @media (max-width: 450px) {
    padding: 3px;
  }
`;

export const SvgHor = styled.svg`
  stroke-width: 1px;
  stroke: rgba(17, 16, 18, 0);
  width: 100%;
  height: 10px;
`;

export const UpperText = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const H20 = styled(H6)`
  font-size: 20px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const PercentBar = styled.div`
  width: 100%;
  position: relative;
  height: 8px;
  background-color: #3a3440;
  border-radius: 4px;
`;

export const Percent = styled.div`
  width: 76%;
  position: absolute;
  height: 8px;
  background-color: #af50bd;
  border-radius: 4px;
`;

export const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Control = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: 1300px) {
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

export const Btn = styled.div`
  display: flex;
  width: 59px;
  height: 59px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #af51bd;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
`;

export const BtnNum = styled(Btn)`
  width: 100px;
`;

export const ControlBtn = styled(Btn)`
  width: 250px;
  @media (max-width: 1300px) {
    width: 70%;
    margin-left: 15%;
  }
  @media (max-width: 530px) {
    width: 95%;
    margin-left: 2.5%;
    font-size: 14px;
  }
`;

export const Explore = styled(TotalMint)`
  font-size: 18px;
  color: white;
  justify-content: center;
`;

export const CenterText = styled.div`
  width: 100%;
  text-align: center;
`;

export const SvgDot = styled.svg`
  width: 8px;
  height: 8px;
  margin: 0 20px 8px 20px;
  @media (max-width: 450px) {
    margin: 0 5px 3px 10px;
  }
`;

export const SvgSign = styled.svg`
  width: 28px;
  height: 24px;
  margin-left: 40px;
  margin-right: 10px;
  @media (max-width: 450px) {
    margin: 0 10px 0px 15px;
    width: 20px;
    height: 16px;
  }
`;

export const H1_cst = styled(H1)`
  @media (max-width: 1080px) {
    text-align: center;
    font-weight: 900;
  }
  @media (max-width: 768px) {
    font-size: 42px;
  }
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;