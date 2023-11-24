import Header from "components/layout/header";
// import styled from "styled-components";
import { H6 } from "styles";
// import cardImg from "../../assets/cards/card_avatar.png";
import {
  OddIcon,
  SBbox,
  SvgHor,
  Span,
  OptionBtn,
  Space,
  WalletBox,
  H_32,
  SvgDot,
  SvgSign,
  FullDiv,
  Container,
  MenuBox,
  MenuItem,
  H1_cst,
  BtnContainer,
  LeftBtns,
  IconBtn,
  TotalBtn,
  RightBtns,
  LiveBtn,
  FlexBox,
  AvatarBox,
  AvatarLg,
  AvatarBoxSm,
  SmallAvatars,
  MintBox,
  StageBox,
  TotalMint,
  UpperText,
  H20,
  PercentBar,
  Percent,
  ControlBox,
  Control,
  Btn,
  BtnNum,
  ControlBtn,
  Explore,
  CenterText,
} from "./index.style";

// const FullDiv = styled.div`
//   width: 100%;
// `;

// const Container = styled.div`
//   position: relative;
//   max-width: 1500px;
//   margin: 0 auto;
//   padding: 0 30px;
//   @media (max-width: 560px) {
//     padding: 0 15px;
//   }
// `;

// const Space = styled.div<{ $height: number; $mdH?: number; $smH?: number }>`
//   width: 100%;
//   height: ${(props) => props.$height}px;
//   @media (max-width: 768px) {
//     height: ${(props) => props.$mdH}px;
//   }
//   @media (max-width: 500px) {
//     height: ${(props) => props.$smH}px;
//   }
// `;

// const MenuItem = styled.div`
//   color: #fff;
//   font-family: Lato;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   text-transform: uppercase;
//   cursor: pointer;
// `;

