import styled from "styled-components";
import meta from "../../assets/wallet/meta.png";
import dotted from "../../assets/wallet/dotted.png";
import arrow from "../../assets/wallet/arrow.png";
import circle from "../../assets/wallet/circle.png";

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
  width: 100%;
  text-align: center;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 900;
  }
  @media (max-width: 560px) {
    font-size: 32px;
  }
`;

export const Flex_SB = styled(FullDiv)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const LinkBtn = styled.div`
  display: flex;
  width: 298px;
  height: 59px;
  padding: 25px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  background: #af50bd;
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.1s all ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #af50bd50;
  }
  &:active {
    background-color: #af50bd80;
    transform: translate(5px, 5px);
  }
`;

export const DivFull = styled.div`
  display: flex;
  justify-content: center;
`;

/*****************************
 *                           *
 *      Styles for Modal     *
 *                           *
 *****************************/

export const BgScreen = styled.div`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  justify-content: center;
  /* margin: 0 auto; */
  align-items: center;
  background-color: #0005;
  backdrop-filter: blur(30px);
`;

export const ModalContainer = styled.div`
  max-width: 637px;
  /* height: 587px; */
  border-radius: 24px;
  border: 1px solid #442961;
  background: #271837;
  box-shadow: 0px 5px 28px -4px rgba(14, 16, 21, 0.15);
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  @media (max-width: 860px) {
    width: 450px;
  }
  @media (max-width: 560px) {
    width: 300px;
  }
`;

export const H_31 = styled.div`
  display: flex;
  width: 100%;
  height: 31px;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Black Han Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 85.714% */
  @media (max-width: 560px) {
    font-size: 24px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  padding: 32px 24px;
  align-items: center;
  justify-content: center;
  gap: 49px;
  position: relative;
  @media (max-width: 860px) {
    margin-top: 20px;
  }
`;

export const CloseBtn = styled.div`
  /* width: 24px; */
  /* height: 24px; */
  position: absolute;
  right: 40px;
  cursor: pointer;
  transition: 0.05s all ease-in-out;
  margin-right: -10px;
  padding: 3px;
  &:hover {
    background-color: #fff1;
    border-radius: 4px;
    transform: scale(1.1);
  }
  @media (max-width: 560px) {
    right: 20px;
  }
`;

export const Line = styled.div`
  width: 80%;
  margin-left: 10%;
  height: 1px;
  background-image: linear-gradient(
    90deg,
    #111012 0%,
    #af50bd 40%,
    #af50bd 60%,
    #121013 100%
  );
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  padding: 32px 85px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: -0.2px;
  margin: 0 auto;
  @media (max-width: 560px) {
    font-size: 16px;
    padding: 18px;
  }
`;

export const BtnBox = styled.div`
  padding: 30px 60px;
  width: 100%;
  /* height: max-content; */
  @media (max-width: 560px) {
    padding: 12px;
  }
`;

export const Active = styled.div`
  width: 15px;
  height: 15px;
  background-color: transparent;
  border-radius: 50%;
`;

export const IndBtn = styled.div`
  width: 100%;
  /* height: 74px; */
  flex-shrink: 0;
  border-radius: 24px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 27px;
  transition: 0.05s all ease-in-out;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(30px);
    ${Active} {
      background-color: #5d3068;
    }
  }
  &:active {
    ${Active} {
      background-color: #c234e5;
    }
    transform: translate(3px, 3px);
  }
  @media (max-width: 560px) {
    font-size: 16px;
    padding: 12px;
  }
`;

export const Meta = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${meta});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 15px;
`;

export const Coinbase = styled(Meta)`
  background-image: url(${circle});
`;

export const OKX = styled(Meta)`
  background-image: url(${dotted});
`;

export const Bitget = styled(Meta)`
  background-image: url(${arrow});
`;

export const ActiveBtn = styled.div`
  width: 29px;
  height: 29px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 3px solid #5d3068;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpanText = styled.div`
  flex-grow: 9;
  color: #fff;
  text-align: left;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: -0.24px;
  @media (max-width: 560px) {
    font-size: 18px;
  }
`;
