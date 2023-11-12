import styled from "styled-components";

export const StyledForm = styled.form`
  --color-button-bg-idle: ${({ theme: t }) => t.addRecipeForm.buttonBgIdle};
  --color-button-bg-active: ${({ theme: t }) => t.addRecipeForm.buttonBgActive};
  --color-button-border-active: ${({ theme: t }) => t.addRecipeForm.buttonBorderActive};
  --color-button-border-idle: ${({ theme: t }) => t.addRecipeForm.buttonBorderIdle};
  --color-button-text-idle: ${({ theme: t }) => t.addRecipeForm.buttonTextIdle};
  --color-button-text-active: ${({ theme: t }) => t.addRecipeForm.buttonTextActive};

  width: 100%;
  display: flex;
  flex-direction: column;

  .ingredient-list {
    margin-bottom: 5rem;
    width: 100%;
  }
  > .image-upload-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 6.71rem;

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
      flex-direction: row;
      align-items: flex-start;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 5rem;
      min-height: 38rem;
    }
    .image-upload-wrapper__inner {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      gap: 1.8rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        gap: 3.1rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        gap: 5.7rem;
        max-width: 39.4rem;
      }
    }
  }

  > button {
    margin-top: 4.2rem;
    width: 129px;
    height: 46px;
    font-size: 16px;
    line-height: 1;
    border-color: var(--color-button-border-idle);
    background-color: var(--color-button-bg-idle);
    color: var(--color-button-text-idle);

    &:hover,
    &:focus {
      border-radius: 4.4rem 2.4rem;
      border-color: var(--color-button-border-active);
      background-color: var(--color-button-bg-active);
      color: var(--color-button-text-active);
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      width: 17rem;
      height: 6rem;
      font-size: 16px;
    }
  }
`;
