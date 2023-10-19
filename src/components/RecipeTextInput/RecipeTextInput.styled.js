import styled from "styled-components";

export const StyledLabel = styled.label`
  --color-border-idle: ${({ theme }) => theme.recipeTextInput.borderIdle};
  --color-border-active: ${({ theme }) => theme.recipeTextInput.borderActive};
  --color-font: ${({ theme }) => theme.recipeTextInput.font};
  --color-font-placeholder: ${({ theme }) => theme.recipeTextInput.fontPlaceholder};

  align-self: flex-start;
  width: 100%;
  > input {
    background: none;
    transition: border-color 200ms;
    width: 100%;
    border: none;
    border-bottom: 1px solid var(--color-border-idle);

    padding-bottom: 1.8rem;
    color: var(--color-font);
    font-size: 1.4rem;
    line-height: normal;
    letter-spacing: -0.028rem;

    &:hover,
    &:focus {
      outline: none;
      border-color: var(--color-border-active);
    }
    &:placeholder-shown {
      color: var(--color-font-placeholder);
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
      letter-spacing: -0.032rem;
    }
  }
`;