// const MenuBox = styled.div`
//   display: inline-flex;
//   width: 100%;
//   align-items: center;
//   gap: 24px;
//   @media (max-width: 1080px) {
//     gap: 0;
//     justify-content: center;
//   }
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const Svg = (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="40"
//     height="2"
//     viewBox="0 0 40 2"
//     fill="none"
//   >
//     <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
//     <defs>
//       <linearGradient
//         id="paint0_linear_644_287"
//         x1="0"
//         y1="0.5"
//         x2="40"
//         y2="0.5"
//         gradientUnits="userSpaceOnUse"
//       >
//         <stop stopColor="#111012" />
//         <stop offset="0.395833" stopColor="#AF50BD" />
//         <stop offset="0.583333" stopColor="#AF50BD" />
//         <stop offset="1" stopColor="#121013" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// const BtnContainer = styled.div`
//   display: flex;
//   @media (max-width: 1020px) {
//     justify-content: center;
//     gap: 40px;
//   }
// `;
// const LeftBtns = styled.div`
//   display: flex;
//   gap: 10px;
//   width: 50%;
//   @media (max-width: 1020px) {
//     width: auto;
//     gap: 40px;
//   }
//   @media (max-width: 560px) {
//     width: auto;
//     justify-content: space-between;
//     gap: 5px;
//   }
// `;
// const RightBtns = styled.div`
//   width: 50%;
//   @media (max-width: 1020px) {
//     width: auto;
//     gap: 40px;
//   }
//   @media (max-width: 560px) {
//     width: auto;
//     gap: 0;
//   }
// `;
// const IconBtn = styled.div`
//   display: inline-flex;
//   padding: 6px 24px;
//   height: 36px;
//   align-items: center;
//   gap: 24px;
//   border-radius: 1000px;
//   border: 1px solid #5d3068;
//   background: rgba(17, 6, 6, 0.05);
//   box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
//     0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
//   backdrop-filter: blur(30px);
//   cursor: pointer;
//   &:hover {
//     background-color: #5d3068;
//   }
//   &:active {
//     background-color: #5d306860;
//     transform: translate(3px, 3px);
//   }
//   @media (max-width: 1020px) {
//     height: 62px;
//   }
//   @media (max-width: 450px) {
//     height: 40px;
//     font-size: 12px;
//     padding: 6px;
//   }
// `;
// const TotalBtn = styled.div`
//   display: inline-flex;
//   height: 40px;
//   padding: 6px 24px;
//   align-items: center;
//   gap: 24px;
//   flex-shrink: 0;
//   border-radius: 1000px;
//   border: 1px solid #5d3068;
//   background: rgba(17, 6, 6, 0.05);
//   box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
//     0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
//   backdrop-filter: blur(30px);
//   cursor: pointer;
//   color: white;
//   &:hover {
//     background-color: #5d3068;
//   }
//   &:active {
//     background-color: #5d306860;
//     transform: translate(3px, 3px);
//   }
//   @media (max-width: 1020px) {
//     height: 62px;
//   }
//   @media (max-width: 450px) {
//     height: 40px;
//     font-size: 12px;
//     padding: 6px;
//   }
// `;

// const LiveBtn = styled.div`
//   display: inline-flex;
//   padding: 8px 32px;
//   align-items: center;
//   gap: 16px;
//   border-radius: 24px;
//   border: 3px solid #5d3068;
//   box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
//     0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
//   backdrop-filter: blur(30px);
//   color: white;
//   &:hover {
//     background-color: #5d3068;
//   }
//   &:active {
//     background-color: #5d306860;
//     transform: translate(3px, 3px);
//   }
//   @media (max-width: 450px) {
//     height: 40px;
//     padding: 8px 15px;
//   }
// `;

// const FlexBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 1020px) {
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const Box = styled.div`
//   width: 50%;
//   padding: 0 30px 0 0;
//   @media (max-width: 1020px) {
//     width: 100%;
//     padding: 50px 50px 0 50px;
//   }
//   @media (max-width: 650px) {
//     padding: 10px 10px 0 10px;
//   }
// `;

// const AvatarBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   gap: 36px;
// `;

// const AvatarLg = styled.div`
//   width: 100%;
//   height: 700px;
//   background-image: url(${cardImg});
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
//   border-radius: 24px;
//   @media (max-width: 1400px) {
//     height: 550px;
//   }
//   @media (max-width: 768px) {
//     height: 450px;
//   }
//   @media (max-width: 560px) {
//     height: 327px;
//   }
// `;

// const SmallAvatars = styled(AvatarLg)`
//   height: 152px;
//   max-width: 152px;
//   border-radius: 10px;
//   @media (max-width: 1400px) {
//     height: 122px;
//     max-width: 130px;
//   }
//   @media (max-width: 1020px) {
//     max-width: 180px;
//     height: 150px;
//   }
//   @media (max-width: 768px) {
//     max-width: 130px;
//     height: 120px;
//   }
//   @media (max-width: 560px) {
//     height: 110px;
//   }
//   @media (max-width: 450px) {
//     height: 70px;
//   }
// `;

// const AvatarBoxSm = styled.div`
//   width: 100%;
//   height: 152px;
//   display: flex;
//   flex-wrap: nowrap;
//   justify-content: space-between;
//   @media (max-width: 1400px) {
//     gap: 15px;
//   }
//   @media (max-width: 560px) {
//     height: 110px;
//   }
// `;
// const MintBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   padding: 0 0 0 20px;
//   gap: 36px;
//   @media (max-width: 1300px) {
//     padding-left: 15px;
//   }
//   @media (max-width: 1020px) {
//     padding: 50px;
//   }
//   @media (max-width: 650px) {
//     padding: 10px;
//   }
// `;

// const StageBox = styled.div`
//   width: 100%;
//   height: 700px;
//   flex-shrink: 0;
//   border-radius: 24px;
//   border: 3px solid #5d3068;
//   background: rgba(255, 255, 255, 0.04);
//   box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
//     0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
//   backdrop-filter: blur(30px);
//   padding: 40px;
//   @media (max-width: 680px) {
//     padding: 10px 10px 30px 10px;
//   }
// `;

// const TotalMint = styled.div`
//   display: flex;
//   width: 100%;
//   padding: 20px 32px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 24px;
//   border-radius: 24px;
//   border: 3px solid #5d3068;
//   background: rgba(255, 255, 255, 0.04);
//   box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.24) inset,
//     0px 0px 68px 0px rgba(255, 255, 255, 0.05) inset;
//   backdrop-filter: blur(30px);
//   @media (max-width: 450px) {
//     padding: 20px 15px;
//   }
// `;

// const OddIcon = styled.div`
//   display: inline-flex;
//   padding: 6px 24px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   border-radius: 8px;
//   background: #1b131e;
//   color: #b869c5;
//   font-feature-settings: "ss01" on;
//   font-family: Lato;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
//   @media (max-width: 530px) {
//     font-size: 14px;
//   }
// `;

// const SBbox = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Span = styled.span`
//   color: #b869c5;
//   font-feature-settings: "ss01" on;
//   font-family: Lato;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

// const H_32 = styled(H2)`
//   font-size: 32px;
//   @media (max-width: 1400px) {
//     font-size: 28px;
//   }
//   @media (max-width: 1200px) {
//     font-size: 24px;
//   }
//   @media (max-width: 768px) {
//     text-align: center;
//   }
//   @media (max-width: 530px) {
//     font-size: 18px;
//   }
//   @media (max-width: 450px) {
//     font-size: 16px;
//   }
// `;

// const WalletBox = styled.div`
//   display: flex;
// `;

// const OptionBtn = styled.div`
//   transition: 0.1s all ease-in-out;
//   padding: 5px 10px 10px 15px;
//   &:hover {
//     border-radius: 12px;
//     border: 1px solid #111012;
//     background: rgba(255, 255, 255, 0.05);
//   }
//   @media (max-width: 450px) {
//     padding: 3px;
//   }
// `;

// const SvgHor = styled.svg`
//   stroke-width: 1px;
//   stroke: rgba(17, 16, 18, 0);
//   width: 100%;
//   height: 10px;
// `;

// const UpperText = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `;

// const H20 = styled(H6)`
//   font-size: 20px;
//   @media (max-width: 450px) {
//     font-size: 15px;
//   }
// `;

// const PercentBar = styled.div`
//   width: 100%;
//   position: relative;
//   height: 8px;
//   background-color: #3a3440;
//   border-radius: 4px;
// `;

// const Percent = styled.div`
//   width: 76%;
//   position: absolute;
//   height: 8px;
//   background-color: #af50bd;
//   border-radius: 4px;
// `;

// const ControlBox = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   @media (max-width: 1300px) {
//     flex-direction: column;
//     justify-content: center;
//   }
// `;

// const Control = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 15px;
//   @media (max-width: 1300px) {
//     justify-content: center;
//     gap: 20px;
//     margin-bottom: 20px;
//   }
// `;

// const Btn = styled.div`
//   display: flex;
//   width: 59px;
//   height: 59px;
//   padding: 8px;
//   justify-content: center;
//   align-items: center;
//   border-radius: 12px;
//   background: #af51bd;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-size: 18px;
// `;

// const BtnNum = styled(Btn)`
//   width: 100px;
// `;

// const ControlBtn = styled(Btn)`
//   width: 250px;
//   @media (max-width: 1300px) {
//     width: 70%;
//     margin-left: 15%;
//   }
//   @media (max-width: 530px) {
//     width: 95%;
//     margin-left: 2.5%;
//     font-size: 14px;
//   }
// `;

// const Explore = styled(TotalMint)`
//   font-size: 18px;
//   color: white;
//   justify-content: center;
// `;

// const CenterText = styled.div`
//   width: 100%;
//   text-align: center;
// `;

// const SvgDot = styled.svg`
//   width: 8px;
//   height: 8px;
//   margin: 0 20px 8px 20px;
//   @media (max-width: 450px) {
//     margin: 0 5px 3px 10px;
//   }
// `;

// const SvgSign = styled.svg`
//   width: 28px;
//   height: 24px;
//   margin-left: 40px;
//   margin-right: 10px;
//   @media (max-width: 450px) {
//     margin: 0 10px 0px 15px;
//     width: 20px;
//     height: 16px;
//   }
// `;

// const H1_cst = styled(H1)`
//   @media (max-width: 1080px) {
//     text-align: center;
//     font-weight: 900;
//   }
//   @media (max-width: 768px) {
//     font-size: 42px;
//   }
//   @media (max-width: 450px) {
//     font-size: 32px;
//   }
// `;

const Svg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="2"
    viewBox="0 0 40 2"
    fill="none"
  >
    <path d="M0 1L40 1" stroke="url(#paint0_linear_644_287)" />
    <defs>
      <linearGradient
        id="paint0_linear_644_287"
        x1="0"
        y1="0.5"
        x2="40"
        y2="0.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#111012" />
        <stop offset="0.395833" stopColor="#AF50BD" />
        <stop offset="0.583333" stopColor="#AF50BD" />
        <stop offset="1" stopColor="#121013" />
      </linearGradient>
    </defs>
  </svg>
);

