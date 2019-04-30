import React from "react"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { typo, colors, screenSizes } from "../../utilities"
import Frank from "../../images/passfoto_cutted.png"
import BackgroundImage from "../../images/header_background_colored.jpg"

/** Component */
const Hero = () => (
  <StyledHero>
    <FlexContainer>
      <h1>
        IT-Consulting
        <br />
        Frank Grossmann
      </h1>
      <img src={Frank} alt="Frank Grossmann" />
    </FlexContainer>
  </StyledHero>
)

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
    width: 75%;
    height: auto;
  }
  @media screen and (min-width: ${screenSizes.medium}px) {
    h1 {
      font-size: ${size}px;
      align-self: center;
    }
    img {
      width: 434px;
    }
    ${FlexContainer} {
      justify-content: space-between;
    }
  }
`
export default Hero
