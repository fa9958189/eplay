import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    min-width: 320px;
  }

  body:has([data-cart-open='true']) {
    overflow: hidden;
  }

  button,
  input {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 3px solid ${colors.green};
    outline-offset: 3px;
  }
`

export default GlobalStyle
