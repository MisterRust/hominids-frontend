import styled from "styled-components";
import logo from "../../assets/cards/hominids_mark.png";

const CardContainer = styled.div`
  margin: 120px 10px 0 10px;
  display: flex;
  width: 456px;
  height: 488px;
  position: relative;
  padding: 0px 28px 28px 28px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  /* overflow: hidden; */
  @media (max-width: 768px) {
    /* width: 297px;
    height: 337px; */
    transform: scale(0.66);
    margin: 0 -60px;
  }
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Avatar = styled.div<{ $avatar: string }>`
  flex-shrink: 0;
  margin-left: 25px;
  width: 400px;
  height: 400px;
  position: relative;
  background-image: url(${(props) => props.$avatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  /* margin-bottom: 150px; */

  /* background: unset url(${(props) =>
    props.$avatar}) no-repeat cover center; */
  /* @media (max-width: 560px) {
    width: 265px;
    height: 250px;
    margin-left: 15px;
  } */
`;

const Status = styled.div`
  width: 400px;
  height: 92px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  flex-shrink: 0;
  border-radius: 0px 0px 20px 20px;
  background: rgba(17, 16, 18, 0.6);
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: 0;
  /* @media (max-width: 560px) {
    width: 265px;
    height: 60px;
    margin-left: 0;
  } */
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const UpperText = styled.div`
  color: #fff;
  font-feature-settings: "ss01" on;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Value = styled.div`
  color: #af50bd;
  text-align: right;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Partition = styled.div`
  margin-top: 20px;
  width: 0px;
  height: 44px;
  flex-shrink: 0;
  strokewidth: 1px;
  stroke: rgba(255, 255, 255, 0);
  width: 40px;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  color: #fff;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  padding: 20px 28px;
`;

const FunctionBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 60px;
  padding: 0 28px;
  margin-bottom: 30px;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 1032.958px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const CreatedBy = styled.div`
  color: #9d9999;
  font-feature-settings: "ss01" on;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled.div`
  color: #fff;
  text-align: right;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
`;

export const NftCard = ({
  items,
  floorPrice,
  volume,
  avatar,
}: {
  items: number;
  floorPrice: number;
  volume: number;
  avatar: string;
}) => {
  return (
    <CardContainer>
      <ContentBox>
        <Avatar $avatar={avatar}>
          <Status>
            <Text>
              <UpperText>Items</UpperText> <Value>{items}</Value>
            </Text>
            <Partition>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="44"
                viewBox="0 0 2 44"
                fill="none"
              >
                <path
                  d="M1.25 0L1.25 44"
                  stroke="url(#paint0_linear_253_537)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_253_537"
                    x1="1.75"
                    y1="-2.18557e-08"
                    x2="1.75"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stopColor="white" stopOpacity="0" />
                    <stop offset="0.395833" stopColor="#AF50BD" />
                    <stop offset="0.583333" stopColor="#AF50BD" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </Partition>
            <Text>
              <UpperText>Floor price</UpperText>
              <Value>{floorPrice}</Value>
            </Text>
            <Partition>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="44"
                viewBox="0 0 2 44"
                fill="none"
              >
                <path
                  d="M1.25 0L1.25 44"
                  stroke="url(#paint0_linear_253_537)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_253_537"
                    x1="1.75"
                    y1="-2.18557e-08"
                    x2="1.75"
                    y2="44"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0001" stopColor="white" stopOpacity="0" />
                    <stop offset="0.395833" stopColor="#AF50BD" />
                    <stop offset="0.583333" stopColor="#AF50BD" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </Partition>
            <Text>
              <UpperText>Volume traded</UpperText>
              <Value>{volume}</Value>
            </Text>
          </Status>
        </Avatar>
        <Description>
          Suigoats is Dynamic collection of 7777&nbsp;NFT and The identity of
          Sui Network
        </Description>
        <FunctionBox>
          <ButtonBox>
            <Logo />
            <TextBox>
              <CreatedBy>Created by</CreatedBy>
              <Name>Hominids</Name>
            </TextBox>
          </ButtonBox>
          <MintButton>MINT NOW</MintButton>
        </FunctionBox>
      </ContentBox>
    </CardContainer>
  );
};
