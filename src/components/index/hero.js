import React from "react"
import styled from "styled-components"
import { FlexContainer } from "../../elements"
import { typo, colors } from "../../utilities"
import Frank from "../../images/passfoto_cutted.png"
import BackgroundImage from "../../images/header_background_colored.jpg"

const { weight, size, transform } = typo.headlines.big

const StyledHero = styled.section`
  background-image: url(${BackgroundImage});
  background-size: cover;
  ${FlexContainer} {
    height: 464px;
  }
  h1 {
    color: ${colors.white.base};
    font-weight: ${weight};
    font-size: ${size}px;
    text-transform: ${transform};
    white-space: nowrap;
  }
  img {
    align-self: flex-end;
    width: 434px;
    height: auto;
  }
`

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

export default Hero
