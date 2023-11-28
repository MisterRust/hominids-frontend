import Header from "components/layout/header";

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
    Tabbox,
    HeaderChildActive,
    TabMenu,
    TabLeftMenu,
    Category,
    CategoryText,
    DropImage,
    AllChains,
    Chain,
    ChainActive,
    TH,
    TD,
    THImg,
    TDAvatar,
    TDStar,
    TDImg
} from './index.styled';
import { useState } from "react";

const Ranking = () => {

    const [tab, setTab] = useState(true);

    return (
        <StyleBody>
            <Header />
            <PageNav>
                <FontStyle style={{ fontSize: '20px' }}>
                    Main
                </FontStyle>
                <img src="/images/icons/Vector4587.svg" style={{ borderRadius: '24px' }} alt="" />
                <FontStyle style={{ fontSize: '16px' }}>
                    MARKETPLACE
                </FontStyle>
                <img src="/images/icons/Vector4587.svg" style={{ borderRadius: '24px' }} alt="" />
                <FontStyle style={{ fontSize: '16px' }}>
                    RANKING
                </FontStyle>
            </PageNav>
            <PageBody>
                <BodyTitle>
                    RANKING
                </BodyTitle>
                <MainTab1 $bg={tab ? 'left' : 'right'}>
                    <TabHeader>
                        <HeaderChildActive onClick={() => setTab(true)}>
                            All collections
                        </HeaderChildActive>
                        <HeaderChild onClick={() => setTab(false)}>
                            My watchlist
                        </HeaderChild>
                    </TabHeader>
                    <TabBody>
                        <TabMenu>
                            <TabLeftMenu>
                                <Category>
                                    <CategoryText>
                                        All categories
                                    </CategoryText>
                                    <DropImage src='/images/icons/icon-down.svg' />
                                </Category>
                                <AllChains>
                                    <ChainActive>
                                        <CategoryText>
                                            All chains
                                        </CategoryText>
                                    </ChainActive>
                                    <Chain>
                                        <CategoryText>
                                            1h
                                        </CategoryText>
                                    </Chain>
                                    <Chain>
                                        <CategoryText>
                                            6h
                                        </CategoryText>
                                    </Chain>
                                    <Chain>
                                        <CategoryText>
                                            6h
                                        </CategoryText>
                                    </Chain>
                                </AllChains>
                            </TabLeftMenu>
                            <AllChains>
                                <Chain>
                                    <CategoryText>
                                        1h
                                    </CategoryText>
                                </Chain>
                                <Chain>
                                    <CategoryText>
                                        6h
                                    </CategoryText>
                                </Chain>
                                <ChainActive>
                                    <CategoryText>
                                        24h
                                    </CategoryText>
                                </ChainActive>
                                <Chain>
                                    <CategoryText>
                                        6h
                                    </CategoryText>
                                </Chain>
                            </AllChains>
                        </TabMenu>
                        <Tabbox>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>
                                            <TH style={{ justifyContent: "left" }}>
                                                Collection
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                Volume <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                <span>%</span>
                                                Change
                                                <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                Floor price
                                                <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                Sales
                                                <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                <span>%</span>
                                                Items listed
                                                <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                        <th>
                                            <TH>
                                                <span>%</span>
                                                Unique owners
                                                <THImg src="/images/icons/sort.svg" />
                                            </TH>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <TD style={{ justifyContent: "left" }}>
                                                <TDStar src="/images/icons/star.svg" />
                                            </TD>
                                        </td>
                                        <td>
                                            <TD style={{ justifyContent: "left" }}>
                                                <span>1</span>
                                                <TDAvatar src="/images/icons/bg.svg" />
                                                <span>Hominids</span>
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                <span style={{ color: '#50BD75' }}>1672 SUI</span>
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                <TDImg src="/images/icons/Play.svg" />
                                                <span style={{ color: '#F8B22A' }}>0.76%</span>
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                0.01 ETH
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                4 015
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                20%
                                            </TD>
                                        </td>
                                        <td>
                                            <TD>
                                                12%
                                            </TD>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Tabbox>
                    </TabBody>
                </MainTab1>
            </PageBody>
        </StyleBody>
    )
}

export default Ranking