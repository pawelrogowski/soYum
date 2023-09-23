import { styled, css } from "styled-components";

export const StyledForm = styled.form`
  --color-border-idle: ${({ theme }) =>
    theme.newsletterForm.textInput.borderIdle};
  --color-background-idle: ${({ theme }) =>
    theme.newsletterForm.textInput.bgIdle};
  --color-font-idle: ${({ theme }) => theme.newsletterForm.textInput.fontIdle};
  --font-input: ${({ theme }) => theme.newsletterForm.textInput.font};
  --color-border-active: ${({ theme }) =>
    theme.newsletterForm.textInput.borderActive};
  --color-icon-idle: ${({ theme }) => theme.newsletterForm.textInput.iconIdle};
  --color-error: ${({ theme }) => theme.newsletterForm.textInput.error};
  --color-warning: ${({ theme }) => theme.newsletterForm.textInput.warning};
  --color-correct: ${({ theme }) => theme.newsletterForm.textInput.correct};

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
      border: 0.1rem solid var(--color-border-idle);
      background-color: var(--color-background-idle);
      transition: color 100ms, background-color 100ms, border 100ms;
      color: var(--color-font-idle);
      font-size: 1.4rem;
      font-weight: 400;
      font-family: var(--font-input);
      &:focus,
      &:hover {
        border: 0.1rem solid var(--color-border-active);
        background-color: var(--color-background-idle);
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
    transition: stroke 100ms, fill 100ms;

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
