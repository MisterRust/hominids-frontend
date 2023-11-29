import {
  AllButton,
  Bitcoin,
  Br,
  Category,
  Container,
  Dollar,
  DollarValue,
  FarmCard,
  Flex_SB,
  FullDiv,
  H_18,
  H_24,
  H_40,
  H_magnet,
  InputSpec,
  Line,
  MenuBox,
  MenuItem,
  Pool,
  Rewards,
  RightDiv,
  SearchInput,
  SignBox,
  Space,
  TextBox,
} from "./index.style";
import Header from "components/layout/header";

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

const Card = (
  <>
    <FarmCard>
      <Pool>
        <SignBox>
          <Bitcoin />
          <Dollar />
        </SignBox>
        <TextBox>
          <H_24>
            <span>WBTC/</span> <span>USDP</span>
          </H_24>
          <H_18>RUBY Farm</H_18>
        </TextBox>
      </Pool>
      <DollarValue>$35.873</DollarValue>
      <Rewards>
        <H_24>1,711</H_24>
        <H_18>Per Day</H_18>
      </Rewards>
      <Rewards>
        <H_24>16.78%</H_24>
        <H_18>Annualised</H_18>
      </Rewards>
    </FarmCard>
  </>
);

export default function Farm() {
  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={50} />
        <Header isProfilePage={true} />
        <Space $height={50} $mdH={30} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>LAUNCHPAD</MenuItem>
        </MenuBox>
        <Space $height={50} $mdH={30} />
        <Flex_SB>
          <H_40>FARM</H_40>
          <RightDiv>
            <SearchInput>
              <svg
                style={{ marginLeft: 30 }}
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="Search">
                  <circle
                    id="Ellipse_739"
                    cx="10.7659"
                    cy="10.7664"
                    r="8.98856"
                    stroke="#93989C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Line_181"
                    d="M17.0195 17.4849L20.5436 20.9997"
                    stroke="#93989C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
              <InputSpec placeholder="Search" />
            </SearchInput>
            <AllButton>
              ALL
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
            </AllButton>
          </RightDiv>
        </Flex_SB>
        <Space $height={80} $mdH={40} />
        <Category>
          <H_magnet>
            <span>Liquidity</span>
            <Br />
            <span>Pool</span>
          </H_magnet>
          <H_magnet>
            <span>Farmed </span> <Br />
            <span> LTV</span>
          </H_magnet>
          <H_magnet>Rewards</H_magnet>
          <H_magnet>APR</H_magnet>
        </Category>
        <Space $height={40} $mdH={0} />
        {Card}
        <Line />
        {Card}
        <Line />
        {Card}
        <Line />
        {Card}
      </Container>
      <Space $height={150} $mdH={40} />
    </FullDiv>
  );
}
