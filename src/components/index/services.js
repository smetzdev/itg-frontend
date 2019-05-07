import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { colors, typo, spacing, screenSizes } from "../../utilities"
import SoftwareIcon from "../../images/icons/icon-code.inline.svg"
import SecurityIcon from "../../images/icons/icon-security-check.inline.svg"
import AdminstrationIcon from "../../images/icons/icon-server.inline.svg"

/** Component */
const Services = () => {
  // Query
  const {
    wordpressPage: {
      acf: { alle_leistungen },
    },
  } = useStaticQuery(
    graphql`
      query ServicesQuery {
        wordpressPage(wordpress_id: { eq: 6 }) {
          acf {
            alle_leistungen {
              icon
              uberschrift
              text
            }
          }
        }
      }
    `
  )

  // IconList
  const icons = {
    code: SoftwareIcon,
    "security-check": SecurityIcon,
    server: AdminstrationIcon,
  }

  // Render
  return (
    <StyledServices>
      <FlexContainer>
        {alle_leistungen.map(leistung => {
          const Icon = icons[leistung.icon]
          return (
            <article>
              <Icon />
              <h3>{leistung.uberschrift}</h3>
              <p>{leistung.text}</p>
            </article>
          )
        })}
      </FlexContainer>
    </StyledServices>
  )
}

/** Styling */
const StyledServices = styled.section`
  padding-top: ${spacing.half - 18}px;
  padding-bottom: ${spacing.half}px;
  background-color: ${colors.grey.lightest};
  ${FlexContainer} {
    flex-wrap: wrap;
    justify-content: center;
  }
  svg {
    width: 120px;
    height: 120px;
    margin-bottom: 12px;
    .primary {
      fill: ${colors.primary.darker};
    }
    .secondary {
      fill: ${colors.secondary.base};
    }
  }
  article {
    text-align: center;
    max-width: calc(100%-30px);
    &:not(:last-of-type) {
      margin-bottom: ${spacing.half / 2}px;
    }
  }
  h3 {
    font-size: ${typo.headlines.card.size}px;
    text-transform: ${typo.headlines.card.transform};
  }
  p {
    margin: 0;
    font-size: 18px;
  }
  @media screen and (min-width: ${screenSizes.small}px) {
    article {
      max-width: 60%;
    }
  }
  @media screen and (min-width: ${screenSizes.big - 80}px) {
    article {
      max-width: 323px;
      &:not(:last-of-type) {
        margin-bottom: 0;
      }
    }
    ${FlexContainer} {
      justify-content: space-between;
    }
  }
`

export default Services
