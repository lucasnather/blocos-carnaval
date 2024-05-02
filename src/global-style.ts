import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: ${({theme}) => theme.SIZE.MD}rem;
        font-family: ${({theme}) => theme.FONT.fonts};
        font-weight: 400;
    }

`