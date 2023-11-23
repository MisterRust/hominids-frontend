import Header from "components/layout/header";
import styled from "styled-components";
import { ControlButton } from "components/buttons";
import { H6, H1 } from "styles";
import { NftCard } from "components/cards";
import nftImg from "../../assets/cards/nft_avatar.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AVATARS = [1, 2, 3, 4, 5, 6, 7];
const Page = styled.div`
  padding: 110px 0;
  margin: auto;
  width: 100%;
`;

const FullWidthDiv = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1440px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;

const FlexBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  width: 210px;
  display: flex;
  justify-content: space-between;
`;

const Space = styled.div<{ $height: number }>`
  height: ${(props) => props.$height}px;
  width: 100%;
`;

const NftBox = styled.div`
  /* width: 90%; */
  margin: 50px auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  overflow: auto;
  margin-left: auto;
  margin-right: auto;
`;

const TitleStyle = styled.span`
  font-family: 'Black Han Sans';
  font-size: 64px;
  font-weight: 400;
  line-height: 80px;
  letter-spacing: 0em;
  text-align: left;
  color: white;
  @media (max-width: 768px){
    font-family: 'Lato';
    font-size: 32px;
    font-weight: 900;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: center;
  }
`

const SlideBtn = styled.div`
  @media (max-width: 768px){
    display: none;
  }
`

const Explore = () => {
  return (
    <Page>
      <Header />
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <FlexBox>
            <TextBox>
              <H6 $color="white" $weight={300}>
                MAIN
              </H6>
              <H6 $color="white" $weight={300}>
                EXPLORE
              </H6>
            </TextBox>
          </FlexBox>
        </Container>
      </FullWidthDiv>
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <TitleStyle>
            EXPLORE OUR MARKETPLACE
          </TitleStyle>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200} $align="center">
              Explore Trending Collections
          </H6>
          <SlideBtn>
            <ControlButton currInd={3} total={19} />
          </SlideBtn>
        </Container>
      </FullWidthDiv>
      <Swiper 
          slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
        {AVATARS.map((avatar, key) => {
          return (
          <SwiperSlide key={key} style={{flexShrink:'1'}}>
            <NftCard
              key={avatar}
              items={1483}
              floorPrice={1672}
              volume={2000}
              avatar={nftImg}
            />
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <TitleStyle>
            LATEST DROPS
          </TitleStyle>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200}>
            Explore Latest Drops
          </H6>
          <SlideBtn>
            <ControlButton currInd={3} total={19} />
          </SlideBtn>
        </Container>
      </FullWidthDiv>
      <Swiper 
          slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
        {AVATARS.map((avatar, key) => {
          return (
          <SwiperSlide key={key} style={{flexShrink:'1'}}>
            <NftCard
              key={avatar}
              items={1483}
              floorPrice={1672}
              volume={2000}
              avatar={nftImg}
            />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <TitleStyle>
            GAMING COLLECTION
          </TitleStyle>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200}>
            Explore Gaming Collections
          </H6>
          <SlideBtn>
            <ControlButton currInd={3} total={19} />
          </SlideBtn>
        </Container>
      </FullWidthDiv>
      <Swiper 
          slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
        {AVATARS.map((avatar, key) => {
          return (
          <SwiperSlide key={key} style={{flexShrink:'1'}}>
            <NftCard
              key={avatar}
              items={1483}
              floorPrice={1672}
              volume={2000}
              avatar={nftImg}
            />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Page>
  );
};

export default Explore;
