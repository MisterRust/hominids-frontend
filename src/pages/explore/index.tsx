import React from "react";
import Header from "components/layout/header";
import styled from "styled-components";
import { ControlButton } from "components/buttons";
import { H6, H1 } from "styles";
import { NftCard } from "components/cards";
import nftImg from "../../assets/cards/nft_avatar.png";

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
    </Page>
  );
};

export default Explore;
