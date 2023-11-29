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
@media (max-width: 780px){
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
    padding: 58px 0 44px 0;
    @media (max-width: 780px){
        background-image: none;
        font-size: 32px;
        padding: 48px 0 32px 0;
    }
`

export const MainTab1 = styled.div`
    width: 100%;
    background-image: url('/images/bg/Subtract.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    @media (max-width: 780px){
        background-image: none;
        padding: 0 11px;
    }
`
export const MainTab2 = styled.div`
    width: 100%;
    background-image: url('/images/bg/Subtract(1).png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    @media (max-width: 780px){
        background-image: none;
        padding: 0 11px;
    }
`
export const MainTab3 = styled.div`
    width: 100%;
    background-image: url('/images/bg/Subtract(2).png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    @media (max-width: 780px){
        background-image: none;
        padding: 0 11px;
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
    width: 33%;
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
        font-weight: 500;
    }
`
export const HeaderChildActive = styled.h3`
    width: 33%;
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
        font-weight: 500;
    }
`
export const TabBody = styled.div`
    width: 100%;
    padding: 40px 100px;
    @media (max-width: 1024px){
        padding: 20px;
        margin-top: 40px;
    }
    @media (max-width: 780px){
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.04); 
        box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
        border-radius: 16px; border: 3px #5D3068 solid; 
        backdrop-filter: blur(60px);
    }
`

export const FirstRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 40px;
    margin-top: 30px;
    @media (max-width: 780px){
        flex-direction: column;
        gap: 60px;
        
    }
`
export const HeadPart = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    @media (max-width: 780px){
        gap: 24px;
    }
    @media (max-width: 340px){
        gap: 12px;
    }
`

export const FR_Child = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 780px){
        width: 100%;
    }
`

export const F_Child = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 780px){
        width: 100%;
    }
`

export const T_Child = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 780px){
        width: 100%;
    }
`

export const LabelTextDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const HeadNumber = styled.h1`
    color: white;
    font-size: 48px;
    font-family: Lato;
    font-weight: 900;
    word-wrap: break-word;
    @media (max-width: 780px){
        font-size: 28px;
    }
`

export const HeadTitle = styled.h2`
    color: white;
    font-size: 28px;
    font-family: Lato;
    font-weight: 700;
    text-transform: uppercase;
    word-wrap: break-word;
    @media (max-width: 780px){
        font-size: 26px;
    }
`

export const BottomLabel = styled.h3`
    color: white;
    font-size: 16px;
    font-family: Lato;
    font-weight: 500;
    text-decoration: underline;
    text-transform: uppercase;
    word-wrap: break-word;
    cursor: pointer;
`

export const SC_Child = styled.div`
    width: 64%;
    display: flex;
    flex-direction: column;
    @media (max-width: 780px){
        width: 100%;
    }
`

export const LabelNam = styled.label`
    // Username
    color: white;
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 27px;
    width: 100%;
    display: inline-block;
    /* word-break: break-all; */
`

export const TabInput = styled.input`
    width: 100%;
    height: 59px;
    /* border-radius: 16px; */
    /* border-color: rgba(93, 48, 104, 1), rgba(17, 16, 18, 1); */
    background-color: transparent;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 16px; 
    border: 1px #5D3068 solid; 
    backdrop-filter: blur(60px);
    padding: 0 24px;
    // Enter the contact address
    color: #AAA5A5;
    font-size: 20px;
    font-family: Inter;
    font-weight: 400;
    line-height: 30px;
    word-wrap: break-word;
`

export const TabSelect = styled.select`
    width: 100%;
    height: 59px;
    /* border-radius: 16px; */
    /* border-color: rgba(93, 48, 104, 1), rgba(17, 16, 18, 1); */
    background-color: transparent;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 16px; 
    border: 1px #5D3068 solid; 
    backdrop-filter: blur(60px);
    color: #AAA5A5;
    font-size: 20px;
    font-family: 'Inter';
    font-weight: 400;
    line-height: 30px;
    cursor: pointer;
`

export const TabOption = styled.option`
    width: 80%;
`

export const TabButton = styled.button`
    width: 100%;
    padding: 20px 32px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04); 
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 16px; border: 3px #5D3068 solid; 
    backdrop-filter: blur(60px);
    text-align: center;
    // Link Twitter
    color: white;
    font-size: 16px;
    font-family: 'Lato';
    font-weight: 500;
    word-wrap: break-word;
`

export const TabTextArea = styled.input`
    width: 100%;
    height: 126px;
    /* border-radius: 16px; */
    /* border-color: rgba(93, 48, 104, 1), rgba(17, 16, 18, 1); */
    background-color: transparent;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 16px; 
    border: 1px #5D3068 solid; 
    backdrop-filter: blur(60px);
    padding: 20px;
`

export const NotiText = styled.h3`
    // Your email for marketplace notifcations
    color: #4C4B4D;
    font-size: 18px;
    font-family: Inter;
    font-weight: 400;
    line-height: 27px;
    word-wrap: break-word;
`

export const SaveBtn = styled.button`
    width: 300px;
    padding: 25px 0;
    border-radius: 100px;
    background-color: rgba(175, 80, 189, 1);
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    cursor: pointer;
    :hover{
        background-color: transparent;
        color: black;
    }
    @media (max-width: 430px){
        width: auto;
        padding: 20px 25px;
    }
    
`// Notification

export const PartTitle = styled.h1`
    color: white; 
    font-size: 28px; 
    font-family: Lato; 
    font-weight: 600; 
    text-transform: uppercase; 
    line-height: 35.28px;
    word-wrap: break-word;
    @media (max-width: 780px){
        text-align: center;
    }
` 

export const Noti_Child = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`

export const Hr_image = styled.img`
    width: 100%;
    margin: 40px 0;
`

export const Hide_part = styled.div`
    width: 100%;
    display: none;
    @media (max-width: 780px){
        display: block;
    }
`

export const Ver_image = styled.img`
    max-height: 142px;
    @media (max-width: 780px){
        display: none;
    }
`

export const Noti_1_3 = styled.div`
    display: 'flex';
    gap: '35px';
    flex-direction: 'column'; 
    width: '32%';
    @media (max-width: 780px){
        width: 100%;
    }
`

export const Text_Style = styled.span`
    // MoonRank
    color: white;
    font-size: 18px;
    font-family: Lato;
    font-weight: 500;
    line-height: 22.68px;
    word-wrap: break-word;
`

export const NoDataRow = styled.div`
    margin-top: 100px;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 22px;
    align-items: center;
`

export const NoDataText = styled.h1`
    // No data
    color: white;
    font-size: 24px;
    font-family: 'Lato';
    font-weight: 700;
    word-wrap: break-word;
    padding-right: 20px;
`

export const NoDataImage = styled.img`
    width: 119px;
    height: 119px;
`