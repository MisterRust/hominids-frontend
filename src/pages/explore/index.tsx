import Header from "components/layout/header";
import styled from "styled-components";
import { ControlButton } from "components/buttons";
import { H6, H1 } from "styles";
import { NftCard } from "components/cards";
import nftImg from "../../assets/cards/nft_avatar.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AVATARS = [1, 2, 3, 4, 5, 6, 7];
const Page = styled.div`
  padding: 110px 0;
`;

const FullWidthDiv = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 1500px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 90%;
  margin: 50px 5%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  overflow: hidden;
`;

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
          <H1 $color="white" $weight={900}>
            EXPLORE OUR MARKETPLACE
          </H1>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200}>
            Explore Trending Collections
          </H6>
          <ControlButton currInd={3} total={19} />
        </Container>
      </FullWidthDiv>
      {/* <Swiper slidesPerView={'auto'} spaceBetween={36} className="mySwiper">
        {collections.map((collection, key) => (
          <SwiperSlide key={key}>
            <CollectionItem
              collection={{
                id: collection.collection_address,
                name: collection.name,
                image: collection.logo,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <NftBox>
        <Swiper slidesPerView={'auto'} spaceBetween={36} className="mySwiper" slidesPerView={3}>
          {AVATARS.map((avatar, key) => {
            return (
            <SwiperSlide key={key}>
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
      </NftBox>
      
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <H1 $color="white" $weight={900}>
            LATEST DROPS
          </H1>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200}>
            Explore Latest Drops
          </H6>
          <ControlButton currInd={3} total={19} />
        </Container>
      </FullWidthDiv>
      <NftBox>
        {AVATARS.map((avatar) => {
          return (
            <NftCard
              key={avatar}
              items={1483}
              floorPrice={1672}
              volume={2000}
              avatar={nftImg}
            />
          );
        })}
      </NftBox>
      <Space $height={50} />
      <FullWidthDiv>
        <Container>
          <H1 $color="white" $weight={900}>
            GAMING COLLECTION
          </H1>
        </Container>
      </FullWidthDiv>
      <Space $height={30} />
      <FullWidthDiv>
        <Container>
          <H6 $color="white" $weight={200}>
            Explore Gaming Collections
          </H6>
          <ControlButton currInd={3} total={19} />
        </Container>
      </FullWidthDiv>
      <NftBox>
        {AVATARS.map((avatar) => {
          return (
            <NftCard
              key={avatar}
              items={1483}
              floorPrice={1672}
              volume={2000}
              avatar={nftImg}
            />
          );
        })}
      </NftBox>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        className="mySwiper"
        style={{color: 'white'}}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Page>
  );
};

export default Explore;
