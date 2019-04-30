import React from "react"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { colors, typo, spacing } from "../../utilities"
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
    max-width: 323px;
  }
  h3 {
    font-size: ${typo.headlines.card.size}px;
    text-transform: ${typo.headlines.card.transform};
  }
  p {
    margin: 0;
    font-size: 18px;
  }
`

export default Services
