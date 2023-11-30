import styled from "styled-components"

export const StyleBody = styled.div`
 max-width: 1440px;
 margin: auto;
 margin-top: 113px;
 width: 100%;
`;

export const PageNav = styled.div`
    margin-top: 25px;
    /* margin-bottom: 32px; */
    display: flex;
    align-items: center;
    gap: 24px;
    padding-left: 20px;
    padding-right: 20px;
    @media (max-width: 500px){
        display: none;
    }

`
export const FontStyle = styled.h2`
    color: white;
    font-family: 'Lato';
    font-weight: 400;
    text-transform: uppercase;
    word-wrap: break-word;
    text-transform: uppercase;
`

export const PageBody = styled.div`
    margin-bottom: 100px;
    padding: 54px 0px;
    @media (max-width: 780px){
        padding: 0;
    }
`

export const BodyTitle = styled.h1`
    font-family: 'Black Han Sans';
    font-size: 64px;
    font-weight: 400;
    line-height: 80px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    @media (max-width: 780px){
        background-image: none;
        font-size: 32px;
    }
`

export const MainTab1 = styled.div<{
    $bg: string
}>`
    width: 100%;
    background-image: url(${(props) => `/images/bg/staking_bg_${props.$bg}.png`});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    margin-top: 100px;
    @media (max-width: 780px){
        background-image: none;
    }
`
export const MainTab2 = styled.div`
    width: 100%;
    background-image: url('/images/bg/staking_bg_right.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    margin-top: 100px;
    @media (max-width: 780px){
        background-image: none;
    }
`

export const TabHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 780px){
        width: auto;
        justify-content: center;
        gap: 5px;
        overflow-x: auto;
    }
`
export const HeaderChild = styled.h3`
    width: 50%;
    padding: 45px;
    text-align: center;
    // Profile
    color: white;
    font-size: 24px;
    font-family: 'Lato';
    font-weight: 700;
    word-wrap: break-word;
    cursor: pointer;
    @media (max-width: 780px){
        background: rgba(18, 16, 19, 0.60); 
        box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
        border-radius: 40px; 
        border: 1px #5D3068 solid; 
        backdrop-filter: blur(60px);
        width: auto;
        padding: 10px;
        font-size: 16px;
    }
`
export const HeaderChildActive = styled.h3`
    width: 50%;
    padding: 45px;
    text-align: center;
    // Profile
    color: white;
    font-size: 24px;
    font-family: 'Lato';
    font-weight: 700;
    word-wrap: break-word;
    cursor: pointer;
    @media (max-width: 780px){
        background: #AF50BD; 
        box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
        border-radius: 40px; 
        border: 1px #5D3068 solid; 
        backdrop-filter: blur(60px);
        width: auto;
        padding: 10px;
        font-size: 16px;
    }
`

export const TabBody = styled.div`
    width: 100%;
    min-height: 600px;
    padding: 40px 0;
`
export const CommonText = styled.h3`
    // Earn SHOMI tokens staking your Nfs
    color: white;
    font-size: 24px;
    font-family: 'Lato';
    font-weight: 400;
    line-height: 33.60px;
    word-wrap: break-word;
`

export const CommonTitle = styled.h1`
    // 1017
    color: white;
    font-size: 48px;
    font-family: Lato;
    font-weight: 900;
    word-wrap: break-word;
    @media (max-width: 780px){
        font-size: 32px;
    }
`

export const Tabbox = styled.div`
    display: flex;
    gap: 17px;
    align-items: center;
    margin-top: 57px;
    width: 100%;
    overflow-x: auto;
    max-width: 1440px;
    @media (max-width: 780px){
        margin-top: 27px;
    }
`

export const TabMenu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 700px){
        flex-direction: column;
        gap: 15px;
    }
`

export const TabLeftMenu = styled.div`
    display: flex;
    gap: 32px;
    align-items: center;
    @media (max-width: 1200px){
        gap: 5px;
    }
`

export const Category = styled.div`
    /* max-width: 271px; */
    padding: 16px 48px;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 1px #484749 solid; 
    backdrop-filter: blur(60px); 
    justify-content: center; 
    align-items: center; 
    gap: 8px; 
    display: inline-flex;
    @media (max-width: 1200px){
        display: none;
    }
`

export const CategoryText = styled.h1`
    color: white;
    font-size: 24px;
    font-family: 'Lato';
    font-weight: 500;
    line-height: 30.24px;
    text-wrap: nowrap;
    @media (max-width: 900px){
        font-size: 16px;
        line-height: 20.16px;
    }
`

export const DropImage = styled.img`
    width: 24px;
    height: 24px;
`

export const AllChains = styled.div`
    display: flex;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 1px #49494A solid; 
    backdrop-filter: blur(60px); 
    justify-content: center; 
    align-items: center; 
    display: inline-flex;
    /* width: 100%; */
`

export const ChainActive = styled.div`
    padding: 16px 48px;
    background: rgba(255, 255, 255, 0.20); 
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 1px #5B5A5B solid; 
    backdrop-filter: blur(60px);
    @media (max-width: 900px){
        width: 131px;
        padding: 16px 0;
        text-align: center;
    }
`

export const Chain = styled.div`
    padding: 16px 28px;
    border-radius: 40px; 
    @media (max-width: 370px){
        padding: 16px 20px;
    }
    @media (max-width: 310px){
        padding: 16px 15px;
    }
`

export const Table = styled.table`
    width: 100%;
    @media (max-width: 780px){
        width: auto;
    }
`

export const TH = styled.th`
    // Collection
    color: white;
    font-size: 24px;
    font-family: Lato;
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 8px;
    text-wrap: nowrap;
    padding: 18px 0;
    padding-left: 36px;
    justify-content: right;
    @media (max-width: 780px){
        font-size: 16px;
    }
`
export const THImg = styled.img`
    width: 8px;
    height: 20px;
`

export const TD = styled.td`
    // Hominids
    color: white;
    font-size: 18px;
    font-family: Lato;
    font-weight: 700;
    word-wrap: break-word;
    vertical-align: middle;
    display: flex;
    gap: 8px;
    align-items: center;
    width: 100%;
    justify-content: right;
    @media (max-width: 780px){
        font-size: 14px;
    }

`

export const TDStar = styled.img`
    width: 24px;
    height: 24px;
`

export const TDAvatar = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 100%;
    @media (max-width: 780px){
        width: 40px;
        height: 40px;
    }
`

export const TDImg = styled.img`
    width: 17px;
    height: 18px;
`