import { styled } from "styled-components";

interface CircleEffectProps {
  $width: number;
  $height: number;
  $color: string;
  $rotate?: string;
  $skewX?: number;
  $skewY?: number;
  $opacity: string;
  $filter: number;
}

interface MainProps {
  $top?: number;
  $left?: number;
  $right?: number;
  $bottom?: number;
}

const StyleCircleEffect = styled.div<CircleEffectProps>`
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  position: relative;
  rotate: ${(props) => props.$rotate}deg;
  z-index: -1;

  &:before {
    top: ${(props) => props.$filter / 2}px;
    left: ${(props) => props.$filter / 2}px;
    bottom: ${(props) => props.$filter / 2}px;
    right: ${(props) => props.$filter / 2}px;
    position: absolute;
    content: "";
    background-color: ${(props) => props.$color};
    border-radius: 50%;
    filter: blur(${(props) => props.$filter}px);
    transform: ${(props) =>
      props.$skewX
        ? `skewX(${props.$skewX}deg);`
        : props.$skewY && `skewY(${props.$skewY}deg)`};
  }
`;

const StyleMain = styled.div<MainProps>`
  top: ${(props) => props.$top && `${props.$top}px;`};
  left: ${(props) => props.$left && `${props.$left}px;`};
  right: ${(props) => props.$right && `${props.$right}px;`};
  bottom: ${(props) => props.$bottom && `${props.$bottom}px;`};
  position: relative;
`;

export const CircleEffect = ({
  top,
  left,
  right,
  bottom,
  width,
  height,
  color,
  rotate,
  skewX,
  skewY,
  opacity,
  filter,
}: {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width: number;
  height: number;
  color: string;
  rotate?: string;
  skewX?: number;
  skewY?: number;
  opacity: string;
  filter: number;
}) => {
  return (
    <StyleMain $top={top} $left={left} $right={right} $bottom={bottom}>
      <StyleCircleEffect
        $width={width}
        $height={height}
        $color={color}
        $opacity={opacity}
        $filter={filter}
        $rotate={rotate}
        $skewX={skewX}
        $skewY={skewY}
      />
    </StyleMain>
  );
};
