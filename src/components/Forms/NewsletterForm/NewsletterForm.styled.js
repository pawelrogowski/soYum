import { css, styled } from "styled-components";

export const StyledForm = styled.form`
  --color-border-idle: ${({ theme: t }) => t.newsletterForm.textInput.borderIdle};
  --color-background-idle: ${({ theme: t }) => t.newsletterForm.textInput.bgIdle};
  --color-font-idle: ${({ theme: t }) => t.newsletterForm.textInput.fontIdle};
  --font-input: ${({ theme: t }) => t.newsletterForm.textInput.font};
  --color-border-active: ${({ theme: t }) => t.newsletterForm.textInput.borderActive};
  --color-icon-idle: ${({ theme: t }) => t.newsletterForm.textInput.iconIdle};
  --color-error: ${({ theme: t }) => t.newsletterForm.textInput.error};
  --color-warning: ${({ theme: t }) => t.newsletterForm.textInput.warning};
  --color-correct: ${({ theme: t }) => t.newsletterForm.textInput.correct};

  max-width: 100rem;
  width: 100%;
  display: flex;
  justify-content: center;

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
      border-radius: 0.5rem;
      border: 0.1rem solid var(--color-border-idle);
      background-color: var(--color-background-idle);
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
        background-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
        border cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      color: var(--color-font-idle);
      font-size: 1.4rem;
      font-weight: 400;
      font-family: var(--font-input);
      background-color: rgba(34, 37, 42, 1);
      &:focus,
      &:hover {
        border: 0.1rem solid var(--color-border-active);
        background-color: rgba(34, 37, 42, 1);
      }
      &::placeholder {
        color: var(--color-font-idle);
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
    transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
      fill cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

    &:nth-of-type(1) {
      stroke: var(--color-icon-idle);
      fill: none;
      left: 1.4rem;
    }

    &:nth-of-type(2) {
      stroke: black;
      border-radius: 50%;
      fill: var(--color-error);
      right: 1.3rem;
    }
  }

  button {
    height: 5rem;
    width: 100%;
    max-width: 18.7rem;
  }

  ${({ $layout }) =>
    $layout === "column" &&
    css`
      max-width: 33.9rem;
      flex-direction: column;
      @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
        max-width: 26.4rem;
      }
      > h2 {
        margin-bottom: 1.4rem;
        color: rgba(250, 250, 250, 1);
        font-family: Poppins;
        font-size: 1.8rem;
        font-weight: 700;
        @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
          display: none;
        }
      }
      > p {
        margin-bottom: 2.8rem;
        color: rgba(250, 250, 250, 1);
        font-size: 1.4rem;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: -0.028rem;
        @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
          display: none;
        }
      }

      > div {
        margin-bottom: 1.6rem;
        width: 100%;
        max-width: 33.9rem;
      }
      > button {
        max-width: 33.9rem;
        @media screen and (max-width: ${({ theme: t }) => t.breakpoints.mobileMax}) {
          max-width: 26.4rem;
        }
      }
    `}

  ${(props) =>
    props.$emailTouched
      ? props.$emailInfo === "Email is required"
        ? css`
            input[name="email"] {
              -webkit-text-fill-color: var(--color-error);
              color: var(--color-error);
              border-color: var(--color-error);
            }
            input[name="email"] ~ svg {
              stroke: var(--color-error);
            }
            input[name="email"] ~ span {
              color: var(--color-error);
            }
          `
        : props.$emailInfo === "Invalid email"
        ? css`
            input[name="email"] {
              -webkit-text-fill-color: var(--color-warning);
              color: var(--color-warning);
              border-color: var(--color-warning);
            }
            input[name="email"] ~ svg {
              stroke: var(--color-warning);
              &:nth-of-type(2) {
                fill: var(--color-warning);
              }
            }
            input[name="email"] ~ span {
              color: var(--color-warning);
            }
          `
        : props.$emailInfo === undefined
        ? css`
            input[name="email"]:not(:placeholder-shown) {
              color: var(--color-correct);
              border-color: var(--color-correct);
              -webkit-text-fill-color: var(--color-correct);
            }
            input[name="email"]:not(:placeholder-shown) ~ svg {
              stroke: var(--color-correct);
              &:nth-of-type(2) {
                fill: var(--color-correct);
              }
            }
          `
        : null
      : null}
`;
