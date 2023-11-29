import styled from "styled-components";
import azeta from "../../assets/wallet/azeta.png";
import usdt from "../../assets/wallet/usdt.png";

export const FullDiv = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  position: relative;
  max-width: 1120px;
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

export const CardBox_row = styled.div`
  padding: 40px 80px;
  border-radius: 56px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  display: flex;
  justify-content: space-between;
  @media (max-width: 870px) {
    flex-direction: column;
  }
  @media (max-width: 560px) {
    padding: 40px 30px;
  }
`;

export const CardBox = styled.div`
  padding: 20px 80px;
  border-radius: 56px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  position: relative;
  @media (max-width: 560px) {
    padding: 30px 15px;
  }
`;

export const UpperT = styled.div`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  margin-bottom: 15px;
  @media (max-width: 870px) {
    gap: 20px;
  }
  @media (max-width: 560px) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const H_64 = styled.div`
  color: #fff;
  font-family: Black Han Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  @media (max-width: 560px) {
    font-size: 40px;
  }
`;

export const H_24 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 36px */
  @media (max-width: 870px) {
    text-align: center;
  }
`;

export const H_24_1 = styled(H_24)`
  text-align: end;
  @media (max-width: 870px) {
    text-align: center;
    margin-top: 20px;
  }
`;

export const PlusBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;
export const PlusBtn = styled.div`
  display: inline-flex;
  padding: 5px 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  @media (max-width: 560px) {
    padding: 5px 30px;
  }
`;

export const Azeta = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${azeta});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 15px;
  border-radius: 50%;
  @media (max-width: 870px) {
    width: 24px;
    height: 24px;
  }
`;

export const Usdt = styled(Azeta)`
  background-image: url(${usdt});
`;

export const Usdt_left = styled(Usdt)`
  margin-left: -35px;
`;

export const PlusSignBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 5;
  @media (max-width: 1080px) {
    justify-content: center;
  }
`;

export const PlusSign = styled.div`
  display: flex;
  width: 59.531px;
  height: 59px;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: white;
  border-radius: 12px;
  background: #af51bd;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #af51bd50;
  }
  &:active {
    transform: translate(3px, 3px);
  }
`;

export const SvgHor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 5;
  @media (max-width: 1080px) {
    display: none;
  }
`;

export const SvgVertical = styled(SvgHor)`
  @media (min-width: 1080px) {
    display: none;
  }
  @media (max-width: 1080px) {
    display: block;
    text-align: center;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const DownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SelectBox = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  /* width: 617px; */
  height: 59px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  flex-grow: 5;
  align-items: center;
  padding-left: 10px;
`;

export const SelectBox_txt = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const SpanGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H_18 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  @media (max-width: 560px) {
    text-align: center;
  }
`;

export const H_18_1 = styled(H_18)`
  text-align: end;
  @media (max-width: 870px) {
    text-align: center;
  }
`;
export const H_64_mag = styled.div`
  color: #5d3068;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 96px */
  @media (max-width: 560px) {
    display: none;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  gap: 4px;
  @media (max-width: 560px) {
    justify-content: center;
  }
`;

export const Percent = styled.div`
  display: flex;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 22.68px */
  @media (max-width: 870px) {
    font-size: 12px;
    padding: 4px 12px;
  }
`;

export const Down = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;

export const RectBtns = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  border: 4px solid #5d3068;
  flex-grow: 6;
`;

export const Btn_amount = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #af50bd;
  backdrop-filter: blur(5px);
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #af51bd50;
  }
  &:active {
    transform: translate(3px, 3px);
  }
`;

export const MidBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 10;
  display: flex;
  width: 59px;
  height: 59px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 1000px;
  border: 3px solid #615671;
  background: #af51bd;
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #af51bd50;
  }
  &:active {
    background-color: #af51bd90;
  }
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 5;
  gap: 20px;
`;
export const RightPart = styled(LeftPart)``;
