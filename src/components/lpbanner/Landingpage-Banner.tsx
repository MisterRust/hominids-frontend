import { styled } from "styled-components";
// import { Background } from "./Background";
import { Content } from "./Content";

const StyleMain = styled.div`
  max-width: 1440px;
  position: relative;
  z-index: 2;
  margin-left: auto;
  margin-right: auto;
  height: 782px;
  background-image: url('/images/bg/hero_bg.svg');
  background-position: left;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 80px;
  /* padding: 0 24px; */
`;

export const LandingpageBanner = () => {
  return (
    <StyleMain>
      {/* <Background></Background> */}
      <Content />
    </StyleMain>
  );
};