const horizonLine = (
  <SvgHor
    xmlns="http://www.w3.org/2000/svg"
    width="582"
    height="2"
    viewBox="0 0 582 2"
    fill="none"
  >
    <path d="M0 1L582 0.999949" stroke="url(#paint0_linear_1169_2113)" />
    <defs>
      <linearGradient
        id="paint0_linear_1169_2113"
        x1="-4.37114e-08"
        y1="0.5"
        x2="582"
        y2="0.499949"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#111012" stop-opacity="0" />
        <stop offset="0.395833" stop-color="#AF50BD" />
        <stop offset="0.583333" stop-color="#AF50BD" />
        <stop offset="1" stop-color="#121013" />
        <stop offset="1" stop-color="#121013" stop-opacity="0" />
      </linearGradient>
    </defs>
  </SvgHor>
);

const KeyButton = (
  <SBbox>
    <H6 $color="white" $weight={100}>
      <svg
        style={{ width: 24, height: 24 }}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_1169_2110)">
          <path
            d="M19 8.424V7C19 5.14348 18.2625 3.36301 16.9497 2.05025C15.637 0.737498 13.8565 0 12 0C10.1435 0 8.36301 0.737498 7.05025 2.05025C5.7375 3.36301 5 5.14348 5 7V8.424C4.10936 8.81271 3.35129 9.45252 2.8185 10.2652C2.28571 11.0779 2.00128 12.0282 2 13V19C2.00159 20.3256 2.52888 21.5964 3.46622 22.5338C4.40356 23.4711 5.67441 23.9984 7 24H17C18.3256 23.9984 19.5964 23.4711 20.5338 22.5338C21.4711 21.5964 21.9984 20.3256 22 19V13C21.9987 12.0282 21.7143 11.0779 21.1815 10.2652C20.6487 9.45252 19.8906 8.81271 19 8.424ZM7 7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V8H7V7ZM20 19C20 19.7956 19.6839 20.5587 19.1213 21.1213C18.5587 21.6839 17.7956 22 17 22H7C6.20435 22 5.44129 21.6839 4.87868 21.1213C4.31607 20.5587 4 19.7956 4 19V13C4 12.2044 4.31607 11.4413 4.87868 10.8787C5.44129 10.3161 6.20435 10 7 10H17C17.7956 10 18.5587 10.3161 19.1213 10.8787C19.6839 11.4413 20 12.2044 20 13V19Z"
            fill="white"
          />
          <path
            d="M12 14C11.7348 14 11.4804 14.1054 11.2929 14.2929C11.1054 14.4804 11 14.7348 11 15V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V15C13 14.7348 12.8946 14.4804 12.7071 14.2929C12.5196 14.1054 12.2652 14 12 14Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1169_2110">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <OddIcon>VIP Whitelist</OddIcon>
    </H6>
    <Span>ENDED</Span>
  </SBbox>
);

