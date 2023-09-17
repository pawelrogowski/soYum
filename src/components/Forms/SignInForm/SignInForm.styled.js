import { styled, css } from "styled-components";
import { Form } from "formik";
import { flexContainer, font, breakpoint } from "../../../utils/mixins";
import { StyledButton } from "../../Button/Button.styled";

export const StyledForm = styled(Form)`
  width: 100%;
  max-width: 50rem;
  min-width: 28rem;
  padding: 3.2rem 2.8rem 4rem 2.8rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.authForm.bg};
  transition: color 100ms, background-color 100ms, border 100ms, fill 100ms;
  ${breakpoint.tablet(css`
    padding: 4.4rem 5rem;
    min-width: 50rem;
  `)};

  h1 {
    display: inline-block;
    ${font({
      family: ({ theme }) => theme.authForm.font,
      color: ({ theme }) => theme.authForm.header,
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
    `)};
  }

  ul {
    margin-top: 4rem;
    margin-bottom: 2.8rem;

    ${breakpoint.tablet(css`
      margin-top: 5rem;
      margin-bottom: 5rem;
    `)}

    li {
      position: relative;
      margin-bottom: 1.2rem;

      ${breakpoint.tablet(css`
        margin-bottom: 2.4rem;
      `)}

      svg {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        top: 1.4rem;
        transition: stroke 100ms, fill 100ms;

        ${breakpoint.tablet(css`
          width: 2.4rem;
          height: 2.4rem;
          top: 1.9rem;
        `)}

        &:nth-of-type(1) {
          stroke: ${({ theme }) => theme.authForm.textInput.iconIdle};
          fill: none;
          left: 1.8rem;
        }
        &:nth-of-type(2) {
          fill: ${({ theme }) => theme.authForm.textInput.error};
          right: 1.9rem;
        }
      }

      &:focus-within,
      &:hover,
      &:focus {
        svg {
          &:nth-of-type(1) {
            stroke: ${({ theme }) => theme.authForm.textInput.iconActive};
          }
        }
      }
    }

    span {
      transition: color 100ms;
      position: absolute;
      left: 0.1rem;
      bottom: -1.5rem;

      ${font({
        family: ({ theme }) => theme.authForm.font,
        color: ({ theme }) => theme.authForm.header,
        size: "1rem",
        weight: "400",
        height: "1rem",
      })}

      ${breakpoint.tablet(css`
        bottom: -1.9rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
      `)}
    }

    label {
      display: none;
    }

    input {
      position: relative;
      ${font({
        family: ({ theme }) => theme.authForm.textInput.font,
        color: ({ theme }) => theme.authForm.textInput.font,
        size: "1.4rem",
        weight: "400",
      })}

      ${flexContainer({
        direction: "row",
        justify: "flex-start",
        align: "center",
        wrap: "nowrap",
        gap: 0,
      })}

      ${breakpoint.tablet(css`
        ${font({
          family: ({ theme }) => theme.authForm.textInput.font,
          color: ({ theme }) => theme.authForm.textInput.font,
          size: "1.8rem",
          weight: "400",
        })}
      `)}


		  height: 4.5rem;
      max-height: 6rem;
      width: 100%;
      padding: 1.6rem 5rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.authForm.textInput.borderIdle};
      color: ${({ theme }) => theme.authForm.textInput.fontIdle};
      background-color: ${({ theme }) => theme.authForm.textInput.bgIdle};
      transition: color 100ms, background-color 100ms, border 100ms;

      &:focus,
      &:hover {
        border: 0.1rem solid
          ${({ theme }) => theme.authForm.textInput.borderActive};
        ${({ theme }) => theme.authForm.textInput.fontActive};
      }

      ${breakpoint.tablet(
        css`
          height: 6rem;
        `
      )}
    }
  }

  ${StyledButton} {
    width: 100%;
    background-color: ${({ theme }) => theme.authForm.button.bgIdle};
    border: 0.2rem solid ${({ theme }) => theme.authForm.button.borderIdle};
    color: ${({ theme }) => theme.authForm.button.fontColorIdle};
    border-radius: 0.6rem;
    height: 4.5rem;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.authForm.button.bgHover};
      color: ${({ theme }) => theme.authForm.button.fontColorHover};
      border: 0.2rem solid ${({ theme }) => theme.authForm.button.borderHover};
    }
    &:active {
      background-color: ${({ theme }) => theme.authForm.button.bgActive};
      border: 0.2rem solid ${({ theme }) => theme.authForm.button.borderActive};
    }

    ${breakpoint.tablet(
      css`
        height: 6rem;
      `
    )}
  }

  ${(props) =>
    props.$passwordTouched
      ? props.$passwordInfo === "Password is required"
        ? css`
            li {
              input[name="password"] {
                margin-bottom: 2rem;
                ${breakpoint.tablet(
                  css`
                    margin-bottom: 2.8rem;
                  `
                )}
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .error};
                color: ${props.theme.authForm.textInput.error};
                border-color: ${props.theme.authForm.textInput.error};
              }

              input[name="password"] ~ svg {
                stroke: ${props.theme.authForm.textInput.error} !important;
              }

              input[name="password"] ~ span {
                color: ${props.theme.authForm.textInput.error} !important;
              }
            }
          `
        : props.$passwordInfo === "Password must be at least 8 characters"
        ? css`
            li {
              input[name="password"] {
                margin-bottom: 2rem;
                ${breakpoint.tablet(
                  css`
                    margin-bottom: 2.8rem;
                  `
                )}
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .warning};
                color: ${props.theme.authForm.textInput.warning};
                border-color: ${props.theme.authForm.textInput.warning};
              }

              input[name="password"] ~ svg {
                stroke: ${props.theme.authForm.textInput.warning} !important;
              }

              input[name="password"] ~ span {
                color: ${props.theme.authForm.textInput.warning} !important;
              }
            }
          `
        : props.$passwordInfo === undefined
        ? css`
            li {
              input[name="password"]:not(:placeholder-shown) {
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .correct};
                color: ${props.theme.authForm.textInput.correct};
                border-color: ${props.theme.authForm.textInput.correct};
              }

              input[name="password"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.authForm.textInput.correct} !important;
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
                margin-bottom: 2rem;
                ${breakpoint.tablet(
                  css`
                    margin-bottom: 2.8rem;
                  `
                )}
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .error};
                color: ${props.theme.authForm.textInput.error};
                border-color: ${props.theme.authForm.textInput.error};
              }

              input[name="name"] ~ svg {
                stroke: ${props.theme.authForm.textInput.error} !important;
              }

              input[name="name"] ~ span {
                color: ${props.theme.authForm.textInput.error} !important;
              }
            }
          `
        : props.$nameInfo === undefined
        ? css`
            li {
              input[name="name"]:not(:placeholder-shown) {
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .correct};
                color: ${props.theme.authForm.textInput.correct};
                border-color: ${props.theme.authForm.textInput.correct};
              }

              input[name="name"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.authForm.textInput.correct} !important;
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
                margin-bottom: 2rem;
                ${breakpoint.tablet(
                  css`
                    margin-bottom: 2.8rem;
                  `
                )}
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .error};
                color: ${props.theme.authForm.textInput.error};
                border-color: ${props.theme.authForm.textInput.error};
              }

              input[name="email"] ~ svg {
                stroke: ${props.theme.authForm.textInput.error} !important;
              }

              input[name="email"] ~ span {
                color: ${props.theme.authForm.textInput.error} !important;
              }
            }
          `
        : props.$emailInfo === "Invalid email"
        ? css`
            li {
              input[name="email"] {
                margin-bottom: 2rem;
                ${breakpoint.tablet(
                  css`
                    margin-bottom: 2.8rem;
                  `
                )}
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .warning};
                color: ${props.theme.authForm.textInput.warning};
                border-color: ${props.theme.authForm.textInput.warning};
              }

              input[name="email"] ~ svg {
                stroke: ${props.theme.authForm.textInput.warning} !important;
              }

              input[name="email"] ~ span {
                color: ${props.theme.authForm.textInput.warning} !important;
              }
            }
          `
        : props.$emailInfo === undefined
        ? css`
            li {
              input[name="email"]:not(:placeholder-shown) {
                color: ${props.theme.authForm.textInput.correct};
                border-color: ${props.theme.authForm.textInput.correct};
                -webkit-text-fill-color: ${props.theme.authForm.textInput
                  .correct};
              }

              input[name="email"]:not(:placeholder-shown) ~ svg {
                stroke: ${props.theme.authForm.textInput.correct} !important;
              }
            }
          `
        : null
      : null}
`;
