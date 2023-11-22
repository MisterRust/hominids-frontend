import { styled } from "styled-components";
import { CircleEffect } from "./Circle-Effect";

const StyleEffect = styled.div`
  position: fixed;
  z-index: -1;
`;

export const BackgroundEffect = () => {
  return (
    <StyleEffect>
      <CircleEffect
        top={-13}
        left={132}
        width={626}
        height={696}
        color="#5700C599"
        rotate="88.7"
        opacity="0.2"
        filter={150}
      />
      <CircleEffect
        top={459}
        right={-37}
        height={600}
        width={570}
        rotate="-13.85"
        color="#af50bd"
        opacity="0.3"
        filter={200}
        skewX={-40}
      />
    </StyleEffect>
  );
};
