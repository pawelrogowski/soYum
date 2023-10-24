import styled from "styled-components";

export const StyledOl = styled.ol`
  --color-text: ${({ theme }) => theme.recipePreparationStepsPreview.text};
  --color-number-decoration: ${({ theme }) => theme.recipePreparationStepsPreview.numberDecoration};
  --color-number-decoration-text: ${({ theme }) =>
    theme.recipePreparationStepsPreview.numberDecorationText};
  --color-button-bg-edit-idle: ${({ theme }) =>
    theme.recipePreparationStepsPreview.buttonBgEditIdle};
  --color-button-bg-edit-active: ${({ theme }) =>
    theme.recipePreparationStepsPreview.buttonBgEditActive};
  --color-button-bg-remove-idle: ${({ theme }) =>
    theme.recipePreparationStepsPreview.buttonBgRemoveIdle};
  --color-button-bg-remove-active: ${({ theme }) =>
    theme.recipePreparationStepsPreview.buttonBgRemoveActive};
  --color-icon-remove-idle: ${({ theme }) => theme.recipePreparationStepsPreview.iconRemoveIdle};
  --color-icon-remove-active: ${({ theme }) =>
    theme.recipePreparationStepsPreview.iconRemoveActive};
  --color-icon-edit-idle: ${({ theme }) => theme.recipePreparationStepsPreview.iconEditIdle};
  --color-icon-edit-active: ${({ theme }) => theme.recipePreparationStepsPreview.iconEditActive};
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style-type: none;
  padding: 3.2rem 0;
  > li {
    counter-increment: my-counter;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    color: var(--color-text);
    font-size: 1.2rem;
    line-height: 1.16;
    letter-spacing: -0.024rem;

    &::before {
      content: counter(my-counter);
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      background-color: var(--color-number-decoration);
      color: var(--color-number-decoration-text);
      border-radius: 50%;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
    }
    > button:nth-of-type(1) {
      cursor: pointer;
      padding: 0;
      background: var(--color-button-bg-edit-idle);
      border: none;
      border-radius: 50%;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: bkacground-color 100ms;
      &:focus,
      &:hover {
        background-color: var(--color-button-bg-edit-active);
        > svg {
          stroke: var(--color-icon-edit-active);
        }
      }
      > svg {
        transition: stroke 100ms;
        width: 1.3rem;
        height: 1.3rem;
        stroke: var(--color-icon-edit-idle);
      }
    }
    > button:nth-of-type(2) {
      cursor: pointer;
      padding: 0;
      background: var(--color-button-bg-remove-idle);
      border: none;
      border-radius: 50%;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: bkacground-color 100ms;
      &:focus,
      &:hover {
        background-color: var(--color-button-bg-remove-active);
        > svg {
          stroke: var(--color-icon-remove-active);
        }
      }
      > svg {
        transition: stroke 100ms;
        width: 1.3rem;
        height: 1.3rem;
        stroke: var(--color-icon-remove-idle);
      }
    }
    button:disabled {
      background-color: lightgray;
      pointer-events: none;
    }
  }
`;
