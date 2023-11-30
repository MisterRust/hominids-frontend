import Header from "components/layout/header";
import { useNavigate } from "react-router-dom";

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab3,
    TabHeader,
    HeaderChild,
    TabBody,
    SaveBtn,
    HeaderChildActive,
    NoDataRow,
    NoDataImage,
    NoDataText
} from './index.styled';

const History = () => {

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
                Marketplace
            </FontStyle>
            <img src="/images/icons/Vector4587.svg" style={{borderRadius: '24px'}} alt="" />
            <FontStyle style={{fontSize: '16px'}}>
                Tranfer
            </FontStyle>
        </PageNav>
        <PageBody>
            <BodyTitle>
                Tranfer
            </BodyTitle>
            <MainTab3>
                <TabHeader>
                    <HeaderChild onClick={() => navigate('/transfer')}>
                        Transfer
                    </HeaderChild>
                    <HeaderChild onClick={() => navigate('/transfer/reedeem')}>
                        Reedeem
                    </HeaderChild>
                    <HeaderChildActive onClick={() => navigate('/transfer/history')}>
                        History
                    </HeaderChildActive>
                </TabHeader>
                <TabBody>
                    <NoDataRow>
                        <NoDataImage src="/images/icons/nodata.svg" />
                        <NoDataText>
                            No data
                        </NoDataText>
                        <SaveBtn style={{marginTop: '48px'}}>
                            Connect wallet
                        </SaveBtn>
                    </NoDataRow>
                </TabBody>
            </MainTab3>
        </PageBody>
    </StyleBody>
  )
}

export default History