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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  /* grid-template-columns: repeat(4, 1fr); */
  /* gap: 8px; */
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
  width: 100%;
  /* max-width: 1440px; */
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

const Logo = styled.div<{ $logo: string }>`
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

const Another = styled.div`
  display: flex;
  height: 62px;
  padding: 21px 24px;
  align-items: center;
  gap: 10px;
  position: relative;
  z-index: 2;
  display: flex;
  border: 3px solid #5d3068;
  background: #111012;
  border-radius: 10000px;
  color: white;
`;

const StyleButtonGroup = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 16px;
  padding: 21px 24px;
  background: #111012;
  border-radius: 10000px;
  color: white;
  color: var(--text-secondary, #93989c);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 112.5% */
  letter-spacing: -0.098px;
  border-radius: 1000px;
  border: 3px solid #5d3068;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(30px);
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
      0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
  }
`;

const SearchSign = styled.svg`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2.778px 2.458px 2px 2.778px;
  justify-content: center;
  align-items: center;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const CircularAvatar = styled.div`
  display: flex;
  width: 63px;
  height: 63px;
  padding: 25px;
  align-items: center;
  /* gap: 10px; */
  border-radius: 50%;
  background: linear-gradient(
    98deg,
    #f8d46b 1.78%,
    #a74fbe 37.37%,
    #302072 89.89%
  );
`;

const Header = ({ isProfilePage }: { isProfilePage?: boolean }) => {
  const [barVisible, setBarVisible] = useState(true);
  const [visible, setVisible] = useState(true);
  const { width, height } = useWindowSize();

  const onBtnClick = () => {
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
              {isProfilePage === true && width > 1200 ? (
                <Another>
                  <StyleChinIcon src={polygon} /> MATIC
                </Another>
              ) : (
                <StyleChinIcon src={polygon} />
              )}

              <StyleChinIcon src={zeta} />
              <StyleChinIcon src={frame} />
              <StyleChinIcon src={btc} />
            </ImgBox>
          </StyleChainGroup>
          <StyleMainGroup>
            <Tab />
            {!(isProfilePage && width > 1280) ? (
              <GradientButton
                width={257}
                height={63}
                title="CONNECT WALLET"
                icon="Wallet"
              />
            ) : (
              <>
                <StyleButtonGroup>
                  <SearchSign
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <g id="Search">
                      <circle
                        id="Ellipse_739"
                        cx="10.7659"
                        cy="10.2666"
                        r="8.98856"
                        stroke="#93989C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        id="Line_181"
                        d="M17.0195 16.9851L20.5436 20.5"
                        stroke="#93989C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </SearchSign>
                  Search
                </StyleButtonGroup>
                <Profile>
                  <CircularAvatar /> A743J43...HGY
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M17 12.5L15.2527 14.263C13.8592 15.6689 13.1625 16.3719 12.3133 16.4801C12.1053 16.5066 11.8947 16.5066 11.6867 16.4801C10.8375 16.3719 10.1408 15.6689 8.74731 14.263L7 12.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Profile>
              </>
            )}
          </StyleMainGroup>
        </>
      )}
      {/* </Container> */}
    </StyleRightHead>
  );
};

export default Header;
