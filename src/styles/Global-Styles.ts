import { createGlobalStyle } from "styled-components";
import Actay from "../assets/fonts/Actay-Regular.otf";

const Globalstyles = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: #111012;
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
