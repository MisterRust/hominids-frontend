import Header from "components/layout/header";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

import {
    Page,
    HeaderContainer,
    PageNav,
    FontStyle,
    Carusol,
    CarusolLeft,
    CarusolRight,
    CarusolTitle,
    BubbleButton,
    BubbleTitle,
    HeroDescription,
    HeroRightButton,
    MainPage,
    CommonActiveButton,
    CommonButton,
    MainContent,
    CardBox
} from './index.styled';

import { MintCard } from "components/cards";

import cardImg from "../../assets/cards/card_avatar.png";


const CARDS = [
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
    {
        cardBgImg: cardImg,
        cardname: 'Hope by Maryanne',
        sui: 1672,
    },
];

const Minting = () => {
    return (
        <Page >
            <HeaderContainer>
                <Header />
            </HeaderContainer>

            <PageNav>
                <FontStyle $size={20}>
                    Main
                </FontStyle>
                <img src="/images/icons/Vector4587.svg" alt="" />
                <FontStyle $size={16}>
                    Minting
                </FontStyle>
            </PageNav>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <Carusol>
                        <CarusolLeft>
                            <CarusolTitle>HomiNIDs</CarusolTitle>
                            <BubbleButton>
                                <img src="/images/icons/polygon.png" style={{ width: '28px', height: '24px' }} alt="" />
                                <BubbleTitle>17d 20h 10m</BubbleTitle>
                            </BubbleButton>
                            <HeroDescription>
                                Discover the world of Hominids with us, enjoying unique NFT
                                <br />
                                images. Become the owner of one of the masterpieces!
                            </HeroDescription>
                        </CarusolLeft>
                        <CarusolRight>
                            <HeroRightButton>go to launchpad</HeroRightButton>
                        </CarusolRight>
                    </Carusol>
                </SwiperSlide>
                <SwiperSlide>
                    <Carusol>
                        h1
                    </Carusol>
                </SwiperSlide>
                <SwiperSlide>
                    <Carusol>
                        h1
                    </Carusol>
                </SwiperSlide>
                <SwiperSlide>
                    <Carusol>
                        h1
                    </Carusol>
                </SwiperSlide>
            </Swiper>

            <MainPage>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <CommonActiveButton>
                        Active&upcoming
                    </CommonActiveButton>
                    <CommonButton>
                        Post
                    </CommonButton>
                </div>
                    <MainContent>
                        <CardBox>
                            {CARDS.map((card, index) => (
                                <MintCard
                                    key={index}
                                    cardBgImg={card.cardBgImg}
                                    sui={card.sui}
                                    cardname={card.cardname}
                                />
                            ))}
                        </CardBox>
                    </MainContent>
            </MainPage>
        </Page>
    )
}

export default Minting