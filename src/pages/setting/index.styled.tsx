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
    background-image: url('/images/bg/Subtract.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 24px;
    @media (max-width: 780px){
        background-image: none;
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
    }
`
export const TabBody = styled.div`
    width: 100%;
    padding: 40px 100px;
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
        gap: 20px;
    }
`
export const FR_Child = styled.div`
    width: 32%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 780px){
        width: 100%;
    }
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
    word-wrap: break-word;
    width: 100%;
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
    margin: auto;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
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