import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Container } from "../../elements"
import { spacing, colors, typo, screenSizes } from "../../utilities"
import CircuitBG from "../../images/circuit-board.svg"

/** Component */
const Main = () => {
  const {
    wordpressPage: { acf: data },
  } = useStaticQuery(
    graphql`
      query Main {
        wordpressPage(wordpress_id: { eq: 6 }) {
          acf {
            uberschrift_hauptext
            inhalt_haupttext
          }
        }
      }
    `
  )
  return (
    <StyledMain>
      <Container>
        <h2 dangerouslySetInnerHTML={{ __html: data.uberschrift_hauptext }} />
        <article dangerouslySetInnerHTML={{ __html: data.inhalt_haupttext }} />
      </Container>
    </StyledMain>
  )
}

/** Styling */
const StyledMain = styled.main`
  padding: ${spacing.half}px 0;
  background-image: url(${CircuitBG});
  article {
    p {
      margin-top: 0;
      hyphens: auto;
      font-size: ${typo.text.bigger.size}px;
      &:nth-of-type(even) {
        margin-bottom: 0;
      }
    }
  }
  h2 {
    color: ${colors.grey.darker};
    font-size: ${typo.headlines.medium.size}px;
    text-transform: ${typo.headlines.medium.transform};
  }
  @media screen and (min-width: ${screenSizes.medium}px) {
    article {
      column-count: 2;
    }
  }
`

export default Main
