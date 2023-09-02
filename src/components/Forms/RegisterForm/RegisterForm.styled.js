import { styled, css } from "styled-components";
import { Form } from "formik";
import { flexContainer, font, breakpoint } from "../../../styles/mixins";
import { StyledButton } from "../../Button/Button.styled";

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 50rem;
  min-width: 33.5rem;
  padding: 3.2rem 2.8rem 4rem 2.8rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.registerForm.bg};
  transition: color 200ms, background-color 200ms, border 200ms, fill 200ms;
  ${breakpoint.tablet(css`
    padding: 4.4rem 5rem;
  `)};

  h1 {
    ${font({
      family: ({ theme }) => theme.registerForm.font,
      color: ({ theme }) => theme.registerForm.header,
      size: "2.4rem",
      weight: "600",
      height: "2.8rem",
      spacing: "-0.048rem",
    })}

    ${breakpoint.tablet(css`
      ${font({
        size: "2.8rem",
        height: "3rem",
        spacing: "-0.056rem",
      })}
    `)}
  }

  ul {
    margin-top: 3.2rem;
    margin-bottom: 5rem;
    li {
      position: relative;
      margin-bottom: 1.2rem;
      ${breakpoint.tablet(css`
        margin-bottom: 2.4rem;
      `)}
      svg {
        position: absolute;
        width: 2.4rem;
        height: 2.4rem;
        top: 1.9rem;
        transition: stroke 200ms, fill 200ms;
        &:nth-of-type(1) {
          stroke: ${({ theme }) => theme.registerForm.textInput.iconIdle};
          fill: none;
          left: 1.8rem;
        }
        &:nth-of-type(2) {
          fill: ${({ theme }) => theme.registerForm.textInput.error};
          right: 1.9rem;
        }
      }

      &:focus-within,
      &:hover,
      &:focus {
        svg {
          &:nth-of-type(1) {
            stroke: ${({ theme }) => theme.registerForm.textInput.iconActive};
          }
        }
      }
    }

    span {
      ${font({
        family: ({ theme }) => theme.registerForm.font,
        color: ({ theme }) => theme.registerForm.header,
        size: "1.4rem",
        weight: "400",
        height: "1.4rem",
      })}
      transition: color 200ms;
      position: absolute;
      left: 0.1rem;
      bottom: -1.9rem;
    }

    label {
      display: none;
    }
    input {
      position: relative;
      ${font({
        family: ({ theme }) => theme.registerForm.textInput.font,
        color: ({ theme }) => theme.registerForm.textInput.font,
        size: "1.8rem",
        weight: "400",
      })}

      ${flexContainer({
        direction: "row",
        justify: "flex-start",
        align: "center",
        wrap: "nowrap",
        gap: 0,
      })}

		height: 6rem;
      max-height: 6rem;
      width: 100%;
      padding: 1.6rem 5rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid
        ${({ theme }) => theme.registerForm.textInput.borderIdle};
      color: ${({ theme }) => theme.registerForm.textInput.fontIdle};
      background-color: ${({ theme }) => theme.registerForm.textInput.bgIdle};
      transition: color 200ms, background-color 200ms, border 200ms;
      &:focus,
      &:hover {
        border: 0.1rem solid
          ${({ theme }) => theme.registerForm.textInput.borderActive};
        ${({ theme }) => theme.registerForm.textInput.fontActive};
      }
    }
  }

  ${StyledButton} {
    width: 100%;
    background-color: ${({ theme }) => theme.registerForm.button.bgIdle};
    border: 0.2rem solid ${({ theme }) => theme.registerForm.button.borderIdle};
    color: ${({ theme }) => theme.registerForm.button.fontColorIdle};
    border-radius: 0.6rem;
    min-width: 23.5rem;
    height: 6rem;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.registerForm.button.bgHover};
      color: ${({ theme }) => theme.registerForm.button.fontColorHover};
      border: 0.2rem solid
        ${({ theme }) => theme.registerForm.button.borderHover};
    }
    &:active {
      background-color: ${({ theme }) => theme.registerForm.button.bgActive};
      border: 0.2rem solid
        ${({ theme }) => theme.registerForm.button.borderActive};
    }
  }

  ${(props) =>
    props.$passwordTouched
      ? props.$passwordInfo === "Password is required"
        ? css`
            li {
              input[name="password"] {
                margin-bottom: 2.8rem;
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .error};
                color: ${props.theme.registerForm.textInput.error};
                border-color: ${props.theme.registerForm.textInput.error};
              }
              input[name="password"] ~ svg {
                stroke: ${props.theme.registerForm.textInput.error} !important;
              }
              input[name="password"] ~ span {
                color: ${props.theme.registerForm.textInput.error} !important;
              }
            }
          `
        : props.$passwordInfo === "Password must be at least 8 characters"
        ? css`
            li {
              input[name="password"] {
                margin-bottom: 2.8rem;
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .warning};
                color: ${props.theme.registerForm.textInput.warning};
                border-color: ${props.theme.registerForm.textInput.warning};
              }
              input[name="password"] ~ svg {
                stroke: ${props.theme.registerForm.textInput
                  .warning} !important;
              }
              input[name="password"] ~ span {
                color: ${props.theme.registerForm.textInput.warning} !important;
              }
            }
          `
        : props.$passwordInfo === undefined
        ? css`
            li {
              input[name="password"]:not(:placeholder-shown) {
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .correct};
                color: ${props.theme.registerForm.textInput.correct};
                border-color: ${props.theme.registerForm.textInput.correct};
              }
              input[name="password"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.registerForm.textInput
                  .correct} !important;
              }
            }
          `
        : null
      : null}
  ${(props) =>
    props.$nameTouched
      ? props.$nameInfo === "Name is required"
        ? css`
            li {
              input[name="name"] {
                margin-bottom: 2.8rem;
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .error};
                color: ${props.theme.registerForm.textInput.error};
                border-color: ${props.theme.registerForm.textInput.error};
              }
              input[name="name"] ~ svg {
                stroke: ${props.theme.registerForm.textInput.error} !important;
              }
              input[name="name"] ~ span {
                color: ${props.theme.registerForm.textInput.error} !important;
              }
            }
          `
        : props.$nameInfo === undefined
        ? css`
            li {
              input[name="name"]:not(:placeholder-shown) {
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .correct};
                color: ${props.theme.registerForm.textInput.correct};
                border-color: ${props.theme.registerForm.textInput.correct};
              }
              input[name="name"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.registerForm.textInput
                  .correct} !important;
              }
            }
          `
        : null
      : null}
			${(props) =>
    props.$emailTouched
      ? props.$emailInfo === "Email is required"
        ? css`
            li {
              input[name="email"] {
                margin-bottom: 2.8rem;
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .error};
                color: ${props.theme.registerForm.textInput.error};
                border-color: ${props.theme.registerForm.textInput.error};
              }
              input[name="email"] ~ svg {
                stroke: ${props.theme.registerForm.textInput.error} !important;
              }
              input[name="email"] ~ span {
                color: ${props.theme.registerForm.textInput.error} !important;
              }
            }
          `
        : props.$emailInfo === "Invalid email"
        ? css`
            li {
              input[name="email"] {
                margin-bottom: 2.8rem;
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .warning};
                color: ${props.theme.registerForm.textInput.warning};
                border-color: ${props.theme.registerForm.textInput.warning};
              }
              input[name="email"] ~ svg {
                stroke: ${props.theme.registerForm.textInput
                  .warning} !important;
              }
              input[name="email"] ~ span {
                color: ${props.theme.registerForm.textInput.warning} !important;
              }
            }
          `
        : props.$emailInfo === undefined
        ? css`
            li {
              input[name="email"]:not(:placeholder-shown) {
                color: ${props.theme.registerForm.textInput.correct};
                border-color: ${props.theme.registerForm.textInput.correct};
                -webkit-text-fill-color: ${props.theme.registerForm.textInput
                  .correct};
              }
              input[name="email"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.registerForm.textInput
                  .correct} !important;
              }
            }
          `
        : null
      : null}
`;
