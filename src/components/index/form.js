import React, { useState } from "react"
import styled from "styled-components"
import { PrimaryButton } from "../../elements"
import { colors, typo, screenSizes, spacing } from "../../utilities"

/** Component */
const Form = () => {
  // FormState with HooksAPI
  const initialFormState = {
    name: "",
    email: "",
    message: "",
    check_privacy: false,
  }
  const [formState, setFormState] = useState(initialFormState)

  // Form Submission
  const handleSubmit = async event => {
    // Prevent Default
    event.preventDefault()

    // Setup RequestData
    const API_URL = `${
      process.env.GATSBY_HWPG_URL
    }/wp-json/hwpgrossmann/v2/submit`
    const reqObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formState,
        api_key: process.env.GATSBY_HWPG_API_KEY,
      }),
    }

    // Fetch Request
    const response = await fetch(API_URL, reqObject)
    const data = await response.json()

    // Clear Form on Success
    if (data.success) setFormState(initialFormState)
  }

  // Render
  return (
    <StyledForm name="contact" method="POST" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          className="form-styling"
          type="text"
          name="name"
          value={formState.name}
          onChange={event =>
            setFormState({ ...formState, name: event.target.value })
          }
          placeholder="Name"
          required
        />
        <input
          className="form-styling"
          type="email"
          name="email"
          value={formState.email}
          onChange={event =>
            setFormState({ ...formState, email: event.target.value })
          }
          placeholder="E-Mail"
          required
        />
      </div>
      <div className="form-row">
        <textarea
          className="form-styling"
          name="message"
          value={formState.message}
          onChange={event =>
            setFormState({ ...formState, message: event.target.value })
          }
          placeholder="Ihre Nachricht"
          required
        />
      </div>
      <div className="form-row">
        <div>
          <input
            type="checkbox"
            name="check_privacy"
            checked={formState.check_privacy}
            onChange={event =>
              setFormState({
                ...formState,
                check_privacy: event.target.checked,
              })
            }
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
}

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
