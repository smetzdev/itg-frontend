import React from "react"
import styled from "styled-components"
import Form from "./form"
import CircuitBG from "../../images/circuit-board.svg"
import { FlexContainer } from "../../elements"
import { colors, typo, spacing } from "../../utilities"

/** Component */
const Contact = () => (
  <StyledContact>
    <FlexContainer>
      <Form />
      <section>
        <h2>Kontakt</h2>
        <h3>IT-Consulting Grossmann</h3>
        <p>
          Stockland 39
          <br />
          66709 Weiskirchen-Konfeld
        </p>

        <p>
          <span>Tel:</span> +49 (0) 6876 791057
          <br />
          <span>Fax:</span> +49(0) 6876 791068
        </p>

        <p>it-consulting-grossmann@t-online.de</p>
      </section>
    </FlexContainer>
  </StyledContact>
)

/** Styling */
const StyledContact = styled.div`
  padding: ${spacing.half}px 0;
  background-image: url(${CircuitBG});
  section {
    flex: 1;
    align-self: flex-start;
    padding-left: ${spacing.half - 30}px;
  }
  h2 {
    font-size: ${typo.headlines.medium.size}px;
    text-transform: ${typo.headlines.medium.transform};
    color: ${colors.grey.darker};
  }
  h3 {
    font-size: 18px;
    text-transform: uppercase;
  }
  span {
    color: ${colors.grey.base};
  }
`

export default Contact
