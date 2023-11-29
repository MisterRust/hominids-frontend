import Header from "components/layout/header";

import {
    StyleBody,
    PageBody,
    MainTab1,
    TabHeader,
    HeaderChild,
    TabBody,
    HeaderChildActive,
    TDStar,
    LabelTextDiv,
    LabelNam,
    TabInput,
    SaveBtn,
    MainDiv,
    MainRow,
    MainContainer,
    ImageDiv,
    MainRowDate
} from './index.styled';
import { useState } from "react";

const NFTList = () => {

    const [tab, setTab] = useState(true);

    return (
        <StyleBody>
            <Header />
            <PageBody>
                <MainTab1 $bg={tab ? 'left' : 'right'}>
                    <TabHeader>
                        <HeaderChildActive onClick={() => setTab(true)}>
                            List NFT
                        </HeaderChildActive>
                        <HeaderChild onClick={() => setTab(false)}>
                            Auction NFT
                        </HeaderChild>
                    </TabHeader>
                    {
                        tab ? (

                            <TabBody>
                                <TDStar src='/images/icons/star.svg' />
                                <MainDiv>
                                    <ImageDiv>
                                        <img src="/images/avatars/image185.svg" alt="" style={{ width: '100%', minWidth: '119px' }} />
                                    </ImageDiv>
                                    <MainContainer>
                                        <MainRow style={{ display: 'flex', gap: '40px', width: '100%' }}>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">NFT Contract Address</LabelNam>
                                                <TabInput type="text" placeholder="Enter the NFT contract address" />
                                            </LabelTextDiv>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Token ID</LabelNam>
                                                <TabInput type="text" placeholder="Enter the token ID" />
                                            </LabelTextDiv>
                                        </MainRow>
                                        <MainRow style={{ display: 'flex', gap: '40px', width: '100%' }}>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Payment Token Address</LabelNam>
                                                <TabInput type="text" placeholder="Enter the payment token address" />
                                            </LabelTextDiv>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Amount</LabelNam>
                                                <TabInput type="text" placeholder="Enter the amount" />
                                            </LabelTextDiv>
                                        </MainRow>
                                        <SaveBtn>
                                            Submit
                                        </SaveBtn>
                                    </MainContainer>
                                </MainDiv>
                            </TabBody>
                        ) : (
                            <TabBody>
                                <TDStar src='/images/icons/star.svg' />
                                <MainDiv>
                                    <ImageDiv>
                                        <img src="/images/avatars/image185.svg" alt="" style={{ width: '100%', minWidth: '119px' }} />
                                    </ImageDiv>
                                    <MainContainer>
                                        <MainRow>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">NFT Contract Address</LabelNam>
                                                <TabInput type="text" placeholder="Enter the NFT contract address" />
                                            </LabelTextDiv>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Token ID</LabelNam>
                                                <TabInput type="text" placeholder="Enter the token ID" />
                                            </LabelTextDiv>
                                        </MainRow>
                                        <MainRow>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Payment Token Address</LabelNam>
                                                <TabInput type="text" placeholder="Enter the payment token address" />
                                            </LabelTextDiv>
                                            <LabelTextDiv>
                                                <LabelNam htmlFor="">Amount</LabelNam>
                                                <TabInput type="text" placeholder="Enter the amount" />
                                            </LabelTextDiv>
                                        </MainRow>
                                        <MainRow>
                                            <MainRowDate>
                                                <LabelTextDiv>
                                                    <LabelNam htmlFor="">Start</LabelNam>
                                                    <TabInput type="date" placeholder="dd/mm/yyyy" />
                                                </LabelTextDiv>
                                                <LabelTextDiv>
                                                    <LabelNam htmlFor="">End</LabelNam>
                                                    <TabInput type="date" placeholder="dd/mm/yyyy" />
                                                </LabelTextDiv>
                                            </MainRowDate>
                                            <MainRowDate>
                                                <LabelTextDiv>
                                                    <LabelNam htmlFor="">Mint Bid</LabelNam>
                                                    <TabInput type="number" placeholder="0.1" />
                                                </LabelTextDiv>
                                                <LabelTextDiv>
                                                    <LabelNam htmlFor="">Max</LabelNam>
                                                    <TabInput type="number" placeholder="0.1" />
                                                </LabelTextDiv>
                                            </MainRowDate>
                                        </MainRow>
                                        <SaveBtn>
                                            Submit
                                        </SaveBtn>
                                    </MainContainer>
                                </MainDiv>
                            </TabBody>
                        )
                    }
                </MainTab1>
            </PageBody>
        </StyleBody>
    )
}

export default NFTList