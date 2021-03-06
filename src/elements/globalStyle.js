import { createGlobalStyle } from "styled-components"
import { typo, colors } from "../utilities"

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
    color: ${colors.grey.darkest}
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 10px;
  }
`
