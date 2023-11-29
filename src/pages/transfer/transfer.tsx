import Header from "components/layout/header";
import { useNavigate } from "react-router-dom";

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab1,
    TabHeader,
    HeaderChild,
    TabBody,
    FirstRow,
    LabelNam,
    TabInput,
    SaveBtn,
    HeadNumber,
    HeadTitle,
    BottomLabel,
    HeadPart,
    LabelTextDiv,
    F_Child,
    T_Child,
    TabSelect,
    TabOption,
    Hr_image,
    HeaderChildActive
} from './index.styled';

const Transfer = () => {

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
            <MainTab1>
                <TabHeader>
                    <HeaderChildActive onClick={() => navigate('/transfer')}>
                        Transfer
                    </HeaderChildActive>
                    <HeaderChild onClick={() => navigate('/transfer/reedeem')}>
                        Reedeem
                    </HeaderChild>
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
                            Import an NFT
                        </HeadTitle>
                    </HeadPart>
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
                                <LabelNam htmlFor="">Contract Adress</LabelNam>
                                <TabInput type="text" placeholder="Enter the contact address" />
                            </LabelTextDiv>
                            <BottomLabel>import my nft</BottomLabel>
                        </F_Child>
                        <T_Child>
                            <LabelTextDiv>
                                <LabelNam htmlFor="">Token ID</LabelNam>
                                <TabInput type="text" placeholder="Enter the token ID" />
                            </LabelTextDiv>
                            <BottomLabel>create an nft</BottomLabel>
                        </T_Child>
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
                    <Hr_image src="/images/bg/hr_line.svg" alt="" />
                    <HeadPart>
                        <HeadNumber>
                            3
                        </HeadNumber>
                        <img src="/images/icons/horizontal_line.svg" alt="" />
                        <HeadTitle>
                            tarnsfer
                        </HeadTitle>
                    </HeadPart>
                </TabBody>
            </MainTab1>
        </PageBody>
    </StyleBody>
  )
}

export default Transfer