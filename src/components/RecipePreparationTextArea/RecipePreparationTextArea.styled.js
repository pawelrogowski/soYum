import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme }) => theme.recipePreparationTextArea.bg};
  --color-border-idle: ${({ theme }) => theme.recipePreparationTextArea.borderIdle};
  --color-border-active: ${({ theme }) => theme.recipePreparationTextArea.borderActive};
  --color-text-idle: ${({ theme }) => theme.recipePreparationTextArea.textIdle};
  --color-text-placeholder: ${({ theme }) => theme.recipePreparationTextArea.textPlaceholder};
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  > textarea {
    padding: 1rem 1.6rem;
    max-width: 55.2rem;
    width: 100%;
    min-height: 34rem;
    color: var(--color-text-idle);
    border-radius: 5px;
    border: 1px solid var(--color-border-idle);
    font-size: 1.4rem;
    line-height: 1.5;
    letter-spacing: -0.036rem;
    background: none;
    scrollbar-width: thin;
    transition: border-color 200ms, color 200ms;
    &:placeholder-shown {
      color: var(--color-text-placeholder);
    }
    &:focus,
    &:hover {
      outline: none;
      border-color: var(--color-border-active);
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 1.6rem 2.3rem;
      font-size: 1.8rem;
      letter-spacing: -0.028rem;
    }
  }
`;
