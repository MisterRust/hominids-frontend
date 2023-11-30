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
    padding: 0 24px;
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

export const MainTab1 = styled.div`
    width: 100%;
    background-image: url('/images/bg/staking_bg_left.png');
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
    padding: 40px 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 1024px){
        padding: 40px;
        margin-top: 40px;
    }
    @media (max-width: 780px){
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.04); 
        box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
        border-radius: 16px; border: 3px #5D3068 solid; 
        backdrop-filter: blur(60px);
        min-height: 270px;
    }
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

export const CardBox = styled.div`
    background: rgba(255, 255, 255, 0.04); 
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 3px #5D3068 solid; 
    backdrop-filter: blur(60px);
    margin-top: 56px;
    display: flex; 
    padding: 48px 144px; 
    /* justify-content: space-between; */
    justify-content: center;
    @media (max-width: 1176px){
        padding: 24px 30px;
    }
    @media (max-width: 780px){
        flex-direction: column;
        padding: 24px 50px;
        margin: 56px 20px 56px;
        align-items: center;
    }
`

export const Card = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    text-align: center;
    @media (max-width: 780px){
        font-size: 32px;
        padding: 32px 0;
    }
`

export const Vertical_line = styled.img`
    @media (max-width: 780px){
        display: none;
    }
`

export const Hori_line = styled.img`
    display: none;
    width: 30%;
    @media (max-width: 780px){
        display: block;
    }
`

export const Tabbox = styled.div`
    display: flex;
    gap: 17px;
    align-items: center;
    @media (max-width: 780px){
        flex-direction: column;
        gap: 27px;
        text-align: center;
    }
`

export const Portimg = styled.img`
    @media (max-width: 780px){

    }
`