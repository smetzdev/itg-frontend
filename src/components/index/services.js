import React from "react"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { colors, typo, spacing, screenSizes } from "../../utilities"
import SoftwareIcon from "../../images/icons/icon-code.inline.svg"
import SecurityIcon from "../../images/icons/icon-security-check.inline.svg"
import AdminstrationIcon from "../../images/icons/icon-server.inline.svg"

/** Component */
const Services = () => (
  <StyledServices>
    <FlexContainer>
      <article>
        <SoftwareIcon />
        <h3>Software</h3>
        <p>
          Unsere kundenspezifischen Softwarelösungen werden nach Ihrem
          Leistungsanspruch designt.
        </p>
      </article>
      <article>
        <SecurityIcon />
        <h3>Sicherheit</h3>
        <p>
          Gemeinsam mit Ihnen ermitteln wir Ihre Sicherheitsanforderungen und
          setzen Diese um.
        </p>
      </article>
      <article>
        <AdminstrationIcon />
        <h3>Administration</h3>
        <p>
          Wir bieten Ihnen eine professionelle Adminstration von Servern,
          Storage und Netzen.
        </p>
      </article>
    </FlexContainer>
  </StyledServices>
)

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
