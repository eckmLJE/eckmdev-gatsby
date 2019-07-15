import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    :root {
        font-size: 14px !important;
        /* transition: font-size 0.2s; */
    }

    @media screen and (max-width: 480px) {
        :root {
            font-size: 12px !important;
        }
    }

    * {
        box-sizing: border-box;
    }

    body {
        padding: 0 0 64px;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    li {
        cursor: default;
    }

`
