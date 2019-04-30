import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FlexContainer } from "../elements"
import { colors, typo } from "../utilities"

/** Component */
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <StyledFooter>
      <FlexContainer>
        <h4>&copy; {currentYear} IT-Consulting Grossmann</h4>
        <ul>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
        </ul>
      </FlexContainer>
    </StyledFooter>
  )
}

/** Styling */
const StyledFooter = styled.footer`
  background-color: ${colors.primary.darker};
  color: ${colors.primary.lightest};
  ${FlexContainer} {
    height: 100px;
  }
  h4,
  ul {
    font-size: ${typo.text.footer.size}px;
    text-transform: uppercase;
  }
  ul {
    list-style-type: none;
    li {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 32px;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`

export default Footer