const OptionRow = (
  <OptionBtn>
    <Space $height={10} />
    {KeyButton}
    <Space $height={10} />
    <WalletBox>
      <H_32 $color="white" $weight={100}>
        {" "}
        5 PER WALLET{" "}
        <SvgDot
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <circle cx="4" cy="4" r="4" fill="white" />
        </SvgDot>
        Price
        <SvgSign
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
        >
          <g clip-path="url(#clip0_1169_2106)">
            <path
              d="M20.6172 7.30782C20.1195 7.02125 19.4797 7.02125 18.9109 7.30782L14.9297 9.672L12.2281 11.1765L8.31797 13.5407C7.82031 13.8272 7.18047 13.8272 6.61172 13.5407L3.55469 11.678C3.05703 11.3914 2.70156 10.8183 2.70156 10.1735V6.5914C2.70156 6.01826 2.98594 5.44513 3.55469 5.08692L6.61172 3.29588C7.10937 3.00931 7.74922 3.00931 8.31797 3.29588L11.375 5.15856C11.8727 5.44513 12.2281 6.01826 12.2281 6.66304V9.02722L14.9297 7.4511V5.01528C14.9297 4.44214 14.6453 3.86901 14.0766 3.5108L8.38906 0.143636C7.89141 -0.142931 7.25156 -0.142931 6.68281 0.143636L0.853125 3.58244C0.284375 3.86901 0 4.44214 0 5.01528V11.7496C0 12.3227 0.284375 12.8959 0.853125 13.2541L6.61172 16.6213C7.10937 16.9078 7.74922 16.9078 8.31797 16.6213L12.2281 14.3287L14.9297 12.7526L18.8398 10.4601C19.3375 10.1735 19.9773 10.1735 20.5461 10.4601L23.6031 12.2511C24.1008 12.5377 24.4562 13.1108 24.4562 13.7556V17.3377C24.4562 17.9108 24.1719 18.4839 23.6031 18.8421L20.6172 20.6332C20.1195 20.9198 19.4797 20.9198 18.9109 20.6332L15.8539 18.8421C15.3562 18.5556 15.0008 17.9824 15.0008 17.3377V15.0451L12.2992 16.6213V18.9854C12.2992 19.5586 12.5836 20.1317 13.1523 20.4899L18.9109 23.8571C19.4086 24.1436 20.0484 24.1436 20.6172 23.8571L26.3758 20.4899C26.8734 20.2033 27.2289 19.6302 27.2289 18.9854V12.1795C27.2289 11.6063 26.9445 11.0332 26.3758 10.675L20.6172 7.30782Z"
              fill="#8247E5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1169_2106">
              <rect width="28" height="24" fill="white" />
            </clipPath>
          </defs>
        </SvgSign>
        5.00
      </H_32>
    </WalletBox>
  </OptionBtn>
);

