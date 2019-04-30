import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { FlexContainer } from "../elements"
import { colors, typo, spacing, screenSizes } from "../utilities"

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
    flex-wrap: wrap;
    justify-content: center;
    padding-top: ${spacing.half / 2}px;
    padding-bottom: ${spacing.half / 2}px;
  }
  h4,
  ul {
    font-size: ${typo.text.footer.size}px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
  ul {
    margin-top: 10px;
    list-style-type: none;
    li {
      display: inline-block;
      padding: 0;
      &:not(:last-child) {
        margin-right: 32px;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
  @media screen and (min-width: ${screenSizes.small - 114}px) {
    ul {
      margin-top: 0;
      margin-left: 30px;
    }
  }
  @media screen and (min-width: ${screenSizes.medium}px) {
    ${FlexContainer} {
      height: 100px;
      padding-top: 0;
      padding-bottom: 0;
      justify-content: space-between;
    }
    ul {
      margin-left: 0;
    }
  }
`

export default Footer
