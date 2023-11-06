import styled from "styled-components";

export const StyledListItem = styled.li`
  --color-background-card: ${({ theme }) => theme.recipeCard.bgCard};
  --color-background-image: ${({ theme }) => theme.recipeCard.bgImage};
  --color-font-head: ${({ theme }) => theme.recipeCard.fontHead};
  --color-font-article: ${({ theme }) => theme.recipeCard.fontArticle};
  --color-button-delete-background-idle: ${({ theme }) => theme.recipeCard.button.delete.bgIdle};
  --color-button-delete-background-active: ${({ theme }) =>
    theme.recipeCard.button.delete.bgActive};
  --color-button-delete-border-idle: ${({ theme }) => theme.recipeCard.button.delete.borderIdle};
  --color-button-delete-border-active: ${({ theme }) =>
    theme.recipeCard.button.delete.borderActive};
  --color-button-delete-icon-idle: ${({ theme }) => theme.recipeCard.button.delete.iconIdle};
  --color-button-delete-icon-active: ${({ theme }) => theme.recipeCard.button.delete.iconActive};
  --color-button-seeRecipe-background-idle: ${({ theme }) =>
    theme.recipeCard.button.seeRecipe.bgIdle};
  --color-button-seeRecipe-background-active: ${({ theme }) =>
    theme.recipeCard.button.seeRecipe.bgActive};
  --color-button-seeRecipe-border-idle: ${({ theme }) =>
    theme.recipeCard.button.seeRecipe.borderIdle};
  --color-button-seeRecipe-border-active: ${({ theme }) =>
    theme.recipeCard.button.seeRecipe.borderActive};
  --color-button-seeRecipe-text-idle: ${({ theme }) => theme.recipeCard.button.seeRecipe.textIdle};
  --color-button-seeRecipe-text-active: ${({ theme }) =>
    theme.recipeCard.button.seeRecipe.textActive};

  position: relative;
  display: flex;
  width: 100%;
  padding: 1.4rem 0.9rem;
  gap: 1.4rem;
  background-color: var(--color-background-card);
  border-radius: 0.8rem;
  height: 15.2rem;
  overflow: hidden;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.8rem 2.4rem;
    height: 28.8rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 4rem;
    height: 40.4rem;
    gap: 5.4rem;
  }

  > picture {
    width: 124px;
    height: 124px;
    aspect-ratio: 1 / 1;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 228px;
      height: 232px;
      aspect-ratio: 228 / 232;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 318px;
      height: 324px;
      aspect-ratio: 318 / 324;
    }

    > img {
      width: 124px;
      height: 124px;
      aspect-ratio: 1 / 1;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 228px;
        height: 232px;
        aspect-ratio: 228 / 232;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 318px;
        height: 324px;
        aspect-ratio: 318 / 324;
      }
    }
  }

  > button {
    position: absolute;
    top: 1.4rem;
    right: 0.9rem;
    width: 2.4rem;
    height: 2.4rem;
    background-color: var(--color-button-delete-background-idle);
    border-color: var(--color-button-delete-border-idle);
    transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 3.8rem;
      height: 3.8rem;
      top: 2.8rem;
      right: 2.4rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 4rem;
      right: 4rem;
    }
    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: var(--color-button-delete-icon-idle);
      transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
    &:hover,
    &:focus {
      background-color: var(--color-button-delete-background-active);
      border-color: var(--color-button-delete-border-active);
      > svg {
        stroke: var(--color-button-delete-icon-active);
      }
    }
  }
  > article {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 2.8rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 4rem;
    }

    > h2 {
      color: var(--color-font-head);
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: -0.024rem;
      padding-right: 3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.4rem;
        line-height: 1.25;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.4rem;
        line-height: 1.25;
      }
    }
    > p {
      color: var(--color-font-article);
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.016rem;
      width: calc(100%);
      flex-grow: 1;
      height: 3.9rem;
      overflow: hidden;
      padding-right: 1rem;
      text-wrap: pretty;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.4rem;
        line-height: 1.28;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
      }
    }
    > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      > button {
        max-width: 8.7rem;
        max-height: 2.7rem;
        background-color: var(--color-button-seeRecipe-background-idle);
        border-color: var(--color-button-seeRecipe-border-idle);
        color: var(--color-button-seeRecipe-text-idle);
        font-size: 1rem;
        line-height: 1.5;
        align-self: flex-end;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.4rem;
          max-width: 13.8rem;
          max-height: 4.5rem;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
          font-size: 1.7rem;
          max-width: 17.2rem;
          max-height: 5.9rem;
        }
        &:hover,
        &:focus {
          background-color: var(--color-button-seeRecipe-background-active);
          border-color: var(--color-button-seeRecipe-border-active);
          color: var(--color-button-seeRecipe-text-active);
        }
      }
      > span {
        color: var(--color-font-article);
        font-size: 1rem;
        font-weight: 500;
        line-height: 1;
        align-self: flex-end;
        letter-spacing: -0.024rem;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
