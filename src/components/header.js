import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { animateScroll } from "react-scroll"
import Logo from "../images/logomitschrift.png"
import { colors, screenSizes } from "../utilities"
import { SecondaryButton, FlexContainer } from "../elements"

/** Component */
const Header = ({ hasContact }) => (
  <StyledHeader>
    <FlexContainer>
      <Link to="/">
        <img src={Logo} alt="It-Consulting Grossmann" />
      </Link>
      {hasContact && (
        <SecondaryButton onClick={scrollToContact}>Kontakt</SecondaryButton>
      )}
    </FlexContainer>
  </StyledHeader>
)

/** Scroll-Function */
const scrollToContact = () => {
  const contactElement = document.getElementById("contact")
  if (contactElement) animateScroll.scrollTo(contactElement.offsetTop)
}

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

/** PropTypes */
Layout.propTypes = {
  hasContact: PropTypes.bool,
}

export default Header
