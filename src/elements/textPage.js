import React from "react"
import styled from "styled-components"
import { spacing, typo, colors } from "../utilities"
import { Container } from "./container"
import CircuitBG from "../images/circuit-board.svg"

/** Component */
const TextPage = ({ children }) => (
  <StyledTextPage>
    <Container dangerouslySetInnerHTML={{ __html: children }} />
  </StyledTextPage>
)

/** Styling */
const StyledTextPage = styled.main`
  padding-top: ${spacing.half}px;
  padding-bottom: ${spacing.half}px;
  background-image: url(${CircuitBG});
  h1,
  h2 {
    text-transform: ${typo.headlines.medium.transform};
    color: ${colors.grey.darker};
    word-break: break-all;
    hyphens: auto;
  }
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    color: ${colors.grey.darker};
    margin-bottom: 2px !important;
  }
  p {
    margin-top: 0;
  }
`

export default TextPage
