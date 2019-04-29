import styled from "styled-components"
import { colors, typo } from "../utilities"

export const Button = styled.button`
  height: 55px;
  width: 175px;
  display: inline-block;
  background-color: transparent;
  text-decoration: none;
  font-size: ${typo.buttons.size}px;
  text-transform: ${typo.buttons.transform};
  border: none;
  text-align: center;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;
  cursor: pointer;
`
export const PrimaryButton = styled(Button)`
  background-color: ${colors.primary.darker};
  color: ${colors.primary.lightest};
`
export const SecondaryButton = styled(Button)`
  border: 1px solid ${colors.primary.lightest};
  color: ${colors.primary.lightest};
  &:hover {
    background-color: ${colors.primary.lightest};
    color: ${colors.primary.darker};
  }
`
