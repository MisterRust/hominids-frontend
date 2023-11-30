import { useWindowSize } from "hooks/useWindowSizes";
import styled from "styled-components";
import avatar from "../../assets/cards/card_avatar.png";
import { useEffect, useRef, useState } from "react";
import { Space } from "pages/minting-wfc/index.styled";

const Avatar = styled.div<{ $height: number }>`
  width: 100%;
  flex-shrink: 0;
  height: ${(props) => props.$height}px;
  margin-bottom: 28px;
  background-image: url(${avatar});
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 27px;
  height: ${(props) => props.$height}px;
  transition: 0.1s all ease-in-out;
`;

const BtnContainer = styled.div`
  margin: 15px;
  display: inline-flex;
  padding: 28px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 40px;
  border: 3px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
    0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  backdrop-filter: blur(30px);
  @media (max-width: 768px) {
    padding: 18px 14px;
    margin: 5px;
  }
  &:hover {
    ${Avatar} {
      transform: scale(1.05);
    }
  }
`;

const ValueBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const H2_normal = styled.div`
  color: #fff;
  font-feature-settings: "ss01" on;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const H2_color = styled.div`
  color: #9d9999;
  font-family: Lato;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const H2_magnet = styled.div`
  color: #af50bd;
  text-align: right;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ProfileBtn = ({
  name,
  floor,
  total,
}: {
  name: string;
  floor: number;
  total: number;
}) => {
  const { width } = useWindowSize();
  const [imgWidth, setImgWidth] = useState(400);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef && imgRef.current) {
      console.log(imgRef, 'imgRef');
      setImgWidth(imgRef.current?.clientWidth);
    }
  }, [width]);

  return (
    <BtnContainer>
      <Avatar $height={imgWidth} ref={imgRef} />
      <H2_normal>Hope by {name}</H2_normal>
      <Space $height={30} />
      <ValueBox>
        <H2_color>Floor</H2_color>
        <H2_magnet>{floor}SUI</H2_magnet>
      </ValueBox>
      <ValueBox>
        <H2_color>Total value</H2_color>
        <H2_magnet>{total}SUI</H2_magnet>
      </ValueBox>
    </BtnContainer>
  );
};
