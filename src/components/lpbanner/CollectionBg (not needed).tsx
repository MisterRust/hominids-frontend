import FancyGoo from "components/svg/Fancy-Goo";
import { styled } from "styled-components";

export const CollectionBg = ({ reversed }: { reversed: boolean }) => {
  return (
    <StyleMain>
      <CollectionBgStyle $reversed={reversed} />
      <FancyGoo />
    </StyleMain>
  );
};
