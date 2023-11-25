import styled from "styled-components";
import gamePad from "../../assets/gamePad.png";
import { H2 } from "styles";

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

export const H1_768 = styled(H2)`
  margin-top: 50px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MenuBar = styled.div`
  /* height: 102px; */
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Circle = styled.div`
  display: flex;
  width: 102px;
  height: 102px;
  padding: 50px;
  align-items: center;
  gap: 16.19px;
  border-radius: 161.905px;
  background: linear-gradient(
    98deg,
    #f8d46b 1.78%,
    #a74fbe 37.37%,
    #302072 89.89%
  );
  align-items: center;
`;

export const LongBtnBox = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 470px) {
    gap: 4px;
    margin-top: 20px;
  }
`;

export const Btn = styled.div`
  display: inline-flex;
  height: 59px;
  padding: 25px 40px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #af50bd;
  background: rgba(17, 6, 6, 0.05);
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 650px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  @media (max-width: 470px) {
    font-size: 10px;
    padding: 8px 10px;
  }
`;

export const GameImg = styled.div`
  background-image: url(${gamePad});
  background-size: cover;
  background-repeat: no-repeat;
  width: 32px;
  height: 24px;
`;

export const NoBorderBtnBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const NoBorderBtn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UpperText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DownText = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const SpanText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const BtnBox = styled.div`
  display: flex;
  border-radius: 40px;
  border: 1px solid #5d3068;
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset; */
  /* backdrop-filter: blur(30px); */
  align-items: center;
  width: max-content;
  @media (max-width: 768px) {
    width: 100%;
    border: none;
    gap: 10px;
    justify-content: center;
  }
`;

export const BtnInd = styled.div`
  display: flex;
  padding: 16px 48px;
  height: 62px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  /* background: #af51bd; */
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 126%; /* 30.24px */
  cursor: pointer;
  &:hover {
    border-radius: 40px;
    background: #af51bd;
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid #5d3068;
    background: rgba(18, 16, 19, 0.6);
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(30px);
  }
  @media (max-width: 650px) {
    padding: 10px 18px;
    font-size: 18px;
    border-radius: 35px;
  }
  @media (max-width: 450px) {
    padding: 4px 10px;
    font-size: 14px;
    border-radius: 25px;
  }
`;

export const SvgLine = styled.div`
  width: 0px;
  height: 1441px;
  transform: rotate(-90deg);
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: rgba(17, 16, 18, 0);
`;

export const SearchBoxLine = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  /* width: 1020px; */
  /* padding: 19px 24px; */
  height: 65px;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: 3px solid #5d3068;
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset; */
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
  font-size: 24px;
  padding-left: 20px;
  @media (max-width: 450px) {
    font-size: 15px;
  }
`;

export const TotalBox = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const TotalBtn = styled.div`
  display: inline-flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 3px solid #5d3068;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 30.24px */
  cursor: pointer;

  @media (max-width: 650px) {
    padding: 10px 18px;
    font-size: 18px;
    border-radius: 35px;
  }
  @media (max-width: 450px) {
    padding: 4px 10px;
    font-size: 14px;
    border-radius: 25px;
  }
`;

export const FileIconBtn = styled.div`
  width: 62px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #af50bd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1 all ease-in-out;
  &:hover {
    background-color: #af50bd30;
  }
  &:active {
    transform: translate(3px, 3px);
  }
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
