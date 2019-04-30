import React from "react"
import styled from "styled-components"
import Logo from "../images/logomitschrift.png"
import { colors, screenSizes } from "../utilities"
import { SecondaryButton, FlexContainer } from "../elements"

/** Component */
const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <img src={Logo} alt="It-Consulting Grossmann" />
      <SecondaryButton>Kontakt</SecondaryButton>
    </FlexContainer>
  </StyledHeader>
)

/** Styling */
const StyledHeader = styled.header`
  background-color: ${colors.primary.darker};
  ${FlexContainer} {
    height: 100px;
  }
  img {
    width: 150px;
    @media screen and (min-width: ${screenSizes.medium}px) {
      width: 210px;
    }
    height: auto;
  }
`

export default Header
