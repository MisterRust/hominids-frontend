import { styled } from "styled-components";
import { H6 } from "styles";

const StyleMain = styled.div`
  position: relative;
`;

const StyleGroup = styled.div`
  border-radius: 10000px;
  position: absolute;
  z-index: 2;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;

  background: linear-gradient(-25deg, #5d3068 20%, #c7adff33 50%, #5d3068 80%);
`;

const StyleButtonGroup = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 16px;
  padding: 21px 24px;
  background: #111012;
  border-radius: 10000px;
`;

export const Tab = () => {
  return (
    <StyleMain>
      <StyleGroup />
      <StyleButtonGroup>
        <H6 $weight={400} $color="white">
          EXPLORE
        </H6>
        <H6 $weight={400} $color="white">
          STAKING
        </H6>
        <H6 $weight={400} $color="white">
          SWAP
        </H6>
      </StyleButtonGroup>
    </StyleMain>
  );
};