export default function MintingWFC() {
  // const { width } = useWindowSize();

  return (
    <FullDiv>
      <Container>
        <Space $height={100} $mdH={30} />
        <Header />
        <Space $height={30} $mdH={0} />
        <MenuBox>
          <MenuItem>MAIN</MenuItem>
          {Svg}
          <MenuItem>LAUNCHPAD</MenuItem>
        </MenuBox>
        <Space $height={80} />
        <H1_cst $weight={500} $color="white">
          WFC Polygon Era
        </H1_cst>
        <Space $height={20} />
        <BtnContainer>
          <LeftBtns>
            <IconBtn>
              <svg
                style={{ width: 28, height: 24 }}
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="24"
                viewBox="0 0 28 24"
                fill="none"
              >
                <g clip-path="url(#clip0_1169_2078)">
                  <path
                    d="M20.6172 7.30782C20.1195 7.02125 19.4797 7.02125 18.9109 7.30782L14.9297 9.672L12.2281 11.1765L8.31797 13.5407C7.82031 13.8272 7.18047 13.8272 6.61172 13.5407L3.55469 11.678C3.05703 11.3914 2.70156 10.8183 2.70156 10.1735V6.5914C2.70156 6.01826 2.98594 5.44513 3.55469 5.08692L6.61172 3.29588C7.10937 3.00931 7.74922 3.00931 8.31797 3.29588L11.375 5.15856C11.8727 5.44513 12.2281 6.01826 12.2281 6.66304V9.02722L14.9297 7.4511V5.01528C14.9297 4.44214 14.6453 3.86901 14.0766 3.5108L8.38906 0.143636C7.89141 -0.142931 7.25156 -0.142931 6.68281 0.143636L0.853125 3.58244C0.284375 3.86901 0 4.44214 0 5.01528V11.7496C0 12.3227 0.284375 12.8959 0.853125 13.2541L6.61172 16.6213C7.10937 16.9078 7.74922 16.9078 8.31797 16.6213L12.2281 14.3287L14.9297 12.7526L18.8398 10.4601C19.3375 10.1735 19.9773 10.1735 20.5461 10.4601L23.6031 12.2511C24.1008 12.5377 24.4562 13.1108 24.4562 13.7556V17.3377C24.4562 17.9108 24.1719 18.4839 23.6031 18.8421L20.6172 20.6332C20.1195 20.9198 19.4797 20.9198 18.9109 20.6332L15.8539 18.8421C15.3562 18.5556 15.0008 17.9824 15.0008 17.3377V15.0451L12.2992 16.6213V18.9854C12.2992 19.5586 12.5836 20.1317 13.1523 20.4899L18.9109 23.8571C19.4086 24.1436 20.0484 24.1436 20.6172 23.8571L26.3758 20.4899C26.8734 20.2033 27.2289 19.6302 27.2289 18.9854V12.1795C27.2289 11.6063 26.9445 11.0332 26.3758 10.675L20.6172 7.30782Z"
                    fill="#8247E5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1169_2078">
                    <rect width="28" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </IconBtn>
            <TotalBtn>total item: 3000</TotalBtn>
          </LeftBtns>
          <RightBtns>
            <LiveBtn>
              <svg
                style={{ height: 40, width: 40 }}
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="20"
                  fill="#AF50BD"
                  fill-opacity="0.2"
                />
                <circle cx="20.0011" cy="20.0001" r="9.09091" fill="#AF50BD" />
              </svg>
              <span style={{ marginLeft: 5 }}>LIVE</span>
            </LiveBtn>
          </RightBtns>
        </BtnContainer>
        <Space $height={20} />
        <FlexBox>
          <AvatarBox>
            <AvatarLg></AvatarLg>
            <AvatarBoxSm>
              <SmallAvatars />
              <SmallAvatars />
              <SmallAvatars />
              <SmallAvatars />
            </AvatarBoxSm>
          </AvatarBox>
          <MintBox>
            <StageBox>
              <H_32 $color="white" $weight={100}>
                Mint Stages
              </H_32>
              {OptionRow}
              {horizonLine}
              <Space $height={10} />
              {OptionRow}
              {horizonLine}
              <Space $height={10} />
              {OptionRow}
              {horizonLine}
              <Space $height={10} />
              {OptionRow}
              {horizonLine}
              <Space $height={10} />
            </StageBox>
            <TotalMint>
              <UpperText>
                <H20 $weight={300} $color="white">
                  Total minted
                </H20>
                <H20 $weight={300} $color="white">
                  76% (2304/3000)
                </H20>
              </UpperText>
              <PercentBar>
                <Percent />
              </PercentBar>
              <ControlBox>
                <Control>
                  <Btn>-</Btn>
                  <BtnNum>1</BtnNum>
                  <Btn>+</Btn>
                </Control>
                <ControlBtn>Connect your Polygon wallet</ControlBtn>
              </ControlBox>
            </TotalMint>
            <Explore>
              <CenterText> Explore collection</CenterText>
            </Explore>
          </MintBox>
        </FlexBox>
      </Container>
      <Space $height={200} />
    </FullDiv>
  );
}
