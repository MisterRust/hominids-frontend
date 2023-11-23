import FancyGoo from "components/svg/Fancy-Goo";
import { styled } from "styled-components";

const StyleMain = styled.div`
  filter: url("#fancy-goo");
  width: 100%;
  height: 100%;
  opacity: 0.1;
  position: absolute;
  z-index: 1;
`;

const StyleBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-clip-path: polygon(
    0 0,
    20% 0,
    25% 125px,
    100% 125px,
    100% calc(100% - 95px),
    530px calc(100% - 95px),
    450px 100%,
    350px 100%,
    350px calc(100% - 95px),
    70px calc(100% - 95px),
    70px 100%,
    0 100%
  );
  clip-path: polygon(
    0 0,
    20% 0,
    25% 125px,
    100% 125px,
    100% calc(100% - 95px),
    530px calc(100% - 95px),
    450px 100%,
    350px 100%,
    350px calc(100% - 95px),
    70px calc(100% - 95px),
    70px 100%,
    0 100%
  );
  background: #b880ff;
  backdrop-filter: blur(30px);
`;

export const Background = () => {
  return (
    <StyleMain>
      <StyleBackground />
      <FancyGoo />
    </StyleMain>
  );
};
