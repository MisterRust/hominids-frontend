import Header from "components/layout/header";
import styled from "styled-components";
import { H1, H6 } from "styles";
import AuctionBox from "components/Auction";
import { Card } from "components/cards";
import userImg from "../../assets/cards/user_avatar.png";
import cardImg from "../../assets/cards/card_avatar.png";

const CARDS = [
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
  {
    cardImg: cardImg,
    name: "Hominids",
    remained: "12H:23M:02S",
    userImg: userImg,
    mint: 1672,
  },
];

const FullDiv = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: 500px) {
    padding: 0 15px;
  }
`;

const Space = styled.div<{ $height: number; $mdH?: number; $smH?: number }>`
  width: 100%;
  height: ${(props) => props.$height}px;
  @media (max-width: 768px) {
    height: ${(props) => props.$mdH}px;
  }
  @media (max-width: 500px) {
    height: ${(props) => props.$smH}px;
  }
`;

const MenuBox = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 0;
    justify-content: center;
  }
`;
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

const MenuItem = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
`;

const H1Rsp = styled(H1)`
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
    line-height: 39px;
  }
`;

const H4Rsp = styled(H1)`
  display: none;
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    display: block;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserAvatar = styled.img<{ $image?: string }>`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 1032.958px;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const H6Sec = styled(H6)`
  margin-bottom: 30px;
  font-size: 24px;
  line-height: 35px;
  max-width: 506px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 1280px) {
    justify-content: center;
  }
`;

const OverflowBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  margin-bottom: 220px;
  @media (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const CustomDiv = styled.div`
  margin: 0 20px;
`;

export default function Auction({
  name,
  current,
  hour,
  min,
  sec,
  lastBid,
}: {
  name: string;
  current: number;
  hour: string;
  min: string;
  sec: string;
  lastBid: string;
}) {
  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={50} />
        <Header />
        <Space $height={80} $mdH={60} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>MARKETPLACE</MenuItem>
          {Svg}
          <MenuItem>AUCTIONS</MenuItem>
        </MenuBox>
        <Space $height={80} $mdH={30} />
        <H1Rsp $style="Black" $align="center" $weight={500} $color="white">
          AUCTIONS
        </H1Rsp>
        <H4Rsp $style="Black" $align="center" $weight={100} $color="white">
          Explore Trending Collections
        </H4Rsp>
        <Space $height={69} $mdH={40} />
        <AuctionBox
          name={name}
          current={current}
          hour={hour}
          min={min}
          sec={sec}
          lastBid={lastBid}
        />
        <Space $height={120} $mdH={100} />
        <FlexBox>
          <H1Rsp $style="Black" $weight={500} $color="white">
            FINISHED AUCTIONS
          </H1Rsp>
          <H6Sec $align="left" $weight={100} $color="white">
            Hurry up to participate in the sale of hominids and buy unique NFTs
            at the hottest prices
          </H6Sec>
        </FlexBox>
        <Space $height={85} $mdH={25} />
        <OverflowBox>
          {CARDS.map((card, index) => (
            <CustomDiv>
              <Card
                key={index}
                userImg={card.userImg}
                cardBgImg={card.cardImg}
                mint={card.mint}
                name={card.name}
                timeRemained={card.remained}
              />
            </CustomDiv>
          ))}
        </OverflowBox>
      </Container>
    </FullDiv>
  );
}
