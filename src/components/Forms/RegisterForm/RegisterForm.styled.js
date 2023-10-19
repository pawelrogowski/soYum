import { Form } from "formik";
import { css, styled } from "styled-components";

import { StyledButton } from "../../Button/Button.styled";

export const StyledForm = styled(Form)`
  --color-bg: ${({ theme }) => theme.authForm.bg};
  --color-header: ${({ theme }) => theme.authForm.header};
  --family-font: ${({ theme }) => theme.authForm.font};
  --color-iconIdle: ${({ theme }) => theme.authForm.textInput.iconIdle};
  --color-error: ${({ theme }) => theme.authForm.textInput.error};
  --color-iconActive: ${({ theme }) => theme.authForm.textInput.iconActive};
  --color-fontIdle: ${({ theme }) => theme.authForm.textInput.fontIdle};
  --color-borderIdle: ${({ theme }) => theme.authForm.textInput.borderIdle};
  --color-bgIdle: ${({ theme }) => theme.authForm.textInput.bgIdle};
  --color-borderActive: ${({ theme }) => theme.authForm.textInput.borderActive};
  --color-buttonBgIdle: ${({ theme }) => theme.authForm.button.bgIdle};
  --color-buttonBorderIdle: ${({ theme }) => theme.authForm.button.borderIdle};
  --color-buttonFontColorIdle: ${({ theme }) => theme.authForm.button.fontColorIdle};
  --color-buttonBgHover: ${({ theme }) => theme.authForm.button.bgHover};
  --color-buttonFontColorHover: ${({ theme }) => theme.authForm.button.fontColorHover};
  --color-buttonBorderHover: ${({ theme }) => theme.authForm.button.borderHover};
  --color-buttonBgActive: ${({ theme }) => theme.authForm.button.bgActive};
  --color-buttonBorderActive: ${({ theme }) => theme.authForm.button.borderActive};
  --color-warning: ${({ theme }) => theme.authForm.textInput.warning};
  --color-correct: ${({ theme }) => theme.authForm.textInput.correct};
  width: 100%;
  max-width: 50rem;
  min-width: 28rem;
  padding: 3.2rem 2.8rem 4rem 2.8rem;
  border-radius: 3rem;
  background-color: var(--color-bg);
  transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
    background-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
    border cubic-bezier(0.17, 0.67, 1, 1.23) 100ms, fill cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 4.4rem 5rem;
    min-width: 50rem;
  }

  h1 {
    display: inline-block;
    color: var(--color-header);
    font-size: 2.4rem;
    font-family: var(--family-font);
    line-height: 2.8rem;
    letter-spacing: -0.048rem;
    font-weight: 600;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 2.8rem;
      line-height: 3rem;
      letter-spacing: -0.056rem;
    }
  }

  ul {
    margin-top: 3.2rem;
    margin-bottom: 2.8rem;

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      margin-bottom: 5rem;
    }

    li {
      position: relative;
      margin-bottom: 1.2rem;

      @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        margin-bottom: 2.4rem;
      }

      svg {
        position: absolute;
        width: 1.8rem;
        height: 1.8rem;
        top: 1.4rem;
        transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
          fill cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

        @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
          width: 2.4rem;
          height: 2.4rem;
          top: 1.9rem;
        }

        &:nth-of-type(1) {
          stroke: var(--color-iconIdle);
          fill: none;
          left: 1.8rem;
        }
        &:nth-of-type(2) {
          fill: var(--color-error);
          right: 1.9rem;
        }
      }

      &:focus-within,
      &:hover,
      &:focus {
        svg {
          &:nth-of-type(1) {
            stroke: var(--color-iconActive);
          }
        }
      }
    }

    span {
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      position: absolute;
      left: 0.1rem;
      bottom: -1.5rem;
      color: var(--color-header);
      font-size: 1rem;
      font-family: var(--family-font);
      line-height: 1rem;
      font-weight: 400;

      @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        bottom: -1.9rem;
        font-size: 1.4rem;
        line-height: 1.4rem;
      }
    }

    label {
      display: none;
    }

    input {
      position: relative;
      color: var(--color-fontIdle);
      font-size: 1.4rem;
      font-family: ${({ theme }) => theme.authForm.textInput.font};
      font-weight: 400;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      height: 4.5rem;
      max-height: 6rem;
      width: 100%;
      padding: 1.6rem 5rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid var(--color-borderIdle);
      background-color: var(--color-bgIdle);
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
        background-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
        border cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

      &:focus,
      &:hover {
        border: 0.1rem solid var(--color-borderActive);
        background: var(--color-bgIdle);
      }

      @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        font-size: 1.8rem;
        height: 6rem;
      }
    }
    input[name="password"]:not(:placeholder-shown) {
      font-size: 4rem;
    }
  }

  ${StyledButton} {
    width: 100%;
    background-color: var(--color-buttonBgIdle);
    border: 0.2rem solid var(--color-buttonBorderIdle);
    color: var(--color-buttonFontColorIdle);
    border-radius: 0.6rem;
    height: 4.5rem;

    &:hover,
    &:focus {
      background-color: var(--color-buttonBgHover);
      color: var(--color-buttonFontColorHover);
      border: 0.2rem solid var(--color-buttonBorderHover);
    }
    &:active {
      background-color: var(--color-buttonBgActive);
      border: 0.2rem solid var(--color-buttonBorderActive);
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      height: 6rem;
    }
  }

  ${(props) =>
    props.$passwordTouched
      ? props.$passwordInfo === "Password is required"
        ? css`
            li {
              input[name="password"] {
                -webkit-text-security: square;

                margin-bottom: 2rem;
                @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
                  margin-bottom: 2.8rem;
                }
                -webkit-text-fill-color: var(--color-error);
                color: var(--color-error);
                border-color: var(--color-error);
              }

              input[name="password"] ~ svg {
                stroke: var(--color-error) !important;
              }

              input[name="password"] ~ span {
                color: var(--color-error) !important;
              }
            }
          `
        : props.$passwordInfo === "Password must be at least 8 characters"
        ? css`
            li {
              input[name="password"] {
                -webkit-text-security: square;
                margin-bottom: 2rem;
                @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
                  margin-bottom: 2.8rem;
                }
                -webkit-text-fill-color: var(--color-warning);
                color: var(--color-warning);
                border-color: var(--color-warning);
              }

              input[name="password"] ~ svg {
                stroke: var(--color-warning) !important;
                &:last-of-type {
                  fill: var(--color-warning) !important;
                }
              }

              input[name="password"] ~ span {
                color: var(--color-warning) !important;
              }
            }
          `
        : props.$passwordInfo === undefined
        ? css`
            li {
              input[name="password"]:not(:placeholder-shown) {
                -webkit-text-fill-color: var(--color-correct);
                color: var(--color-correct);
                border-color: var(--color-correct);
              }

              input[name="password"]:not(:placeholder-shown) ~ svg {
                stroke: var(--color-correct) !important;
                &:last-of-type {
                  fill: var(--color-correct) !important;
                }
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
                @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
                  margin-bottom: 2.8rem;
                }
                -webkit-text-fill-color: var(--color-error);
                color: var(--color-error);
                border-color: var(--color-error);
              }

              input[name="name"] ~ svg {
                stroke: var(--color-error) !important;
                &:last-of-type {
                  fill: var(--color-error) !important;
                }
              }

              input[name="name"] ~ span {
                color: var(--color-error) !important;
              }
            }
          `
        : props.$nameInfo === undefined
        ? css`
            li {
              input[name="name"]:not(:placeholder-shown) {
                -webkit-text-fill-color: var(--color-correct);
                color: var(--color-correct);
                border-color: var(--color-correct);
              }

              input[name="name"]:not(:placeholder-shown) ~ svg {
                stroke: var(--color-correct) !important;
                &:last-of-type {
                  fill: var(--color-correct) !important;
                }
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
                @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
                  margin-bottom: 2.8rem;
                }
                -webkit-text-fill-color: var(--color-error);
                color: var(--color-error);
                border-color: var(--color-error);
              }

              input[name="email"] ~ svg {
                stroke: var(--color-error) !important;
                &:last-of-type {
                  fill: var(--color-error) !important;
                }
              }

              input[name="email"] ~ span {
                color: var(--color-error) !important;
              }
            }
          `
        : props.$emailInfo === "Invalid email"
        ? css`
            li {
              input[name="email"] {
                margin-bottom: 2rem;
                @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
                  margin-bottom: 2.8rem;
                }
                -webkit-text-fill-color: var(--color-warning);
                color: var(--color-warning);
                border-color: var(--color-warning);
              }

              input[name="email"] ~ svg {
                stroke: var(--color-warning) !important;
                &:last-of-type {
                  fill: var(--color-warning) !important;
                }
              }

              input[name="email"] ~ span {
                color: var(--color-warning) !important;
              }
            }
          `
        : props.$emailInfo === undefined
        ? css`
            li {
              input[name="email"]:not(:placeholder-shown) {
                color: var(--color-correct);
                border-color: var(--color-correct);
                -webkit-text-fill-color: var(--color-correct);
              }

              input[name="email"]:not(:placeholder-shown) ~ svg {
                stroke: var(--color-correct) !important;
                &:last-of-type {
                  fill: var(--color-correct) !important;
                }
              }
            }
          `
        : null
      : null}
`;
