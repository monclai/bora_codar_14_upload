import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

html, body{
    font-size: 1.6rem;
    background: #FBFAFF;
    min-height: 100vh;
    line-height: 130%;
}
`;
