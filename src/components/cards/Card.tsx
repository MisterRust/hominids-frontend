import styled from "styled-components";
import { H4, H6 } from "styles";

// Declared first to be used in next component
const CardImage = styled.img`
  width: 100%;
  height: 400px;
  flex-shrink: 0;
  transition: all 0.2s ease-in-out;
  @media (max-width: 768px) {
    width: 270pxpx;
    height: 265px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  height: 604px;
  max-width: 454px;
  padding: 28px;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  &:hover {
    ${CardImage} {
      transform: scale(1.05);
    }
  }
  @media (max-width: 768px) {
    padding: 16px;
    width: 297px;
    height: 410px;
  }
`;

const Status = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 265px;
    padding-left: 10px;
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

const TimeRemained = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 24px;
  @media (max-width: 768px) {
    height: 265px;
    width: 100%;
  }
`;

const ToolBox = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 265px;
  }
`;

const CurrentStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MintButton = styled.div`
  display: flex;
  height: 59px;
  padding: 25px 40px;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #af50bd;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #af50bd50;
  }
  &:active {
    background-color: #af50bd;
    transform: translate(5px, 5px);
  }
  @media (max-width: 768px) {
    height: 43px;
    width: 150px;
    padding: 12px 32px;
  }
`;

export const Card = ({
  userImg,
  cardBgImg,
  name,
  timeRemained,
  mint,
}: {
  userImg?: string;
  cardBgImg: string;
  name: string;
  timeRemained: string;
  mint?: number;
}) => {
  return (
    <CardContainer>
      <Status>
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
        <TimeRemained>
          <H6 $color="#9D9999" $weight={400}>
            Remaining time
          </H6>
          <H6 $color="#AF50BD" $weight={400}>
            {timeRemained}
          </H6>
        </TimeRemained>
      </Status>
      <ImageBox>
        <CardImage src={cardBgImg} />
      </ImageBox>
      <ToolBox>
        <CurrentStatus>
          <H6 $color="#9D9999" $weight={400}>
            Currnet mint
          </H6>
          <H4 $color="#AF50BD" $weight={900}>
            {mint} SUI
          </H4>
        </CurrentStatus>
        <MintButton>mint now</MintButton>
      </ToolBox>
    </CardContainer>
  );
};
