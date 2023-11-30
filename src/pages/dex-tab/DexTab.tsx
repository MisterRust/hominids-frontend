import { useState } from "react";
import Header from "components/layout/header";
import {
  Container,
  FullDiv,
  ListContainer,
  OptionBtn,
  Price,
  Space,
  List,
  StatusContainer,
  UpperTxt,
  TimeContainer,
  Time,
  ValueContainer,
  Value,
  GraphContainer,
  Yaxis,
  YVal,
  Graphs,
  Tag,
  XVal,
  YVal_bg,
  UpperT,
  Txt,
  CardBox,
  SwapBox,
  SwapInput,
  H_18,
  InputBox,
  Meta,
  MetaSign,
  Coin,
  BuyBtn,
  SwitchBtn,
  Ball,
  ConnectBtn,
  BalanceBox,
  FlexBox,
  Percent,
  SwapInput_S,
  DownText,
  SpanBox,
  H_16_input,
} from "./index.style";
import { MenuBox, MenuItem } from "pages/minting-wfc/index.styled";
import { Line1, Line2, Line3, Line4, Line5, Line6, Line7 } from "./svg";
import { Line } from "pages/farm/index.style";

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="2"
    viewBox="0 0 40 2"
    fill="none"
  >
    <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
    <defs>
      <linearGradient
        id="paint0_linear_644_287"
        x1="0"
        y1="0.5"
        x2="40"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111012" />
        <stop offset="0.395833" stopColor="#AF50BD" />
        <stop offset="0.583333" stopColor="#AF50BD" />
        <stop offset="1" stopColor="#121013" />
      </linearGradient>
    </defs>
  </svg>
);

const downArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M17 12L15.2527 13.763C13.8592 15.1689 13.1625 15.8719 12.3133 15.9801C12.1053 16.0066 11.8947 16.0066 11.6867 15.9801C10.8375 15.8719 10.1408 15.1689 8.74731 13.763L7 12"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Lists = [
  { text: "Last Traded Price", price: "0.012843 USDP" },
  { text: "24h Volume", price: "0.012843 USDP" },
  { text: "24h High", price: "0.01591" },
  { text: "24h Low", price: "0.01581" },
];

export default function DexTab() {
  const [on, setOn] = useState(false);
  return (
    <>
      <FullDiv>
        <Container>
          <Space $height={100} $mdH={50} />
          <Header isProfilePage={true} />
          <Space $height={50} $mdH={30} />
          <MenuBox>
            <MenuItem>MAIN</MenuItem>
            {Svg}
            <MenuItem>FARM</MenuItem>
          </MenuBox>
          <Space $height={80} $mdH={30} />
          <StatusContainer>
            <OptionBtn>USDT/USDP {downArrow}</OptionBtn>
            <ListContainer>
              {Lists.map((list, ind) => {
                return (
                  <List key={ind}>
                    <UpperTxt>{list.text}</UpperTxt>
                    <Price>{list.price}</Price>
                  </List>
                );
              })}
            </ListContainer>
          </StatusContainer>
          <Space $height={40} $mdH={30} />
          <TimeContainer>
            <Time>Time: 2024-10-21 19:29</Time>
            <Time>Open: 0.0158</Time>
            <Time>High: 0.0158</Time>
            <Time>Low: 0.0158</Time>
            <Time>Close: 0.0158</Time>
            <Time>Volume: n/a</Time>
          </TimeContainer>
          <Space $height={25} $mdH={10} />
          <ValueContainer>
            <Value $color="#6F7989">MA(5, 10, 30, 60)</Value>
            <Value $color="#BD7111">MA5: 0.0158</Value>
            <Value $color="#935EBD">MA10: 0.0158</Value>
            <Value $color="#1677FF">MA30:0.0160</Value>
            <Value $color="#DA1D72">MA60:0.0161</Value>
          </ValueContainer>

          <GraphContainer>
            <Graphs>
              {Line1}
              {Line2}
              {Line3}
              {Line4}
              {Line5}
              {Line6}
              {Line7}
            </Graphs>
            <Yaxis>
              <YVal>0.0166</YVal>
              <YVal>0.0164</YVal>
              <YVal>0.0162</YVal>
              <YVal>0.0160</YVal>
              <YVal_bg>0.0158</YVal_bg>
            </Yaxis>
          </GraphContainer>
          <Tag>
            <XVal>10-08</XVal>
            <XVal>11-08</XVal>
            <XVal>12-08</XVal>
          </Tag>
          <Space $height={50} $mdH={20} />
          <CardBox>
            <UpperT>
              <Txt style={{ color: "white" }}>Swap Now</Txt>
              <Txt>Limit Order</Txt>
              <Txt>DCA Order</Txt>
            </UpperT>
            <Space $height={50} $mdH={20} />
            <SwapBox>
              <SwapInput>
                <H_18>Amount To Swap</H_18>
                <InputBox>
                  <H_16_input placeholder="0.0" />
                  <MetaSign>
                    USDP <Meta />
                  </MetaSign>
                </InputBox>
                <BalanceBox>
                  <H_18>Balance:0</H_18>
                  <FlexBox>
                    <Percent>25%</Percent>
                    <Percent>50%</Percent>
                    <Percent>Max</Percent>
                  </FlexBox>
                </BalanceBox>
              </SwapInput>
              <SwapInput_S>
                <H_18>To</H_18>
                <InputBox>
                  <H_16_input />
                  <MetaSign>
                    USDT <Coin />
                  </MetaSign>
                </InputBox>
              </SwapInput_S>
              <SpanBox>
                <BuyBtn>
                  <SwitchBtn onClick={() => setOn(!on)}>
                    <Ball $on={on} />
                  </SwitchBtn>
                  <H_18>Buy</H_18>
                </BuyBtn>
                <ConnectBtn>Connect Wallet</ConnectBtn>
              </SpanBox>
            </SwapBox>
          </CardBox>
          <Space $height={20} />
          <Line />
          <CardBox>
            <UpperT>
              <Txt>Open Order</Txt>
              <Txt>Open History</Txt>
              <Txt style={{ color: "white" }}>Swap History</Txt>
            </UpperT>
            <Space $height={35} />
            <DownText>
              <H_18>Description</H_18>
              <H_18>From</H_18>
            </DownText>
          </CardBox>
        </Container>
        <Space $height={150} $mdH={50} />
      </FullDiv>
    </>
  );
}
