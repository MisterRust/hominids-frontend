import { useEffect, useState } from "react";
import styled from "styled-components";

import { useWindowSize } from "hooks/useWindowSizes";
import { Tab } from "../../lpbanner/Tab";
import { GradientButton } from "components/buttons";

import logo from "../../../assets/logo.png";
import btc from "../../../assets/chainicon/btc.png";
import polygon from "../../../assets/chainicon/polygon.png";
import frame from "../../../assets/chainicon/frame.png";
import zeta from "../../../assets/chainicon/zeta.png";

const StyleRightHead = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  padding: 0 50px;
  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;

// const Container = styled.div`
//   max-width: 1500px;
//   padding: 0 30px;
//   margin: 0 auto;
// `;
const StyleChainGroup = styled.div`
  display: flex;
  flex-grow: 1.5;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const StyleChinIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const StyleMainGroup = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BarContainer = styled.div`
  width: 327px;
  height: 56px;
  padding: 5px 20px;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1.496px solid #5d3068;
  background: rgba(184, 128, 255, 0.04);
  backdrop-filter: blur(30px);
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  width: 110px;
  height: 42px;
  flex-shrink: 0;
  background-image: url(${(props) => props.$logo});
  background-size: cover;
  background-repeat: no-repeat;
  margin-right: 30px;
`;

const Button = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translate(3px, 3px);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.1);
  }
`;

const Header = () => {
  const [barVisible, setBarVisible] = useState(true);
  const [visible, setVisible] = useState(true);
  const { width, height } = useWindowSize();

  const onBtnClick = (e) => {
    if (window.innerWidth < 768) {
      setVisible(!visible);
    }
  };

  useEffect(() => {
    if (width >= 768) {
      setBarVisible(false);
      setVisible(true);
    } else {
      setBarVisible(true);
      setVisible(false);
    }
  }, [width, height]);

  return (
    <StyleRightHead>
      {/* <Container> */}
      {barVisible && (
        <BarContainer>
          <Logo $logo={logo} />
          <Button onClick={onBtnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M4 29H44M4 19H44"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </BarContainer>
      )}
      {visible && (
        <>
          <StyleChainGroup>
            {width > 768 && <Logo $logo={logo} />}
            <ImgBox>
              <StyleChinIcon src={polygon} />
              <StyleChinIcon src={frame} />
              <StyleChinIcon src={zeta} />
              <StyleChinIcon src={btc} />
            </ImgBox>
          </StyleChainGroup>
          <StyleMainGroup>
            <Tab />
            <GradientButton
              width={257}
              height={63}
              title="CONNECT WALLET"
              icon="Wallet"
            />
          </StyleMainGroup>
        </>
      )}
      {/* </Container> */}
    </StyleRightHead>
  );
};

export default Header;
