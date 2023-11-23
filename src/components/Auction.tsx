import { useEffect, useState } from "react";
import styled from "styled-components";

import { useWindowSize } from "hooks/useWindowSizes";
import { H2, H6 } from "styles";
import userImg from "../assets/cards/user_avatar.png";
import cardImg from "../assets/cards/card_avatar.png";
import { StyleMain } from "./buttons";

const AuctionContainer = styled.div`
  display: inline-flex;
  width: 100%;
  margin: 0 auto;
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 500px) {
    position: relative;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 29px;
  padding: 46px 40px 46px 65px;
  @media (max-width: 1085px) {
    padding: 40px 80px;
  }
  @media (max-width: 660px) {
    padding: 30px 25px 0 25px;
  }

  @media (max-width: 500px) {
    padding: 20px 0px 0 0;
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

const H6Font = styled(H6)`
  @media (max-width: 600px) {
    font-size: 12px;
    width: 100%;
    text-align: right;
  }
`;

const AuctionImg = styled.div<{ $width?: number }>`
  width: 567px;
  /* height: 567px; */
  flex-shrink: 0;
  border-radius: 24px;
  background-image: url(${cardImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 1085px) {
    width: 100%;
    height: ${(props) => (props.$width ? props.$width - 180 : 500)}px;
  }
  @media (max-width: 660px) {
    height: ${(props) => (props.$width ? props.$width - 100 : 500)}px;
  }
`;

const FullDivFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 28px;
  @media (max-width: 1085px) {
    flex-direction: column;
  }
`;

const MintBox = styled.div`
  width: 100%;
  padding: 35px;
  /* height: 182px; */
  flex-shrink: 0;
  border-radius: 40px;
  background: #492072;
  display: flex;
  justify-content: space-around;
  @media (max-width: 1240px) {
    padding: 30px 15px;
  }
  @media (max-width: 1120px) {
    /* flex-direction: row; */
    /* padding-left: 25%; */
    gap: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Current = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  @media (max-width: 1085px) {
    gap: 0;
  }
`;
const CurrentAnother = styled(Current)`
  @media (max-width: 1120px) {
    flex-direction: row;
    align-items: center;
    gap: 50px;
    /* padding-left: 25%; */
  }
  @media (max-width: 450px) {
    /* justify-content: space-between; */
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
  }
`;

const H2Rsp = styled(H2)`
  @media (max-width: 1240px) {
    font-size: 23px;
  }
  @media (max-width: 1085px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 40px;
    font-weight: 900;
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
  }
`;

const H2Rsp3 = styled(H2Rsp)`
  @media (max-width: 768px) {
    font-size: 40px;
    font-weight: 900;
  }
`;

const H6Rsp = styled(H6)`
  @media (max-width: 500px) {
    padding: 0 15px;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    font-weight: 100;
  }
  @media (max-width: 1085px) {
    line-height: 30px;
    font-weight: 100;
    font-size: 22px;
    font-weight: 800;
    text-align: center;
  }
  @media (max-width: 1085px) {
    font-size: 16px;
    font-weight: 100;
    line-height: 22px;
  }
`;

const H1align = styled(H2)`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1085px) {
    font-size: 20px;
    display: block;
    height: 23px;
    margin-top: -15px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const H6align = styled(H6)`
  display: flex;
  justify-content: space-between;
  line-height: 20px;
`;

const CustomSpan = styled.span`
  margin-right: 20px;
  @media (max-width: 1240px) {
    margin-right: 12px;
  }
`;

const ButtonLong = styled(StyleMain)<{ $hover: boolean; $active: boolean }>`
  width: 100%;
  background-color: #af50bd;
  &:active {
    background-color: #af50bd30;
  }
  @media (max-width: 500px) {
    width: 70%;
    margin-left: 15%;
    text-align: center;
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
    font-size: 18px;
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-around;
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
  const { width } = useWindowSize();
  const [mode, setMode] = useState(1);

  useEffect(() => {
    if (width > 1085) setMode(1);
    else setMode(0);
  }, [width]);

  if (mode === 1)
    return (
      <AuctionContainer>
        <ContentBox>
          <H2 $color="white" $weight={200} $style="Black">
            The Breaker by Kirin Labs
          </H2>
          <FullDivFlex>
            <User>
              <UserAvatar src={userImg}></UserAvatar>
              <NameBox>
                <H6 $color="#9D9999" $weight={400}>
                  Created by
                </H6>
                <H6 $color="#FFF" $weight={400}>
                  {name}
                </H6>
              </NameBox>
            </User>
            <H6 $weight={400} $color="white">
              The Breaker - The time and space disruptor, weaving reality to
              their enigmatic will. Let's welcome… "THE BREAKER" One-of-a-kind
              art, but benefits too?…
            </H6>
          </FullDivFlex>
          <MintBox>
            <Current>
              <H6 $weight={400} $color="#9D9999">
                Current mint
              </H6>
              <H2Rsp $weight={400} $color="#AF50BD">
                {current} SUI
              </H2Rsp>
              <H6 $weight={400} $color="#9D9999">
                ~$736.43
              </H6>
            </Current>
            <Current>
              <H6 $weight={400} $color="#9D9999">
                Auction ended
              </H6>
              <H1align $weight={400} $color="#AF50BD">
                {hour} {min} {sec}
              </H1align>
              <H6align $weight={400} $color="#9D9999">
                <CustomSpan> Hours </CustomSpan>
                <CustomSpan> Minutes </CustomSpan>
                <CustomSpan> Seconds </CustomSpan>
              </H6align>
            </Current>
          </MintBox>
          <H6 $weight={400} $color="white">
            LAST BID BY{" "}
            <span style={{ textDecoration: "underline" }}>{lastBid}</span>{" "}
          </H6>
          <ButtonLong $hover={true} $active={true}>
            PLACE YOUR BID
          </ButtonLong>
        </ContentBox>
        <AuctionImg></AuctionImg>
      </AuctionContainer>
    );
  else
    return (
      <AuctionContainer>
        <ContentBox>
          <FullDivFlex>
            <Group>
              <User>
                <UserAvatar src={userImg}></UserAvatar>
                <NameBox>
                  <H6Font $color="#9D9999" $weight={400}>
                    Created by
                  </H6Font>
                  <H6Font $color="#FFF" $weight={400}>
                    {name}
                  </H6Font>
                </NameBox>
              </User>
              <Current>
                <H6Font $weight={400} $color="#9D9999">
                  Auction ended
                </H6Font>
                <H1align $weight={400} $color="#AF50BD">
                  {hour}H: {min}M: {sec}S
                </H1align>
              </Current>
            </Group>
            <AuctionImg $width={width}></AuctionImg>
            <H2Rsp $color="white" $weight={200} $style="Black">
              The Breaker by Kirin Labs
            </H2Rsp>
            <H6Rsp $weight={400} $color="white">
              The Breaker - The time and space disruptor, weaving reality to
              their enigmatic will. Let's welcome… "THE BREAKER" One-of-a-kind
              art, but benefits too?…
            </H6Rsp>
          </FullDivFlex>
          <MintBox>
            <CurrentAnother>
              <H6 $weight={400} $color="#9D9999" $align="center">
                Current mint
              </H6>
              <H2Rsp3 $weight={400} $color="#AF50BD">
                {current} SUI
              </H2Rsp3>
              <H6 $weight={400} $color="#9D9999">
                ~$736.43
              </H6>
            </CurrentAnother>
          </MintBox>
          <ButtonLong $hover={true} $active={true}>
            PLACE YOUR BID
          </ButtonLong>
        </ContentBox>
      </AuctionContainer>
    );
}
