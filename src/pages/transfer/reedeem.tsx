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
    FirstRow,
    LabelNam,
    TabInput,
    SaveBtn,
    HeadNumber,
    HeadTitle,
    HeadPart,
    LabelTextDiv,
    F_Child,
    TabSelect,
    TabOption,
    Hr_image,
    HeaderChildActive
} from './index.styled';

const Reedeem = () => {

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
            <MainTab2>
                <TabHeader>
                    <HeaderChild onClick={() => navigate('/transfer')}>
                        Transfer
                    </HeaderChild>
                    <HeaderChildActive onClick={() => navigate('/transfer/reedeem')}>
                        Reedeem
                    </HeaderChildActive>
                    <HeaderChild onClick={() => navigate('/transfer/history')}>
                        History
                    </HeaderChild>
                </TabHeader>
                <TabBody>
                    <HeadPart>
                        <HeadNumber>
                            1
                        </HeadNumber>
                        <img src="/images/icons/horizontal_line.svg" alt="" />
                        <HeadTitle>
                            Resume transfer
                        </HeadTitle>
                    </HeadPart>
                    <FirstRow>
                        <LabelNam>
                            Paste in the Sender Transaction Hash (from Step3) to resume your transfer
                        </LabelNam>
                    </FirstRow>
                    <FirstRow>
                        <F_Child>
                            <LabelTextDiv>
                                <LabelNam htmlFor="">Sender Blockchain</LabelNam>
                                <TabSelect name="" id="" placeholder="Select a network">
                                    <TabOption value="">Select a network</TabOption>
                                </TabSelect>
                            </LabelTextDiv>
                        </F_Child>
                        <F_Child>
                            <LabelTextDiv>
                                <LabelNam htmlFor="">Sender transaction hash</LabelNam>
                                <TabInput type="text" placeholder="Enter the sender transaction hash" />
                            </LabelTextDiv>
                        </F_Child>
                    </FirstRow>
                    <FirstRow>
                        <SaveBtn>
                        Confirm import
                        </SaveBtn>
                    </FirstRow>
                    <Hr_image src="/images/bg/hr_line.svg" alt="" />
                    <HeadPart>
                        <HeadNumber>
                            2
                        </HeadNumber>
                        <img src="/images/icons/horizontal_line.svg" alt="" />
                        <HeadTitle>
                            select receiver blockchain
                        </HeadTitle>
                    </HeadPart>
                </TabBody>
            </MainTab2>
        </PageBody>
    </StyleBody>
  )
}

export default Reedeem