import { styled, css } from "styled-components";
import { font } from "../../../utils/mixins";
export const StyledForm = styled.form`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 7.2rem 0 3.75rem 0;

  div {
    position: relative;
    height: 5rem;
    max-width: 25.9rem;
    width: 100%;
    margin-right: 1.2rem;
    > label {
      display: none;
    }
    > input {
      width: 100%;
      height: 100%;
      padding: 1.45rem 4rem 1.45rem 4.4rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid
        ${({ theme }) => theme.newsletterForm.textInput.borderIdle};
      background-color: ${({ theme }) => theme.newsletterForm.textInput.bgIdle};
      transition: color 100ms, background-color 100ms, border 100ms;

      ${font({
        family: ({ theme }) => theme.newsletterForm.textInput.font,
        color: ({ theme }) => theme.newsletterForm.textInput.fontIdle,
        size: "1.4rem",
        weight: "400",
      })}

      &:focus,
      &:hover {
        border: 0.1rem solid
          ${({ theme }) => theme.newsletterForm.textInput.borderActive};
        background: ${({ theme }) => theme.newsletterForm.textInput.bgIdle};
      }
      &::placeholder {
        color: ${({ theme }) => theme.newsletterForm.textInput.fontIdle};
      }
    }
    > span {
      display: none;
    }
  }
  svg {
    position: absolute;

    width: 2.2rem;
    height: 2.2rem;
    top: 1.45rem;
    transition: stroke 100ms, fill 100ms;

    &:nth-of-type(1) {
      stroke: ${({ theme }) => theme.newsletterForm.textInput.iconIdle};
      fill: none;
      left: 1.4rem;
    }
    &:nth-of-type(2) {
      stroke: black;

      border-radius: 50%;
      fill: ${({ theme }) => theme.newsletterForm.textInput.error};
      right: 1.3rem;
    }
  }

  button {
    height: 5rem;
    width: 100%;
    max-width: 18.7rem;
  }

  ${(props) =>
    props.$emailTouched &&
    css`
      input[name="email"] {
        background: #22252a;
        &:hover,
        &:focus {
          background: #22252a;
        }
      }
    `}

  ${(props) =>
    props.$emailTouched
      ? props.$emailInfo === "Email is required"
        ? css`
            input[name="email"] {
              -webkit-text-fill-color: ${props.theme.newsletterForm.textInput
                .error};
              color: ${props.theme.newsletterForm.textInput.error};
              border-color: ${props.theme.newsletterForm.textInput.error};
            }

            input[name="email"] ~ svg {
              stroke: ${props.theme.newsletterForm.textInput.error} !important;
            }

            input[name="email"] ~ span {
              color: ${props.theme.newsletterForm.textInput.error} !important;
            }
          `
        : props.$emailInfo === "Invalid email"
        ? css`
            input[name="email"] {
              -webkit-text-fill-color: ${props.theme.newsletterForm.textInput
                .warning};
              color: ${props.theme.newsletterForm.textInput.warning};
              border-color: ${props.theme.newsletterForm.textInput.warning};
            }

            input[name="email"] ~ svg {
              stroke: ${props.theme.newsletterForm.textInput
                .warning} !important;
              &:nth-of-type(2) {
                fill: ${props.theme.newsletterForm.textInput
                  .warning} !important;
              }
            }

            input[name="email"] ~ span {
              color: ${props.theme.newsletterForm.textInput.warning} !important;
            }
          `
        : props.$emailInfo === undefined
        ? css`
            input[name="email"]:not(:placeholder-shown) {
              color: ${props.theme.newsletterForm.textInput.correct};
              border-color: ${props.theme.newsletterForm.textInput.correct};
              -webkit-text-fill-color: ${props.theme.newsletterForm.textInput
                .correct};
            }

            input[name="email"]:not(:placeholder-shown) ~ svg {
              stroke: ${props.theme.newsletterForm.textInput
                .correct} !important;
              &:nth-of-type(2) {
                fill: ${props.theme.newsletterForm.textInput
                  .correct} !important;
              }
            }
          `
        : null
      : null}
`;
