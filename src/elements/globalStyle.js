import { createGlobalStyle } from "styled-components"
import { typo } from "../utilities"

export const GlobalStyle = createGlobalStyle`
  *,*:before,*:after{
    box-sizing: border-box;
  }
  
  html,body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-weight: 400;
    padding: 0;
    margin: 0;
    font-size: ${typo.text.std.size}px;
  }
  h1,h2,h3,h4{
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 10px;
  }
`
