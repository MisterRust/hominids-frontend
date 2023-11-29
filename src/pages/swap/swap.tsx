import Header from "components/layout/header";

import {
    StyleBody,
    PageNav,
    FontStyle,
    PageBody,
    BodyTitle,
    MainTab1,
    MainPanel,
    FFLDivColumn,
    FFRDivColumn,
    FFRFDiv,
    FFRFCDiv,
    CoinImg,
    ColumnDiv,
    ThFontStyle,
    SmallPriceText,
    TopRightDiv,
    TopRightText,
    TopRightImg,
    SaveBtn,
    H1,
    H2,
    H3,
    BigPriceText,
    Flex,
    Relative,
    Absolute,
    PartTopDiv,
    PartTopHidden,
    HiddenBox,
    SelectDiv,
    ConvertDiv,
    BelowPart
} from './index.styled';

const Swap = () => {

  return (
    <StyleBody>
        <Header />
        <PageNav>
            <FontStyle style={{fontSize: '20px'}}>
                Main
            </FontStyle>
            <img src="/images/icons/Vector4587.svg" style={{borderRadius: '24px'}} alt="" />
            <FontStyle style={{fontSize: '20px'}}>
                Swap
            </FontStyle>
        </PageNav>
        <PageBody>
            <BodyTitle>
                Swap
            </BodyTitle>
            <MainTab1>
                <MainPanel>
                    <PartTopDiv>
                        <FFLDivColumn>
                            <img src="/images/icons/[CITYPNG1.svg" alt="" />
                            <img src="/images/icons/horizontal_line.svg" alt="" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src="/images/icons/bnb-chain-full-binance-smart-chain-logo2.svg" alt="" />
                                <img src="/images/icons/bnb-chain-full-binance-smart-chain-logo1.svg" alt="" />
                            </div>
                        </FFLDivColumn>
                        <FFRDivColumn style={{position: 'relative'}}>
                            <FFRFDiv>
                                <FFRFCDiv>
                                    <CoinImg src="/images/icons/ether.svg" />
                                    <ColumnDiv>
                                        <ThFontStyle>
                                            1
                                        </ThFontStyle>
                                        <SmallPriceText color="#AF50BD">
                                            ~$ 1593.42
                                        </SmallPriceText>
                                    </ColumnDiv>
                                </FFRFCDiv>
                                <TopRightDiv>
                                    <TopRightText>
                                        ETH
                                    </TopRightText>
                                    <TopRightImg src="/images/icons/icon-down.svg" />
                                </TopRightDiv>
                            </FFRFDiv>
                            <FFRFDiv>
                                <FFRFCDiv>
                                    <CoinImg src="/images/icons/btc.svg" />
                                    <ColumnDiv>
                                        <ThFontStyle>
                                            7.5326
                                        </ThFontStyle>
                                        <SmallPriceText color="#AF50BD">
                                            ~$ 1590.39
                                        </SmallPriceText>
                                    </ColumnDiv>
                                </FFRFCDiv>
                                <TopRightDiv>
                                    <TopRightText>
                                        BNB
                                    </TopRightText>
                                    <TopRightImg src="/images/icons/icon-down.svg" />
                                </TopRightDiv>
                            </FFRFDiv>
                            <img src="/images/icons/velt.svg" alt="" style={{width: '59px', height: '59px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                        </FFRDivColumn>
                    </PartTopDiv>
                    <PartTopHidden>
                        <HiddenBox>
                            <H3 style={{textAlign: 'center'}}>
                                Select a pair
                            </H3>
                            <SelectDiv>
                                <Flex $gap={12} $alignItems="center">
                                    <img src="/images/icons/ether.svg" style={{width: '40px', height: '40px'}} alt="" />
                                    <H1>ETH</H1>
                                </Flex>
                                <img src="/images/icons/icon-down.svg" style={{width: '24px', height: '24px'}} alt="" />
                            </SelectDiv>
                            <ConvertDiv>
                                <H3>
                                    0.0
                                </H3>
                                <H3 style={{color: '#5D3068'}}>
                                    ~$ 1593.42
                                </H3>
                            </ConvertDiv>
                        </HiddenBox>
                        <HiddenBox>
                            <H3 style={{textAlign: 'center'}}>
                                Select a pair
                            </H3>
                            <SelectDiv>
                                <Flex $gap={12} $alignItems="center">
                                    <img src="/images/icons/btc.svg" style={{width: '40px', height: '40px'}} alt="" />
                                    <H1>BNB</H1>
                                </Flex>
                                <img src="/images/icons/icon-down.svg" style={{width: '24px', height: '24px'}} alt="" />
                            </SelectDiv>
                            <ConvertDiv>
                                <H3>
                                    7.5326
                                </H3>
                                <H3 style={{color: '#5D3068'}}>
                                    ~$ 1590.39
                                </H3>
                            </ConvertDiv>
                        </HiddenBox>
                        <img src="/images/icons/velt.svg" alt="" style={{width: '59px', height: '59px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} />
                    </PartTopHidden>
                    <div style={{marginTop: '40px'}}>
                        <SaveBtn>
                            Connect wallet
                        </SaveBtn>
                    </div>
                    <div style={{marginTop: '42px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <H1>
                                YOUR SAVE
                            </H1>
                            <BigPriceText>
                                ~ $71.23
                            </BigPriceText>
                        </div>
                        <img src="/images/bg/vertocail_line.svg" alt="" style={{width: '100%'}} />
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>
                            <H3>
                                DIFFERENCE
                            </H3>
                            <SmallPriceText>
                                - 0.2%
                            </SmallPriceText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '12px'}}>
                            <H3>
                                1 BNB BUY PRICE
                            </H3>
                            <SmallPriceText>
                                ~ $211.54
                            </SmallPriceText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '12px'}}>
                            <H3>
                                1 ETH SELL PRICE
                            </H3>
                            <SmallPriceText>
                                ~ $1,590.39
                            </SmallPriceText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '12px'}}>
                            <H3>
                                PLATFORM FEE
                            </H3>
                            <SmallPriceText>
                                ~ $ 6.37
                            </SmallPriceText>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '12px'}}>
                            <H3>
                                FEE DISCOUNT
                            </H3>
                            <SmallPriceText>
                                0%
                            </SmallPriceText>
                        </div>
                    </div>
                </MainPanel>
                <MainPanel>
                    <BelowPart>
                        <Relative>
                            <img src="/images/icons/ether.svg" alt="" />
                            <Absolute bottom= {-17} left = {50} transform = {'-50%, 100%'} textAlign = 'center'>
                                <H2>ETH</H2>
                                <SmallPriceText color="#AF50BD">ETHEREUM NETWORK</SmallPriceText>
                            </Absolute>
                        </Relative>
                        <img src="/images/icons/dotline.svg" alt="" />
                        <img src="/images/icons/eth_btc.svg" alt="" />
                        <img src="/images/icons/dotline.svg" alt="" />
                        <Relative>
                            <img src="/images/icons/btc.svg" alt="" />
                            <Absolute bottom= {-17} left = {50} transform = {'-50%, 100%'} textAlign = 'center'>
                                <H2>BNB</H2>
                                <SmallPriceText color="#AF50BD">BNB CHAIN</SmallPriceText>
                            </Absolute>
                        </Relative>
                    </BelowPart>
                    <PartTopHidden gap={16}>
                        <img src="/images/bg/vertocail_line.svg" alt="" style={{width: '100%', margin: '20px 0 60px 0'}} />
                        <HiddenBox>
                            <SelectDiv justifyContent='space-between' gap={16}>
                                <Flex $gap={12} $alignItems="center">
                                    <img src="/images/icons/ether.svg" style={{width: '40px', height: '40px'}} alt="" />
                                    <Flex $flexDirection="column">
                                        <H2>
                                            ETH
                                        </H2>
                                        <H3 style={{fontSize: '12px', color: '#5D3068'}}>
                                            ETHERUM NETWORK
                                        </H3>
                                    </Flex>
                                </Flex>
                                <img src="/images/icons/icon-down.svg" style={{width: '24px', height: '24px'}} alt="" />
                            </SelectDiv>
                            <img src="/images/icons/Vector4608.svg" alt="" style={{height: '30px'}} />
                            <img src="/images/icons/eth_btc.svg" alt="" style={{ width: '60px', height: '60px', margin: 'auto' }} />
                            <img src="/images/icons/Vector4608.svg" alt="" style={{height: '30px'}} />
                            <SelectDiv justifyContent='space-between' gap={16}>
                                <Flex $gap={12} $alignItems="center">
                                    <img src="/images/icons/ether.svg" style={{width: '40px', height: '40px'}} alt="" />
                                    <Flex $flexDirection="column">
                                        <H2>
                                            ETH
                                        </H2>
                                        <H3 style={{fontSize: '12px', color: '#5D3068'}}>
                                            ETHERUM NETWORK
                                        </H3>
                                    </Flex>
                                </Flex>
                                <img src="/images/icons/icon-down.svg" style={{width: '24px', height: '24px'}} alt="" />
                            </SelectDiv>
                        </HiddenBox>
                    </PartTopHidden>
                    <div style={{width: '100%', marginTop: '137px', overflowX: 'auto'}}>
                        <table style={{width: '100%'}}>
                            <thead>
                                <tr style={{paddingBottom: '20px'}}>
                                    <th style={{textAlign: 'left'}}>
                                        <H2 style={{fontWeight: '900', paddingBottom: '30px', paddingRight: '15px'}}>
                                            Exchange
                                        </H2>
                                    </th>
                                    <th>
                                        <H2 style={{fontWeight: '900', paddingBottom: '30px', paddingRight: '15px'}}>
                                            Quote
                                        </H2>
                                    </th>
                                    <th>
                                        <H2 style={{fontWeight: '900', paddingBottom: '30px', paddingRight: '15px'}}>
                                            Min.received
                                        </H2>
                                    </th>
                                    <th>
                                        <H2 style={{fontWeight: '900', paddingBottom: '30px', paddingRight: '15px'}}>
                                            Gas fee
                                        </H2>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                                            <img src="/images/icons/rocketx_pool.svg" alt="" />
                                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                                <H3>
                                                    ROCKETX POOL
                                                </H3>
                                                <H3 style={{color: '#5D3068'}}>
                                                    CEX | 5 - 15 mins
                                                </H3>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <H3>
                                            7.533 BNB
                                        </H3>
                                    </td>
                                    <td>
                                        <H3>
                                            Market price
                                        </H3>
                                    </td>
                                    <td>
                                        <H3>
                                            ~$0.29
                                        </H3>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </MainPanel>
            </MainTab1>
        </PageBody>
    </StyleBody>
  )
}

export default Swap