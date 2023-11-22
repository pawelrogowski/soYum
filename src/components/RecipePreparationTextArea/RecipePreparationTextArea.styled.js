import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme: t }) => t.recipePreparationTextArea.bg};
  --color-border-idle: ${({ theme: t }) => t.recipePreparationTextArea.borderIdle};
  --color-border-active: ${({ theme: t }) => t.recipePreparationTextArea.borderActive};
  --color-text-idle: ${({ theme: t }) => t.recipePreparationTextArea.textIdle};
  --color-text-placeholder: ${({ theme: t }) => t.recipePreparationTextArea.textPlaceholder};
  --color-button-bg-remove-active: ${({ theme }) =>
    theme.recipePreparationTextArea.buttonBgRemoveActive};
  --color-button-bg-idle: ${({ theme: t }) => t.recipePreparationTextArea.buttonBgIdle};
  --color-button-bg-active: ${({ theme: t }) => t.recipePreparationTextArea.buttonBgActive};
  --color-button-bg-disabled: ${({ theme: t }) => t.recipePreparationTextArea.buttonBgDisabled};
  --color-button-border-idle: ${({ theme: t }) => t.recipePreparationTextArea.buttonBorderIdle};
  --color-button-border-active: ${({ theme }) =>
    theme.recipePreparationTextArea.buttonBorderActive};
  --color-button-border-disabled: ${({ theme }) =>
    theme.recipePreparationTextArea.buttonBorderDisabled};
  --color-error: ${({ theme: t }) => t.select.error};
  --color-error-bg: ${({ theme: t }) => t.select.errorBg};

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  max-width: 58.8rem;
  .validation-error {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    padding: 0 4px;
    color: var(--color-error);
    top: -0.5rem;
    left: 2rem;
    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
  > div {
    position: relative;
    padding-bottom: 2rem;
    &:focus-within,
    &:hover {
      + button,
      textarea,
      + button + button {
        border-color: ${(props) =>
          props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-active)`};
      }
    }
    > textarea {
      resize: none;
      padding: 1rem 1.6rem;

      width: 100%;
      min-height: 16rem;
      color: var(--color-text-idle);
      border-radius: 5px;
      border: 1px solid
        ${(props) =>
          props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-idle)`};
      font-size: 1.4rem;
      line-height: 1.5;
      letter-spacing: -0.036rem;
      background: none;
      scrollbar-width: thin;
      transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
        color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      &:placeholder-shown {
        color: var(--color-text-placeholder);
      }
      &:focus,
      &:hover {
        border-color: ${(props) =>
          props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-active)`};
      }

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        padding: 1.6rem 2.3rem;
        font-size: 1.8rem;
        letter-spacing: -0.028rem;
      }
    }
  }

  > button:nth-of-type(1) {
    position: absolute;
    bottom: -3px;
    right: 31px;
    height: 5rem;
    background: var(--color-button-bg-idle);
    border-color: ${(props) =>
      props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-idle)`};

    color: var(--color-text-idle);
    font-size: 1.4rem;
    line-height: 1.5;
    max-width: 15.1rem;
    border-width: 1px;
    &:hover,
    &:focus {
      background-color: ${(props) =>
        props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-active) `};
      border-color: ${(props) =>
        props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-active)`};

      color: var(--color-button-bg-idle);
    }
  }
  > button:nth-of-type(2) {
    position: absolute;
    bottom: 0.75rem;
    right: 21rem;
    height: 3rem;
    width: 3rem;

    border-radius: 50%;
    background: var(--color-button-bg-idle);
    border-color: ${(props) =>
      props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-idle)`};

    color: var(--color-text-idle);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover,
    &:focus {
      background-color: var(--color-button-bg-remove-active);
      border-color: var(--color-button-bg-remove-active);
      > svg {
        stroke: var(--color-button-bg-idle);
      }
    }
    > svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-text-idle);
    }
  }
  > button:disabled {
    cursor: not-allowed;
    pointer-events: visible;
    background: var(--color-button-bg-disabled);
    color: var(--color-text-placeholder);
    border: 1px solid
      ${(props) =>
        props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-idle)`};
  }
`;
