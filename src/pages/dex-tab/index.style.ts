import styled from "styled-components";
import meta from "../../assets/wallet/meta.png";
import coin from "../../assets/wallet/coin.png";

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

export const StatusContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 70px;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const OptionBtn = styled.div`
  display: inline-flex;
  padding: 16px 48px;
  height: 64px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 40px;
  border: 1px solid #5d3068;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #5d3068;
  }
  &:active {
    background-color: #5d306850;
    transform: translate(4px, 3px);
  }
  /* box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset, 0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
backdrop-filter: blur(30px); */
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  @media (max-width: 870px) {
  }
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
  /* margin-right: 20%; */
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-grow: 5;
`;

export const UpperTxt = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 22.68px */
  @media (max-width: 870px) {
    font-size: 14px;
  }
`;
export const Price = styled.div`
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 40.32px */
  @media (max-width: 870px) {
    font-size: 24px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
`;

export const Time = styled.div`
  color: #5d3068;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  flex-grow: 5;
  @media (max-width: 870px) {
    font-size: 16px;
  }
`;

export const Value = styled.div<{ $color: string }>`
  color: ${(props) => props.$color};
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  flex-grow: 5;
  @media (max-width: 870px) {
    font-size: 14px;
  }
`;

export const ValueContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

export const GraphContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  @media (max-width: 1260px) {
    flex-direction: row-reverse;
  }
`;

export const Yaxis = styled.div`
  display: flex;
  gap: 66px;
  flex-direction: column;
  /* width: 80px; */
  padding: 10px 30px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  @media (max-width: 1260px) {
    border-left: none;
    border-right: 1px solid black;
  }
`;

export const YVal = styled.div`
  /* display: flex; */
  padding: 4px 16px;
  width: 111px;
  /* justify-content: center; */
  /* align-items: center; */
  color: #bd7111;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  border-radius: 40px;
  border: 1px solid #5d3068;
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 870px) {
    font-size: 14px;
    padding: 2px 8px;
    width: 60px;
  }
`;

export const YVal_bg = styled(YVal)`
  color: white;
  background-color: #999;
`;

export const Graphs = styled.div`
  width: 80%;
  border-bottom: 1px solid black;
  position: relative;
`;

export const LineY = styled.div`
  /* margin-left: -24px; */
  width: 14px;
  height: 1px;
  border-bottom: 1px solid black;
  color: black;
`;

export const LineX = styled.div`
  height: 14px;
  width: 1px;
  border-bottom: 1px solid black;
  color: black;
`;

// export const XLength = styled.div`
//   width: 80%;
//   height: 10px;
// `;

export const Tag = styled.div`
  display: flex;
  gap: 120px;
  margin-top: 10px;
  @media (max-width: 1260px) {
    padding-left: 250px;
  }
`;

export const XVal = styled.div`
  color: #848484;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  @media (max-width: 870px) {
    font-size: 14px;
  }
`;

export const CardBox = styled.div`
  padding: 35px;
  border-radius: 36px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  /* backdrop-filter: blur(30px); */
  @media (max-width: 1200px) {
    box-shadow: none;
    border: none;
    background: none;
  }
`;

export const UpperT = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 870px) {
    gap: 20px;
  }
`;

export const Txt = styled.div`
  color: #5d3068;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 126%; /* 30.24px */
  @media (max-width: 1200px) {
    display: flex;
    padding: 12px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 40px;
    border: 1px solid #5d3068;
    background: rgba(18, 16, 19, 0.6);
    cursor: pointer;
    color: white;

    &:hover {
      background-color: #af50bd;
      box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
        0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
      backdrop-filter: blur(30px);
    }
    &:active {
      transform: translate(3px, 3px);
    }
  }
  @media (max-width: 870px) {
    font-size: 16px;
    padding: 6px 15px;
    text-align: center;
  }
`;

export const SwapBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 1200px) {
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
`;

export const SpanBox = styled.div`
  display: flex;
  flex-grow: 6;
  justify-content: space-around;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`;

export const SwapInput = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
`;

export const SwapInput_S = styled(SwapInput)`
  align-self: self-start;
  flex-grow: 10;
`;

export const H_18 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  @media (max-width: 870px) {
    font-size: 12px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* max-width: 386px; */
  padding: 20px 32px;
  align-items: center;
  /* gap: 100px; */
  border-radius: 16px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
`;

export const H_16 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const H_16_input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 20%;
`;

export const MetaSign = styled.div`
  display: inline-flex;
  height: 36px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;
  background: #19151c;
  color: #fff;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: Lato;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 126%; /* 30.24px */
  @media (max-width: 870px) {
    font-size: 18px;
    padding: 10px 15px;
  }
`;

export const Meta = styled.div`
  width: 28px;
  height: 28px;
  background-image: url(${meta});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 15px;
  @media (max-width: 870px) {
    width: 24px;
    height: 24px;
  }
`;

export const Coin = styled(Meta)`
  background-image: url(${coin});
`;

export const BuyBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const SwitchBtn = styled.div`
  width: 81px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.04);
  flex-shrink: 0;
  cursor: pointer;
`;

export const Ball = styled.div<{ $on: boolean }>`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  margin-left: ${(props) => (props.$on ? 40 : 0)}px;
  background-color: ${(props) => (props.$on ? "#af50bd" : "#fff")};
`;

export const ConnectBtn = styled.div`
  display: flex;
  width: 223px;
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
  cursor: pointer;
  &:hover {
    background-color: #af50bd50;
  }
  &:active {
    transform: translate(3px, 3px);
  }
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

export const BalanceBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
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

export const FlexBox = styled.div`
  display: flex;
  gap: 4px;
`;

export const DownText = styled.div`
  display: flex;
  gap: 260px;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: 30px;
  }
`;
