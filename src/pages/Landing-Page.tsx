import { styled } from "styled-components";
import Lists from "components/list/lists";
import { H1, H4 } from "styles";
import { BackgroundEffect } from "components/background";
import { TabButton } from "components/buttons";
import { Card, NftCard } from "components/cards";
import { LandingpageBanner } from "components/lpbanner";
import { AboutUs } from "components/about_us";
import { StyleMain } from "../components/buttons/Tab-Button";
import { Seller } from "components/sellers";

import nftAvatar from "../assets/cards/nft_avatar.png";
import sellerAvatar from "../assets/cards/user_avatar.png";
import partnerImgArr from "../assets/partners";
import cardImg from "../assets/cards/card_avatar.png";
import userImg from "../assets/cards/user_avatar.png";
import decoImg from "../assets/bg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const BUTTONS = [
  "All",
  "Title",
  "Title",
  "Title",
  "Title",
  "Title",
  "Title",
  "Title",
];

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

const NFTS = [
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
  { items: 1483, floorPrice: 1672, volume: 2000, avatar: nftAvatar },
];

const SELLERS = [
  { number: 1, sellerName: "@daifs", balance: 21887, avatar: sellerAvatar },
  { number: 2, sellerName: "pogg", balance: 21887, avatar: sellerAvatar },
  { number: 3, sellerName: "@daifs", balance: 21887, avatar: sellerAvatar },
  { number: 4, sellerName: "dsvvsd", balance: 21887, avatar: sellerAvatar },
  { number: 5, sellerName: "pogg", balance: 21887, avatar: sellerAvatar },
  { number: 6, sellerName: "@daifs", balance: 21887, avatar: sellerAvatar },
  { number: 7, sellerName: "dsvvsd", balance: 21887, avatar: sellerAvatar },
  { number: 8, sellerName: "pogg", balance: 21887, avatar: sellerAvatar },
  { number: 9, sellerName: "@daifs", balance: 21887, avatar: sellerAvatar },
];

const StyleLanding = styled.div`
  position: relative;
  margin-top: 90px;
  max-width: 1440px;
  margin: auto;
`;

const IntroText = styled.div`
  width: 100%;
  margin: 150px 0 0 0;
`;

const Heading = styled(H1)`
  margin-bottom: 40px;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 26px;
    line-height: 35px;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }
`;

const H6WithMargin = styled(H1)`
  font-size: 24px;
  line-height: 32px;
  /* padding: 0 15%; */
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  /* align-items: flex-start; */
  gap: 16px;
  justify-content: center;
  margin: 60px 0;
  padding: 0 24px;
  flex-wrap: wrap;
  width: 100%;
  overflow-x: auto;
`;

const CardBox = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 0 24px;
  gap: 36px;
  overflow-x: auto;
  @media (max-width: 768px) {
    /* overflow: hidden; */
  }
`;

const AboutContainer = styled.div`
  width: 100%;
  margin: auto;
`;

const AboutUsBox = styled.div`
  margin: 176px auto;
  max-width: 1440px;
  /* padding: 0 30px; */
  @media (max-width: 768px) {
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

const CollectionTextBox = styled.div`
  max-width: 1440px;
  /* padding: 0 30px; */
  display: flex;
  flex-wrap: nowrap;
  margin: auto;
  /* justify-content: space-between; */
  /* margin: 0 auto; */
  width: 100%;
  /* padding: 0 24px; */
  overflow-x: auto;
`;

const Button2Box = styled.div`
  display: flex;
  /* justify-content: space-between; */
  max-width: 562px;
  margin: 0 20px;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  @media (max-width: 768px) {
    display: none;
  }
`;

const LongTabButton = styled(StyleMain)`
  width: 272px;
  margin: 10px;
`;

const NftBox = styled.div`
  margin-top: 100px;
  width: 100%;
  /* padding: 0 24px; */
  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: -140px;
  }
`;

const NftContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  /* margin: 0 auto; */
  max-width: 1440px;
  /* padding: 0 24px; */
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: start;

  }
`;

const SellerContainer = styled.div`
  width: 100%;
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const SellerBox = styled.div`
  max-width: 1500px;
  padding: 0 30px;
  margin: 150px auto;
`;

const Boxs = styled.div`
  display: flex;
  margin-top: 70px;
  @media (max-width: 1180px) {
    flex-direction: column;
  }
`;

const DivBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const Box1 = styled.div`
  height: 576px;
  width: 32%;
  margin-right: 4%;
  display: inline-flex;
  padding: 56px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);

  @media (max-width: 1180px) {
    flex-direction: row;
    width: max-content;
    height: unset;
    width: 100%;
    padding: 15px;
  }
  @media (max-width: 350px) {
    flex-direction: column;
  }
`;
const Box2 = styled.div`
  /* height: 500px; */
  /* display: grid;
  grid-template: 1 2 auto;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  flex-direction: column; */
  width: 64%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 20px;
  border-radius: 15px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 1180px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: unset;
    width: 100%;
    padding: 15px;
    margin-top: 20px;
    justify-content: space-around;
    /* width: max-content; */
  }
  @media (max-width: 768px) {
    /* display: grid; */
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    /* grid-auto-rows: minmax(100px, auto); */
    display: flex;

    padding: 23px;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    border-radius: 17.12px;
    border: 1.284px solid #5d3068;
    background: rgba(184, 128, 255, 0.04);
    box-shadow: 0px 0.856px 1.712px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 29.104px 0px rgba(255, 255, 255, 0.05) inset;
    backdrop-filter: blur(12.84000015258789px);
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  /* padding-right: 120px; */
  margin: 100px 0 100px 0;
  @media (max-width: 1160px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const AnotherH6 = styled(H4)`
  width: 100%;
  padding: 0 10%;
  text-align: center;
`;

const H1HideMargin = styled(H1)`
  margin: 150px 0 60px 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const H1WithMargin = styled(H1)`
  margin: 150px 0 60px 0;
  @media (max-width: 768px) {
    padding: 0 40px;
    line-height: 32px;
    font-size: 30px;
    margin: 30px 0 65px 0;
  }
`;

const H1Another = styled(H1WithMargin)`
  margin: 120px 0 40px 0;
`;

const H4WithMargin = styled(H4)`
  margin-top: 32px;
  font-size: 24px;
  margin-bottom: 64px;
  @media (max-width: 768px) {
    color: #fff;
    text-align: center;
    font-family: Black;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 22.4px */
    padding: 0 40px;
    margin-bottom: 40px;
  }
`;

const PartnersContainer = styled.div`
  max-width: 1144px;
  margin: 0 auto;
  flex-wrap: wrap;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const PartnerLogo = styled.div<{ $img: string }>`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background-image: url(${(props) => props.$img});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const ListsContainer = styled.div`
  width: 100%;
`;

const FullDivBox = styled.div`
  margin-left: 10%;
  width: 80%;
  margin-bottom: 400px;
  @media (max-width: 768px) {
    margin-bottom: 100px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 760px;
  height: 355px;
  flex-shrink: 0;
  border-radius: 50px;
  background: linear-gradient(
      0deg,
      rgba(18, 20, 33, 0.4) 0%,
      rgba(18, 20, 33, 0.4) 100%
    ),
    rgba(255, 255, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(24px);
  padding: 32px 40px;
  @media (max-width: 768px) {
    height: 450px;
    padding: 13px 40px;
  }
`;

const Bg = styled.div`
  width: 100%;
  height: 900px;
  background-image: url(${(props) => decoImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const UpperPart = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const UpperInputBox = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Input = styled.input`
  width: 40%;
  margin: 0 8% 0 2%;
  height: 59px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #fff;
  background: #f9f7f6;
  font-size: 18px;
  width: 92%;
  outline: none;
  padding-left: 15px;
  @media (max-width: 768px) {
    margin: 0 4%;
  }
`;

const LeftInput = styled(Input)`
  margin: 0 2% 0 8%;
  @media (max-width: 768px) {
    margin: 0 4%;
  }
`;

const LeftSpan = styled.span`
  margin-left: 8%;
  font-size: 18px;
  color: #aaa5a5;
  font-family: Lato;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
  @media (max-width: 768px) {
    margin: 0 4%;
  }
`;
const RightSpan = styled(LeftSpan)`
  margin: 0px 2% 0px 2%;
`;

const InputBelow = styled.input`
  width: 92%;
  height: 127px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #fff;
  background: #f9f7f6;
  font-size: 18px;
  margin-left: 4%;
  outline: none;
  padding-left: 15px;
`;

const Span = styled.span`
  margin: 15px 0 8px 4%;
  display: inline-block;
  color: #aaa5a5;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 27px */
`;

const SendButton = styled.div`
  display: flex;
  width: 274px;
  height: 59px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  background: #9e52af;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #9e52af50;
    box-shadow: 0 0 5px #0005;
  }
  &:active {
    background-color: #9e52af80;
    transform: translate(4px, 4px);
  }
`;

const FullBox = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const H4WithWidth = styled.div`
  margin: 20px auto;
  width: 210px;
  color: #aaa5a5;
  text-align: center;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%; /* 15.6px */
