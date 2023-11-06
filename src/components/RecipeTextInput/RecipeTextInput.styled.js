import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  --color-border-idle: ${({ theme }) => theme.recipeTextInput.borderIdle};
  --color-border-active: ${({ theme }) => theme.recipeTextInput.borderActive};
  --color-font: ${({ theme }) => theme.recipeTextInput.font};
  --color-font-placeholder: ${({ theme }) => theme.recipeTextInput.fontPlaceholder};
  --color-font-error: ${({ theme }) => theme.recipeTextInput.error};

  --color-bg-error: ${({ theme }) => theme.recipeTextInput.errorBg};

  align-self: flex-start;
  width: 100%;
  position: relative;
  > input {
    background: none;
    transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    width: 100%;
    border: none;
    border-bottom: 1px solid
      ${(props) =>
        props.$hasError === "true" ? css`var(--color-font-error)` : css`var(--color-border-idle)`};
    padding-bottom: 1.8rem;
    color: var(--color-font);
    font-size: 1.4rem;
    line-height: normal;
    letter-spacing: -0.028rem;

    &:hover,
    &:focus {
      outline: none;
      border-color: ${(props) =>
        props.$hasError === "true"
          ? css`var(--color-font-error)`
          : css`var(--color-border-active)`};
    }
    &:placeholder-shown {
      color: var(--color-font-placeholder);
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }
  }
  .validation-error {
    background: var(--color-bg-error);
    color: var(--color-font-error);
    position: absolute;
    bottom: -0.5rem;
    padding: 0 0.8rem;
    left: 0.71rem;
    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
`;
