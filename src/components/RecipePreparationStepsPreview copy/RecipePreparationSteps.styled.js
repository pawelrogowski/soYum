import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-text: ${({ theme: t }) => t.recipePreparationStepsPreview.text};
  --color-number-decoration: ${({ theme: t }) => t.recipePreparationStepsPreview.numberDecoration};
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
  --color-icon-remove-idle: ${({ theme: t }) => t.recipePreparationStepsPreview.iconRemoveIdle};
  --color-icon-remove-active: ${({ theme }) =>
    theme.recipePreparationStepsPreview.iconRemoveActive};
  --color-icon-edit-idle: ${({ theme: t }) => t.recipePreparationStepsPreview.iconEditIdle};
  --color-icon-edit-active: ${({ theme: t }) => t.recipePreparationStepsPreview.iconEditActive};
  --color-error: ${({ theme: t }) => t.select.error};
  --color-error-bg: ${({ theme: t }) => t.select.errorBg};
  padding: 3.2rem 0;
  position: relative;
  max-width: 58.8rem;
  > h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  > ol {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    padding: 0 1.2rem;
    width: 100%;
    > li {
      counter-increment: my-counter;
      display: flex;
      align-items: center;
      gap: 1.4rem;
      color: var(--color-text);
      font-size: 1.2rem;
      line-height: 1.16;
      letter-spacing: -0.024rem;
      > p {
        word-break: break-all;
        text-wrap: pretty;
      }
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
        align-self: flex-start;
      }
    }
  }
`;
