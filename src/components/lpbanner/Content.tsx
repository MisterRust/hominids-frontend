import { styled } from "styled-components";
import logo from "../../assets/logo.png";
import btc from "../../assets/chainicon/btc.png";
import polygon from "../../assets/chainicon/btc.png";
import frame from "../../assets/chainicon/frame.png";
import zeta from "../../assets/chainicon/zeta.png";
import banner from "../../assets/banner.png";
import { Tab } from "./Tab";
import { GradientButton } from "components/buttons";
import { H1, H2, H4, H5, Span } from "styles";

const StyleMain = styled.div`
  padding-left: 80px;
  position: relative;
  z-index: 2;
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
`;

const StyleHead = styled.div`
  padding: 34px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleRightHead = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const StyleChainGroup = styled.div`
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
`;

const StyleBody = styled.div`
  width: 100%;
  position: relative;
  padding: 105px 0 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyleH3 = styled(H5)`
  width: 500px;
`;

const StyleBannerImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleInfoGroup = styled.div`
  padding: 10px 130px 0 0;
  display: flex;
  align-items: center;
  gap: 80px;
`;

const StyleInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyleBarrier = styled.div`
  height: 80px;
  width: 1px;
  background: linear-gradient(
    180deg,
    #111012 0%,
    #af50bd 40%,
    #af50bd 60%,
    #111012 100%
  );
`;

const StyleLogo = styled.img``;

export const Content = () => {
  return (
    <StyleMain>
      <StyleHead>
        <StyleLogo src={logo}></StyleLogo>
        <StyleRightHead>
          <StyleChainGroup>
            <StyleChinIcon src={polygon} />
            <StyleChinIcon src={frame} />
            <StyleChinIcon src={zeta} />
            <StyleChinIcon src={btc} />
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
        </StyleRightHead>
      </StyleHead>
      <StyleBody>
        <H1 $weight={400} $color="white" $style="Black">
          MINT & Sell
          <br />
          your{" "}
          <Span $color="#AF50BD">
            UNIQUE
            <br />
            NFT
          </Span>{" "}
          ART
        </H1>
        <StyleH3 $weight={400} $color="white" $style="Actay">
          You can quickly mint NFTs and create your own collections directly in
          cross-chain marketplace
        </StyleH3>
        <StyleBannerImg src={banner} />
      </StyleBody>
      <StyleFooter>
        <GradientButton title="VIEW MARKET" width={257} height={86} />
        <StyleInfoGroup>
          <StyleInfoItem>
            <H2 $color="white" $weight={900}>
              950
            </H2>
            <H4 $color="white" $weight={400} $style="Actay">
              ART WORKS
            </H4>
          </StyleInfoItem>
          <StyleBarrier />
          <StyleInfoItem>
            <H2 $color="white" $weight={900}>
              214
            </H2>
            <H4 $color="white" $weight={400} $style="Actay">
              ARTIST
            </H4>
          </StyleInfoItem>
          <StyleBarrier />
          <StyleInfoItem>
            <H2 $color="white" $weight={900}>
              651
            </H2>
            <H4 $color="white" $weight={400} $style="Actay">
              AUCTION
            </H4>
          </StyleInfoItem>
        </StyleInfoGroup>
      </StyleFooter>
    </StyleMain>
  );
};
