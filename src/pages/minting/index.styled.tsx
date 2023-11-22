import styled from "styled-components";


export const Page = styled.div`
    width: 100%;
    max-width: 1440px;
    padding-top: 113px;
    margin-left: auto;
    margin-right: auto;
    color: white;
`
export const HeaderContainer = styled.div`
    margin-left: 80px;
`

export const PageNav = styled.div`
    margin-top: 25px;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-left: 20px;
    padding-right: 20px;
`

export const FontStyle = styled.h2`
    color: white;
    font-size: ${(props) => props.$size}px;
    font-family: Lato;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
    text-transform: uppercase;
`

export const Carusol = styled.div`
    background-image: url('/images/bg/minting/106401.svg');
    background-repeat: no-repeat;
    width: 100%;
    height: 392px;
    padding: 32px 104px;
    display: flex;
    justify-content: space-between;
`

export const CarusolLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    gap: 15px;
`
export const CarusolRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: end;
    height: 100%;
    gap: 15px;
`

export const CarusolTitle = styled.h1`
    font-size: 32px;
    font-family: Lato;
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
`

export const BubbleButton = styled.button`
    background-color: rgba(17, 6, 6, 0.05);
    border-radius: 1000px;
    padding: 6px 24px;
    display: flex;
    align-items: center;
    gap: 24px;
    width: fit-content;

`

export const BubbleTitle = styled.h2`
    // 17d 20h 10m
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 400;
    text-transform: lowercase;
    word-wrap: break-word;
`

export const HeroDescription = styled.h3`
    // Discover the world of Hominids with us, enjoying unique NFT images. Become the owner of one of the masterpieces!
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 400;
    word-wrap: break-word;
`

export const HeroRightButton = styled.button`
    background-color: rgba(17, 6, 6, 0.05);
    border-radius: 1000px;
    padding: 6px 24px;
    display: flex;
    align-items: center;
    gap: 24px;
    width: fit-content;
    border: 1 solid rgba(175, 80, 189, 1);
    // go to launchpad
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 500;
    text-transform: uppercase;
    word-wrap: break-word;
`

export const MainPage = styled.div`
    display: flex;
    padding-top: 66px;
    gap: 32px;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
`
export const CommonActiveButton = styled.button`
    // Active&upcoming
    // Active&upcoming
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 500;
    line-height: 20.16px;
    word-wrap: break-word;
    border-radius: 40px;
    padding: 16px 48px;
    background-color: rgba(175, 81, 189, 1);
    box-shadow: inset 2px rgba(175, 81, 189, 1);
`

export const CommonButton = styled.button`
    // Active&upcoming
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 500;
    line-height: 20.16px;
    word-wrap: break-word;
    border-radius: 40px;
    padding: 16px 48px;
    background-color: rgba(18, 16, 19, 0.6);
`

export const MainContent = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
`

export const CardBox = styled.div`
  display: flex;
  /* width: 100%; */
  flex-wrap: wrap;
  justify-content: start;
  /* align-items: start; */
  gap: 16px;
  @media (max-width: 768px) {
      flex-wrap: nowrap;
      overflow-x: scroll;
      padding: 0 20px;
  }
`;

export const Relative = styled.div`
    position: relative;
`
export const Absolute = styled.div`
    position: absolute;
`