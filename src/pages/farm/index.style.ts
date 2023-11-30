import styled from "styled-components";
import bitcoin from "../../assets/bitcoin.png";
import dollar from "../../assets/dollar.png";

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

export const SearchInput = styled.div`
  display: flex;
  height: 65px;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: 1px solid #5d3068;
  backdrop-filter: blur(30px);
  flex-grow: 2;
  background-color: transparent;
`;

export const InputSpec = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 100%;
  width: calc(100% - 30px);
  color: white;
  font-size: 16px;
  padding-left: 20px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const H_40 = styled.h1`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 50.4px */
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
  flex-direction: row;
  flex-wrap: nowrap;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  max-width: 800px;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const AllButton = styled.div`
  display: inline-flex;
  padding: 16px 48px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  backdrop-filter: blur(30px);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 30.24px */
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    background-color: #af50bd50;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Category = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 40px;

  @media (max-width: 768px) {
    padding-left: 0;
  }

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

export const H_magnet = styled.div`
  color: #5d3068;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  flex-grow: 8;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const FarmCard = styled.div`
  width: 100%;
  padding: 45px 90px 45px 60px;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  @media (min-width: 768px) {
    border-radius: 55px;
    border: 3px solid #5d3068;
    background: rgba(184, 128, 255, 0.04);
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(30px);
  }

  @media (max-width: 768px) {
    align-items: center;
    padding: 8px 20px;
  }
`;

export const Pool = styled.div`
  display: flex;
  gap: 72px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: 500px) {
    width: 60px;
  }
`;

export const SignBox = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-left: -100px;
    margin-bottom: 10px;
  }
  @media (max-width: 600px) {
    margin-left: -75px;
  }
  @media (max-width: 500px) {
    margin-left: -40px;
  }
`;

export const Bitcoin = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: url(${bitcoin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 600px) {
    width: 24px;
    height: 24px;
  }
`;
export const Dollar = styled(Bitcoin)`
  background-image: url(${dollar});
  margin-left: 40px;
  position: absolute;
  z-index: -1;
  @media (max-width: 600px) {
    margin-left: 18px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H_24 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const H_18 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 27px */
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const DollarValue = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Rewards = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SvgLine = styled.div`
  width: 100%;
  height: 5px;
  stroke-width: 2px;
  stroke: white;
`;

export const Br = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Line = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
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
