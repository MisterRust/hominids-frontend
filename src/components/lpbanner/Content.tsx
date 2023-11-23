import { styled } from "styled-components";
import logo from "../../assets/logo.png";
import btc from "../../assets/chainicon/btc.png";
import polygon from "../../assets/chainicon/btc.png";
import frame from "../../assets/chainicon/frame.png";
import zeta from "../../assets/chainicon/zeta.png";
import banner from "../../assets/banner.png";
import { Tab } from "./Tab";
import { GradientButton } from "components/buttons";
import { H1, H2, H4, H5, Span, H3 } from "styles";
import Header from "components/layout/header";
import { useWindowSize } from "hooks/useWindowSizes";

const StyleMain = styled.div`
  padding-left: 80px;
  position: relative;
  z-index: 2;
  @media (max-width: 970px){
    padding-left: 0;
    text-align: center;
  }
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
  padding: 98px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyleH3 = styled(H5)`
  width: 500px;
  z-index: 10;
  @media (max-width: 970px){
    text-align: center;
    margin: auto;
    width: auto;
    max-width: 500px;
  }
`;

const StyleBannerImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 55%;
`;

const StyleFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleInfoGroup = styled.div`
  width: 55%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

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
const ElemWide = ({logo}:{logo: string}) =>  ( <StyleHead>
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
</StyleHead> );
const StyleLogo = styled.img``;

export const Content = () => {

  const {width}  = useWindowSize();
  // const [elem, setElem] = useState(ElemWide);
  // useEffect(() => {
  //   if(width > 970)
  //     setElem(Header);
  //   else setElem(ElemWide);
  // }, [width]);
  return (
    <StyleMain>
      {width > 970 ? <ElemWide logo={logo} /> : <Header />}
      {
        width > 970 ? (
          <>
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
              <div style={{marginLeft: '52px'}}>
                <GradientButton title="VIEW MARKET" width={257} height={86} />
              </div>
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
          </>
        ) : (
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px', color: 'white',padding: '15px 24px' }}>
            <H3 $weight={400} $color="white" $style="Black">
              MINT & Sell your{" "}
              <Span $color="#AF50BD">
                UNIQUE NFT
              </Span>{" "}
              ART
            </H3>
            <StyleH3 $weight={400} $color="white" $style="Actay">
                You can quickly mint NFTs and create your own collections directly in
                cross-chain marketplace
              </StyleH3>
            <div style={{position: 'relative', marginTop: '30px',}}>
              <img src="/images/bg/mobile_bg.png" alt="" style={{width: '100%'}} />
              <img src="/images/avatars/landing_monkey.png" alt="" style={{width: '100%', position: 'absolute', bottom: '5px', zIndex: '10', left: 0}} />
              <div style={{position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, 0)'}}>
                <GradientButton title="VIEW MARKET" width={257} height={56} />
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
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
            </div>
          </div>
        )
      }
    </StyleMain>
  );
};
