import { createGlobalStyle } from "styled-components"
import { typo } from "../utilities"

export const GlobalStyle = createGlobalStyle`
  *,*:before,*:after{
    box-sizing: border-box;
  }
  
  html,body {
    padding: 0;
    margin: 0;
    font-size: ${typo.text.std.size}px;
  }
`
