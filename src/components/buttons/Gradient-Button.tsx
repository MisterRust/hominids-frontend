/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Icon } from "components/icon";
import { styled } from "styled-components";
import { H6 } from "styles";

interface ButtonProps {
  $width: number;
  $height: number;
  $marginTop?: number;
  $radius?: number;
}

const StyleMain = styled.div<ButtonProps>`
  height: ${(props) => props.$height}px;
  max-width: ${(props) => props.$width}px;
  margin-top: ${(props) => props.$marginTop || 0}px;
  padding: 25px 40px;
  background: linear-gradient(
    98deg,
    #f8d46b 1.78%,
    #a74fbe 37.37%,
    #302072 89.89%
  );
  border-radius: ${(props) => props.$radius || 100}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      15deg,
      #f8d46b 2.78%,
      #a74fbe 65.37%,
      #302072 95.89%
    );
    box-shadow: 5px 5px 3px #a74fbe;
  }
  &:active {
    transform: translate(5px, 5px);
  }
`;

export const GradientButton = ({
  icon,
  title,
  width,
  height,
  marginTop,
  radius
}: {
  icon?: string;
  title: string;
  width: number;
  height: number;
  marginTop?: number;
  radius?: number
}) => {
  return (
    <StyleMain $width={width} $height={height} $marginTop={marginTop} $radius={radius}>
      {icon && (
        <Icon
          //@ts-ignore
          name={icon}
          color="white"
        />
      )}
      <H6 $color="white" $weight={400}>
        {title}
      </H6>
    </StyleMain>
  );
};
