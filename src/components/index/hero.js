import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { typo, colors, screenSizes } from "../../utilities"
import Frank from "../../images/passfoto_cutted.png"
import BackgroundImage from "../../images/header_background_colored.jpg"

// TODO: Portrait Image and BackgroundImage from Backend
/** Component */
const Hero = () => {
  // Query
  const {
    wordpressPage: { acf: data },
  } = useStaticQuery(
    graphql`
      query Hero {
        wordpressPage(wordpress_id: { eq: 6 }) {
          acf {
            uberschrift_hero
            hintergrundbild
            portrait
          }
        }
      }
    `
  )

  // Render
  return (
    <StyledHero>
      <FlexContainer>
        <h1 dangerouslySetInnerHTML={{ __html: data.uberschrift_hero }} />
        <img src={Frank} alt="Frank Grossmann" />
      </FlexContainer>
    </StyledHero>
  )
}

/** Styling */
const { weight, size, transform } = typo.headlines.big

const StyledHero = styled.section`
  background-image: url(${BackgroundImage});
  background-size: cover;
  ${FlexContainer} {
    height: 464px;
    flex-wrap: wrap;
    justify-content: center;
  }
  h1 {
    color: ${colors.white.base};
    font-weight: ${weight};
    font-size: 9vw;
    text-transform: ${transform};
    white-space: nowrap;
    align-self: flex-end;
  }
  img {
    align-self: flex-end;
    max-width: 100%;
    height: auto;
  }
  @media screen and (min-width: ${screenSizes.small}px) {
    h1 {
      font-size: ${size}px;
      align-self: center;
    }
  }
  @media screen and (min-width: ${screenSizes.big}px) {
    img {
      width: 434px;
    }
    ${FlexContainer} {
      justify-content: space-between;
    }
  }
`
export default Hero
