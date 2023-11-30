import styled from "styled-components";

const CardContainer = styled.div`
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
  //
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
`;

const Avatar = styled.div`
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  width: 400px;
  height: 400px;
  flex-shrink: 0;
  position: relative;
`;

const Status = styled.div`
  width: 400px;
  height: 92px;
  flex-shrink: 0;
  border-radius: 0px 0px 24px 24px;
  background: rgba(17, 16, 18, 0.6);
  backdrop-filter: blur(4px);
  position: absolute;
  bottom: 0;
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

export const NftCard2 = ({
  items,
  floorPrice,
  volume,
}: {
  items: number;
  floorPrice: number;
  volume: number;
  avatar: string;
}) => {
  return (
    <CardContainer>
      <ContentBox>
        <Avatar>
          <Status>
            <Text>
              <UpperText></UpperText> <Value>{items}</Value>
            </Text>
            <Text>
              <UpperText></UpperText>
              <Value>{floorPrice}</Value>
            </Text>
            <Text>
              <UpperText></UpperText>
              <Value>{volume}</Value>
            </Text>
          </Status>
        </Avatar>
      </ContentBox>
    </CardContainer>
  );
};
