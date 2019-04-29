import React from "react"
import styled from "styled-components"
import Logo from "../images/logomitschrift.png"
import { colors } from "../utilities"
import { SecondaryButton, FlexContainer } from "../elements"

const StyledHeader = styled.header`
  background-color: ${colors.primary.darker};
  ${FlexContainer} {
    height: 100px;
  }
  img {
    width: 210px;
    height: auto;
  }
`

/** Component */
const Header = () => (
  <StyledHeader>
    <FlexContainer>
      <img src={Logo} alt="It-Consulting Grossmann" />
      <SecondaryButton>Kontakt</SecondaryButton>
    </FlexContainer>
  </StyledHeader>
)

export default Header
