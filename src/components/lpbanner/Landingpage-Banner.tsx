import { styled } from "styled-components";
import { Background } from "./Background";
import { Content } from "./Content";

const StyleMain = styled.div`
  width: 1440px;
  position: relative;
  z-index: 2;
`;

export const LandingpageBanner = () => {
  return (
    <StyleMain>
      <Background></Background>
      <Content />
    </StyleMain>
  );
};
