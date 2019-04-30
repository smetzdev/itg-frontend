import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../../elements"
import { colors, typo } from "../../utilities"

/** Component */
const Form = () => (
  <StyledForm action="#">
    <div className="form-row">
      <input class="form-styling" type="text" name="name" placeholder="Name" />
      <input
        class="form-styling"
        type="email"
        name="email"
        placeholder="E-Mail"
      />
    </div>
    <div className="form-row">
      <textarea
        class="form-styling"
        name="message"
        placeholder="Ihre Nachricht"
      />
    </div>
    <div className="form-row">
      <div>
        <input type="checkbox" name="check_privacy" id="check_privacy" />
        <label htmlFor="check_privacy">
          Ich habe die Datenschutzerklärung gelesen und akzeptiert.
        </label>
      </div>
      <PrimaryButton as="input" type="submit" value="Senden" />
    </div>
  </StyledForm>
)

/** Styling */
const StyledForm = styled.form`
  flex: 2;
  input {
    &:first-child {
      margin-right: 16px;
    }
    &[type="text"],
    &[type="email"] {
      width: calc(50% - 8px);
    }
  }
  textarea {
    width: 100%;
    resize: none;
    min-height: 220px;
  }

  label {
    font-size: 14px;
  }
  .form-row {
    &:last-of-type {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:not(last-child) {
      margin-bottom: 16px;
    }
  }
  .form-styling {
    background-color: ${colors.primary.lightest};
    outline: none;
    border: none;
    padding: 17px;
    font-size: ${typo.text.std.size}px;
    text-transform: uppercase;
    &::-webkit-input-placeholder {
      color: ${colors.primary.darker};
    }
    color: ${colors.primary.darker};
  }
`

export default Form
