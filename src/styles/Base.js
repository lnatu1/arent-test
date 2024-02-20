import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --color-brand: #FF963C;
        --color-dark: #414141;
        --color-dark-1: #2E2E2E;
        --color-dark-2: #777;
        --color-warning: #FFCC21;
        --color-white: #FFF;
        --max-width: 960px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Inter", sans-serif;
        font-size: 1.6rem;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
        color: inherit;
    }

    button {
        cursor: pointer;
        border: none;
        background: none;
    }

    *:disabled {
        cursor: not-allowed;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    img {
        max-width: 100%;
        display: block;
    }
`;

export default GlobalStyles;