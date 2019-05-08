import React from "react"
import styled from "styled-components"
import { Portal, PrimaryButton } from "../elements"
import CircuitBG from "../images/circuit-board.svg"

/** Component */
const Modal = ({ message, show, setModalState }) =>
  show && (
    <Portal>
      <StyledModal>
        <div
          className="modal__background"
          onClick={() => setModalState(false)}
        />
        <div className="modal__content">
          <p>{message}</p>
          <PrimaryButton onClick={() => setModalState(false)}>
            Okay
          </PrimaryButton>
        </div>
      </StyledModal>
    </Portal>
  )

/** Styling */
const StyledModal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .modal__background {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
    top: 0;
    left: 0;
  }
  .modal__content {
    padding: 50px 15px;
    width: 100%;
    background: white;
    text-align: center;
    background-image: url(${CircuitBG});
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    z-index: 1;
    p {
      font-size: 22px;
      margin-top: 0;
    }
    @media screen and (min-width: 720px) {
      width: auto;
      padding: 50px 100px;
      p {
        font-size: 30px;
      }
    }
  }
`

export default Modal
