import Header from "components/layout/header";
import { MenuBox, MenuItem } from "pages/minting-wfc/index.styled";
import {
  Azeta,
  Btn_amount,
  CardBox,
  CardBox_row,
  Container,
  Down,
  FlexBox,
  FullDiv,
  Group,
  H_18,
  H_18_1,
  H_24,
  H_24_1,
  H_64,
  H_64_mag,
  LeftPart,
  MidBtn,
  Percent,
  PlusBox,
  PlusBtn,
  PlusSign,
  PlusSignBox,
  RectBtns,
  RightPart,
  SelectBox,
  SelectBox_txt,
  Space,
  SpanGroup,
  SvgHor,
  SvgVertical,
  UpperT,
  Usdt,
  Usdt_left,
} from "./index.style";

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

const horLine = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width="100"
    height="2"
    viewBox="0 0 80 2"
    fill="none"
  >
    <path d="M0 1L80 0.999993" stroke="#935EBD" stroke-dasharray="2 2" />
  </svg>
);

const verLine = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2"
    // height="30"
    viewBox="0 0 2 30"
    fill="none"
  >
    <path d="M1 0L0.999999 30" stroke="#935EBD" stroke-dasharray="2 2" />
  </svg>
);

export default function Liquidity() {
  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={50} />
        <Header isProfilePage={false} />
        <Space $height={50} $mdH={30} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>LIQUIDITY</MenuItem>
        </MenuBox>
        <Space $height={30} $mdH={30} />
        <H_64>LIQUIDITY</H_64>
        <Space $height={80} $mdH={30} />

        <CardBox>
          <UpperT>
            <H_24>Select a Pair</H_24>
          </UpperT>
          <PlusBox>
            <PlusBtn>
              <Azeta />
              <H_24>AZETA</H_24>
              {downArrow}
            </PlusBtn>
            <PlusSignBox>
              <SvgHor>{horLine}</SvgHor>
              <Group>
                <SvgVertical>{verLine}</SvgVertical>
                <PlusSign>+</PlusSign>
                <SvgVertical>{verLine}</SvgVertical>
              </Group>
              <SvgHor>{horLine}</SvgHor>
            </PlusSignBox>
            <PlusBtn>
              <Usdt />
              <H_24>USDT</H_24>
              {downArrow}
            </PlusBtn>
          </PlusBox>
        </CardBox>

        <Space $height={20} />

        <CardBox_row>
          <LeftPart>
            <H_24>Select a pool</H_24>
            <SelectBox>
              <Azeta />
              <Usdt_left />
              <H_24>AZETA-USDT</H_24>
            </SelectBox>
          </LeftPart>
          <RightPart>
            <H_24_1>Total liquidity</H_24_1>
            <SpanGroup>
              <H_18_1>920.75507 AZETA</H_18_1>
              <H_18_1>407.45465 USDT</H_18_1>
            </SpanGroup>
          </RightPart>
          {/* <Space $height={30} /> */}
        </CardBox_row>
        <Space $height={20} />

        <CardBox>
          <UpperT>
            <H_64_mag>0</H_64_mag>
            <PlusBtn>
              <Azeta />
              <H_24>AZETA</H_24>
              {downArrow}
            </PlusBtn>
          </UpperT>
          <Down>
            <FlexBox>
              <Percent>25%</Percent>
              <Percent>50%</Percent>
              <Percent>Max</Percent>
            </FlexBox>
            <H_18>Balance: 0 USDT</H_18>
          </Down>
          <MidBtn>+</MidBtn>
        </CardBox>
        <CardBox>
          <UpperT>
            <H_64_mag>0</H_64_mag>
            <PlusBtn>
              <Usdt />
              <H_24>USDT</H_24>
              {downArrow}
            </PlusBtn>
          </UpperT>
          <Down>
            <FlexBox>
              <Percent>25%</Percent>
              <Percent>50%</Percent>
              <Percent>Max</Percent>
            </FlexBox>
            <H_18>Balance: 0 USDT</H_18>
          </Down>
        </CardBox>
        <Space $height={20} />
        <CardBox>
          <UpperT>
            <SelectBox_txt>
              <Azeta />
              <Usdt_left />
              <H_24>AZETA-USDT LP</H_24>
            </SelectBox_txt>
            <H_24>0</H_24>
          </UpperT>

          <Down>
            <RectBtns>
              <H_24>USDT per AZETA</H_24>
              <H_24>2.44252</H_24>
            </RectBtns>
            <RectBtns>
              <H_24>AZETA perUSDT </H_24>
              <H_24>0.38192</H_24>
            </RectBtns>
            <RectBtns>
              <H_24>Share of Pool</H_24>
              <H_24>0%</H_24>
            </RectBtns>
          </Down>
        </CardBox>
        <Space $height={30} />
        <Btn_amount>Enter an amount</Btn_amount>
      </Container>
      <Space $height={150} $mdH={50} />
    </FullDiv>
  );
}
