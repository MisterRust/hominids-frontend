import { createGlobalStyle } from "styled-components";
import Actay from "../assets/fonts/Actay-Regular.otf";

const Globalstyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-image: url('/images/bg/main_bg.jpg');
    background-size: contain;
    font-family: 'Lato', sans-serif;
}

@font-face {
    font-family: 'Actay';
    src: url(${Actay}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
}
`;

export default Globalstyles;
