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
    display: flex;
    gap: 39px;
    @media (max-width: 1370px){
        flex-direction: column;
    }
    @media (max-width: 780px){
        background-image: none;
        padding: 0 11px;
    }
`

export const MainPanel = styled.div`
    width: 50%;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 60px;
    border: 3px #5D3068 solid;
    backdrop-filter: blur(60px);
    padding: 80px 45px;
    @media (max-width: 1370px){
        width: 100%;
    }
    @media (max-width: 670px){
        border: none;
        box-shadow: none;
        padding: 10px 10px;
    }
`

export const FFLDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 39px;
    align-items: center;
`
export const FFRDivColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    @media (max-width: 1370px){
        /* width: 80%; */
    }
`

export const PartTopDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1370px){
        width: 100%;
        justify-content: center;
        gap: 100px;
    }
    @media (max-width: 780px){
        justify-content: space-between;
        gap: 0;
    }
    @media (max-width: 670px){
        display: none;
    }
`

export const FFRFDiv = styled.div`
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 24px; 
    border: 2px #5D3068 solid; 
    backdrop-filter: blur(60px);
    padding: 35px 32px;
    display: flex;
    gap: 30px;
    @media (max-width: 1370px){
        /* width: 50%; */
        justify-content: space-between;
    }
`

export const FFRFCDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const ThFontStyle = styled.div`
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 36px;
    word-wrap: break-word;
`

export const SmallPriceText = styled.h3<{
    color?: string;
}>`
    color: ${(props) => props.color?props.color:'white'};
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 27px;
    text-wrap: nowrap;
`
export const TopRightText = styled.h3`
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 27px;
    word-wrap: break-word;
    color: white;
`
export const CoinImg = styled.img`
    width: 76px;
    height: 76px;
`
export const TopRightImg = styled.img`
    width: 24px;
    height: 24px;
`
export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const TopRightDiv = styled.div`
    display: flex;
    gap: 9px;
`
export const SaveBtn = styled.button`
    width: 100%;
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

`// Notification

export const H1 = styled.h1`
    color: white;
    font-size: 32px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 48px;
    word-wrap: break-word;
    @media (max-width: 670px){
        // YOU SAVE
        color: white;
        font-size: 24px;
        font-family: 'Inter';
        font-weight: 600;
        line-height: 36px;
        word-wrap: break-word
    }
`

export const H2 = styled.h2`
    color: white;
    font-size: 24px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 36px;
    word-wrap: break-word;
    text-wrap: nowrap;
    @media (max-width: 670px){
        font-size: 16px;
    }
`

export const BigPriceText = styled.h3`
    // ~ $71.23
    color: #AF50BD;
    font-size: 32px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 48px;
    word-wrap: break-word;
    @media (max-width: 670px){
        font-size: 16px;
    }
`

export const H3 = styled.h3`
    // - 0.2%
    color: white;
    font-size: 18px;
    font-family: 'Inter';
    font-weight: 600;
    line-height: 27px;
    word-wrap: break-word;
    @media (max-width: 670px){
        font-size: 16px;
    }
`

export const Flex = styled.div<{
    $gap?: number;
    $justifyContent?: string;
    $flexDirection?: string;
    $alignItems?: string;
}>`
    display: flex;
    gap: ${(props) => props.$gap}px;
    justify-content: ${(props) => props.$justifyContent};
    flex-direction: ${(props) => props.$flexDirection};
    align-items: ${(props) => props.$alignItems};
`

export const Relative = styled.div`
    position: relative;
`

export const Absolute = styled.div<{
    top?: number;
    bottom?: number;
    left?: number;
    transform?: string;
    textAlign?: string;
}>`
    position: absolute;
    top: ${(props) => props.top}px;
    bottom: ${(props) => props.bottom}px;
    left: ${(props) => props.left}%;
    transform: translate(${(props) => props.transform});
    text-align: ${(props) => props.textAlign};
`

export const PartTopHidden = styled.div<{
    gap?: number;
    alignItems?: string;
}>`
    display: none;
    flex-direction: column;
    width: 100%;
    position: relative;
    gap: ${(props) => props.gap};
    align-items: ${(props) => props.alignItems};
    @media (max-width: 670px){
        display: flex;
        justify-content: center;
    }
`

export const HiddenBox = styled.div`
    padding: 32px 16px;
    background: rgba(255, 255, 255, 0.04); 
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 3px #5D3068 solid;
    backdrop-filter: blur(60px);
    display: flex;
    flex-direction: column;
    gap: 16px;
`

export const SelectDiv = styled.div<{
    justifyContent?: string;
    gap?: number
}>`
    padding: 16px 40px;
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 40px; 
    border: 1px #5D3068 solid; 
    backdrop-filter: blur(60px); 
    justify-content: ${(props) => props.justifyContent || 'center'}; 
    align-items: center; 
    gap: ${(props) => props.gap || 40}px; 
    display: inline-flex;
`

export const ConvertDiv = styled.div`
    box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.24) inset; 
    border-radius: 16px; 
    border: 1px #5D3068 solid; 
    backdrop-filter: blur(60px);
    padding: 16px 25px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const BelowPart = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    @media (max-width: 670px){
        display: none;
    }
`