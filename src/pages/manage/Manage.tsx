import { useState } from "react";
import {
  Active,
  ActiveBtn,
  Bitget,
  BgScreen,
  BtnBox,
  Coinbase,
  CloseBtn,
  Container,
  Description,
  DivFull,
  OKX,
  Flex_SB,
  FullDiv,
  H_31,
  H_40,
  IndBtn,
  Line,
  LinkBtn,
  MenuBox,
  MenuItem,
  Meta,
  ModalContainer,
  Space,
  SpanText,
  TitleBox,
} from "./index.style";
import Header from "components/layout/header";

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="2"
    viewBox="0 0 40 2"
    fill="none"
  >
    <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
    <defs>
      <linearGradient
        id="paint0_linear_644_287"
        x1="0"
        y1="0.5"
        x2="40"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111012" />
        <stop offset="0.395833" stopColor="#AF50BD" />
        <stop offset="0.583333" stopColor="#AF50BD" />
        <stop offset="1" stopColor="#121013" />
      </linearGradient>
    </defs>
  </svg>
);

const closeSign = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M18 6.5L6 18.5"
      stroke="#6A467E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6.5L18 18.5"
      stroke="#6A467E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Btns = [
  { img: <Meta />, text: "Metamask" },
  { img: <Coinbase />, text: "Metamask" },
  { img: <OKX />, text: "Metamask" },
  { img: <Bitget />, text: "Metamask" },
];

export default function Manage() {
  const [isModalVisible, setModalVisible] = useState(false);

  const onBgClick = () => {
    setModalVisible(false);
  };

  const onModalClick = (e: { stopPropagation: () => void; }) => {
    e.stopPropagation();
  };

  const onClickOpen = () => {
    setModalVisible(true);
  };
  return (
    <>
      <FullDiv>
        <Container>
          <Space $height={100} $mdH={50} />
          <Header isProfilePage={true} />
          <Space $height={50} $mdH={30} />
          <MenuBox>
            <MenuItem>MAIN</MenuItem>
            {Svg}
            <MenuItem>MANAGE WALLETS</MenuItem>
          </MenuBox>
          <Space $height={50} $mdH={30} />
          <Flex_SB>
            <H_40>MANAGE WALLETS</H_40>
            <Space $height={200} $mdH={150} />
            <DivFull>
              <LinkBtn onClick={onClickOpen}>Link wallet</LinkBtn>
            </DivFull>
          </Flex_SB>
        </Container>
      </FullDiv>
      {isModalVisible && (
        <FullDiv onClick={onBgClick}>
          <BgScreen>
            <ModalContainer onClick={onModalClick}>
              <TitleBox>
                <H_31>Connect a wallet to continue</H_31>
                <CloseBtn onClick={() => setModalVisible(false)}>
                  {closeSign}
                </CloseBtn>
              </TitleBox>
              <Line />
              <Description>
                Choose how you want to connect. If you don't have a wallet, you
                can select a provider and create one
              </Description>
              <BtnBox>
                {Btns.map((btn, ind) => {
                  return (
                    <IndBtn key={ind}>
                      {btn.img}
                      <SpanText>{btn.text}</SpanText>
                      <ActiveBtn>
                        <Active />
                      </ActiveBtn>
                    </IndBtn>
                  );
                })}
              </BtnBox>
            </ModalContainer>
          </BgScreen>
        </FullDiv>
      )}
    </>
  );
}
