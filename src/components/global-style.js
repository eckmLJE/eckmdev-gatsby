import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        font-size: 16px;
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

    a {
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: none;
    }

`
