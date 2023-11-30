import Header from "components/layout/header";
import { useNavigate } from "react-router-dom";

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab2,
    TabHeader,
    HeaderChild,
    TabBody,
    CommonText,
    CommonTitle,
    CardBox,
    Vertical_line,
    Hori_line,
    Card,
    Tabbox,
    HeaderChildActive
} from './index.styled';

const Staking_hominid = () => {

    const navigate = useNavigate();



  return (
    <StyleBody>
        <Header />
        <PageNav>
            <FontStyle style={{fontSize: '20px'}}>
                Main
            </FontStyle>
            <img src="/images/icons/Vector4587.svg" style={{borderRadius: '24px'}} alt="" />
            <FontStyle style={{fontSize: '16px'}}>
                NFT_Staking
            </FontStyle>
        </PageNav>
        <PageBody>
            <BodyTitle>
                Staking
                <CommonText style={{marginTop: '24px'}}>Earn SHOMI tokens staking your Nfts</CommonText>
            </BodyTitle>

            <CardBox>
                
                <Card>
                    <CommonTitle>1017</CommonTitle>
                    <CommonText>Total Hominids</CommonText>
                </Card>
                <Vertical_line src="/images/icons/Vector4586.svg" alt="" />
                <Hori_line src="/images/icons/Vector4587.svg" alt="" />
                <Card>
                    <CommonTitle>759</CommonTitle>
                    <CommonText>Staked Hominids</CommonText>
                </Card>
                <Vertical_line src="/images/icons/Vector4586.svg" alt="" />
                <Hori_line src="/images/icons/Vector4587.svg" alt="" />
                <Card>
                    <CommonTitle>468698.15 HOMI</CommonTitle>
                    <CommonText>Total Rewarded</CommonText>
                </Card>
            </CardBox>

            <MainTab2>
                <TabHeader>
                    <HeaderChild onClick={() => navigate('/staking')}>
                        Your Hominids
                    </HeaderChild>
                    <HeaderChildActive onClick={() => navigate('/staking/hominid')}>
                        Staked Hominids
                    </HeaderChildActive>
                </TabHeader>
                <TabBody>
                    <Tabbox>
                        <img src="/images/bg/pot.svg" alt="" style={{width: '72px', height: '72pz'}} />
                        <CommonText>
                            Wallet Not connected
                        </CommonText>
                    </Tabbox>
                </TabBody>
            </MainTab2>
        </PageBody>
    </StyleBody>
  )
}

export default Staking_hominid