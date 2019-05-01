import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../../elements"
import { colors, typo, screenSizes, spacing } from "../../utilities"

/** Component */
const Form = () => (
  <StyledForm name="contact" method="POST" data-netlify="true">
    <div className="form-row">
      <input
        className="form-styling"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <input
        className="form-styling"
        type="email"
        name="email"
        placeholder="E-Mail"
        required
      />
    </div>
    <div className="form-row">
      <textarea
        className="form-styling"
        name="message"
        placeholder="Ihre Nachricht"
        required
      />
    </div>
    <div className="form-row">
      <div>
        <input
          type="checkbox"
          name="check_privacy"
          id="check_privacy"
          required
        />
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
  margin-top: ${spacing.half / 2}px;
  width: 100%;
  order: 2;
  input {
    &:first-child {
      margin-bottom: 16px;
    }
    &[type="text"],
    &[type="email"] {
      width: 100%;
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
  @media screen and (min-width: ${screenSizes.medium}px) {
    margin-top: 0;
    flex: 2;
    order: 0;
    input {
      &:first-child {
        margin-bottom: 0;
        margin-right: 16px;
      }
      &[type="text"],
      &[type="email"] {
        width: calc(50% - 8px);
      }
    }
  }
`

export default Form