`;

export default function LandingPage() {
  return (
    <StyleLanding>
      {/* <BackgroundEffect /> */}
      <LandingpageBanner />

      <IntroText>
        <Heading $color="white" $weight={900} $style={"Black"} $align="center">
          Explore our&nbsp;marketplace
        </Heading>
        <H6WithMargin $color="white" $weight={400} $align="center">
          Works that are currently at the peak of the platform's popularity are
          placed here.
          <br /> Buy art, share this information with your friends
        </H6WithMargin>
      </IntroText>
      <ButtonBox>
        {BUTTONS.map((btn, index) => (
          <TabButton key={index} text={btn} hover={true} active={true} />
        ))}
      </ButtonBox>
      <CardBox>
        <Swiper slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
          {CARDS.map((card, index) => (
            <SwiperSlide key={index} style={{ flexShrink: '1' }}>
              <Card
                key={index}
                userImg={card.userImg}
                cardBgImg={card.cardImg}
                mint={card.mint}
                name={card.name}
                timeRemained={card.remained}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardBox>
      <AboutUsBox>
        <AboutUs />
      </AboutUsBox>
      <AboutContainer>
        <CollectionTextBox>
          <Heading $color="white" $weight={400} $style={"Black"}>
            TOP COLLECTIONS
          </Heading>
          <Button2Box>
            <LongTabButton $hover={true} $active={true}>
              Last 24 hours{" "}
              <span style={{ fontSize: 13, marginTop: 8 }}>
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
              </span>
            </LongTabButton>
            <LongTabButton $hover={true} $active={true}>
              All categories
              <span style={{ fontSize: 13, marginTop: 8 }}>
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
              </span>
            </LongTabButton>
          </Button2Box>
        </CollectionTextBox>
      </AboutContainer>
      <NftBox>
        <NftContainer>
        <Swiper slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
          {NFTS.map((nft, index) => (
            <SwiperSlide key={index} style={{ flexShrink: '1' }}>

              <NftCard
                key={index}
                items={nft.items}
                floorPrice={nft.floorPrice}
                volume={nft.volume}
                avatar={nft.avatar}
              ></NftCard>
            </SwiperSlide>
          ))}
          </Swiper>
        </NftContainer>
      </NftBox>
      <SellerContainer>
        <SellerBox>
          <Heading
            $color="white"
            $weight={900}
            $style={"Black"}
            $align="center"
          >
            TOP SELLERS THIS MONTH
          </Heading>
          <Boxs>
            <Box1>
              {SELLERS.slice(0, 3).map((seller, index) => (
                <Seller
                  key={index}
                  number={seller.number}
                  sellerName={seller.sellerName}
                  balance={seller.balance}
                  avatar={seller.avatar}
                ></Seller>
              ))}
            </Box1>
            <Box2>
              <DivBox>
                {SELLERS.slice(3, 6).map((seller, index) => (
                  <Seller
                    key={index}
                    number={seller.number}
                    sellerName={seller.sellerName}
                    balance={seller.balance}
                    avatar={seller.avatar}
                  ></Seller>
                ))}
              </DivBox>
              <DivBox>
                {SELLERS.slice(6).map((seller, index) => (
                  <Seller
                    key={index}
                    number={seller.number}
                    sellerName={seller.sellerName}
                    balance={seller.balance}
                    avatar={seller.avatar}
                  ></Seller>
                ))}
              </DivBox>
            </Box2>
          </Boxs>
          <Texts>
            <Heading
              $color="white"
              $style="Black"
              $weight={500}
              $align="center"
            >
              LATEST&nbsp;SALES
            </Heading>
            <AnotherH6 $color="white" $weight={900}>
              Hurry up to participate in the sale of hominids and buy unique
              NFTs at the hottest prices
            </AnotherH6>
          </Texts>
        </SellerBox>
        <CardBox>
          <Swiper slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
            {CARDS.map((card, index) => (
              <SwiperSlide key={index} style={{ flexShrink: '1' }}>
                <Card
                  userImg={card.userImg}
                  cardBgImg={card.cardImg}
                  mint={card.mint}
                  name={card.name}
                  timeRemained={card.remained}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          </CardBox>
          <H1HideMargin $color="white" $weight={900} $align="center">
            Our Partners
          </H1HideMargin>
      </SellerContainer>
      <Container>
        <PartnersContainer>
          {partnerImgArr.map((img, index) => (
            <PartnerLogo key={index} $img={img} />
          ))}
        </PartnersContainer>
      </Container>
      <H1WithMargin $color="white" $weight={900} $align="center">
        HOW IT WORKS?
      </H1WithMargin>
      <ListsContainer>
        <Lists />
      </ListsContainer>
      <H1Another $color="white" $weight={900} $align="center">
        Do you want to contact us?
      </H1Another>
      <H4WithMargin $color="white" $weight={500} $align="center">
        We will gladly consider your cooperation proposals
      </H4WithMargin>
      <FullDivBox>
        <InputContainer>
          <Bg />
          <UpperPart>
            <UpperInputBox>
              <LeftSpan> Enter your name:</LeftSpan>
              <LeftInput placeholder="Your name" />
            </UpperInputBox>
            <UpperInputBox>
              <RightSpan>Enter your e-mail:</RightSpan>
              <Input placeholder="Your e-mail" />
            </UpperInputBox>
          </UpperPart>
          <Span>You can leave a comment</Span>
          <InputBelow placeholder="Your comment" />
          <FullBox>
            <SendButton>Send request</SendButton>
          </FullBox>
          <FullDivBox>
            <H4WithWidth>
              By clicking the button, I consent to the processing of personal
              data
            </H4WithWidth>
          </FullDivBox>
        </InputContainer>
      </FullDivBox>
    </StyleLanding>
  );
}
