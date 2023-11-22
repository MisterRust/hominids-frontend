import styled from "styled-components";
import { H4, H6 } from "styles";

// Declared first to be used in next component
const CardImage = styled.img`
  width: 100%;
  height: 292px;
  border-radius: 24px;
  /* flex-shrink: 0; */
  /* transition: all 0.2s ease-in-out; */
  /* @media (max-width: 768px) {
    width: 270px;
    height: 265px;
  } */
`;

const CardContainer = styled.div`
  display: flex;
  width: 24%;
  /* max-width: 454px; */
  padding: 28px;
  flex-direction: column;
  align-items: left;
  /* gap: 20px; */
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  justify-content: left;
  /* &:hover {
    ${CardImage} {
      transform: scale(1.05);
    }
  } */
  @media (max-width: 1234px) {
    padding: 16px;
    width: 32%;
    /* height: 410px; */
  }
  @media (max-width: 895px) {
    padding: 16px;
    width: 48.5%;
    /* height: 410px; */
  }
  @media (max-width: 660px) {
    padding: 16px;
    width: 100%;
    /* height: 410px; */
  }
`;

const ImageBox = styled.div`
  /* width: 100%; */
  /* height: 400px; */
  /* overflow: hidden; */
  border-radius: 24px;
  margin: auto;
  /* @media (max-width: 768px) {
    height: 265px;
    width: 100%;
  } */
`;

const ToolBox = styled.div`
  display: flex;
  /* width: 400px; */
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    /* width: 265px; */
  justify-content: space-around;
  width: 100%;

  }
`;

const CurrentStatus = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
`;

const MintButton = styled.div`
  display: flex;
  padding: 16px 24px;
  /* justify-content: sp; */
  align-items: center;
  gap: 10px;
  border-radius: 100px;
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
  border: #af50bd 1px solid;
  border-radius: 40px;

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

const CardName = styled.h1`
    color: white;
    font-size: 24px;
    font-family: Lato;
    font-weight: 500;
    text-align: center;
    width: 100%;
`

export const MintCard = ({
  cardBgImg,
  cardname,
  sui
}: {
  cardBgImg: string;
  cardname: string;
  sui: number
}) => {
  return (
    <CardContainer>
      <ImageBox>
        <CardImage src={cardBgImg} />
      </ImageBox>
      <CardName>{ cardname }</CardName>
      <ToolBox>
        <MintButton>
            <img src="/images/icons/Group1321314091.svg" alt="" style={{width: '22x', height:'22px'}} />
            <span></span>Mint
        </MintButton>
        <CurrentStatus>
          <H6 $color="#9D9999" $weight={400}>
            Currnet mint
          </H6>
          <H4 $color="#AF50BD" $weight={900}>
            {sui} SUI
          </H4>
        </CurrentStatus>
      </ToolBox>
    </CardContainer>
  );
};
