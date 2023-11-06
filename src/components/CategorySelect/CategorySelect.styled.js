import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme }) => theme.select.bg};
  --color-text-idle: ${({ theme }) => theme.select.textIdle};
  --color-text-active: ${({ theme }) => theme.select.textActive};
  --color-text-placeholder: ${({ theme }) => theme.select.textPlaceholder};
  --color-icon-idle: ${({ theme }) => theme.select.iconIdle};
  --color-icon-active: ${({ theme }) => theme.select.iconActive};
  --color-icon-remove: ${({ theme }) => theme.select.iconRemove};
  --color-border-idle: ${({ theme }) => theme.select.borderIdle};
  --color-border-active: ${({ theme }) => theme.select.borderActive};
  --color-accent: ${({ theme }) => theme.select.accent};
  --color-scrollbar-bg: ${({ theme }) => theme.select.scrollbarBg};
  --color-scrollbar-thumb: ${({ theme }) => theme.select.scrollbarThumb};
  --color-font-error: ${({ theme }) => theme.recipeTextInput.error};
  --color-bg-error: ${({ theme }) => theme.recipeTextInput.errorBg};

  @keyframes menu-fade-in {
    0% {
      opacity: 0;
      transform: scaleY(0);
    }
    100% {
      opacity: 1;
      transform: scaleY(1);
    }
  }

  position: relative;
  display: flex;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid
    ${(props) =>
      props.$hasError === "true" ? css`var(--color-font-error)` : css`var(--color-border-idle)`};
  transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  width: 100%;
  min-height: 2.4rem;
  cursor: pointer;

  &:hover,
  &:focus {
    border-bottom: 1px solid
      ${(props) =>
        props.$hasError === "true"
          ? css`var(--color-font-error)`
          : css`var(--color-border-active)`};
  }

  .validation-error {
    background: var(--color-bg-error);
    max-width: 100%;
    color: var(--color-font-error);
    position: absolute;
    bottom: -0.5rem;
    padding: 0 0.8rem;
    left: 0.71rem;
    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
  > div {
    width: 100%;

    span {
      display: none;
    }

    div {
      min-height: 2.4rem;
      display: flex;
      align-items: center;
    }

    .Select {
      //main wrapper
      &__control {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-text-idle);
        font-size: 1.4rem;
        line-height: 1.5;
        letter-spacing: -0.032rem;
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        cursor: pointer;
        ::-webkit-scrollbar {
          width: 0;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
      }

      &__placeholder {
        color: var(--color-text-placeholder);
        font-size: 1.4rem;
        line-height: 1.5;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.6rem;
        }
      } // dropdown icon wrapper
      &__indicator {
        //idle icons
        svg {
          fill: var(--color-icon-idle);
          transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
          cursor: pointer;
          &:focus,
          &:hover {
            fill: var(--color-icon-active);
          }
        }
        max-height: 1.4rem;
      }
      &__indicators {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      //dropdown clear icon
      &__clear-indicator {
        &:focus,
        &:hover {
          svg {
            fill: var(--color-icon-remove);
          }
        }
      }
      &__multi-value {
        border: none;
        border-radius: 4px;
        padding: 0 4px;
        background: var(--color-bg);
        gap: 5px;
        align-items: center;
        &:focus,
        &:hover {
          svg {
            fill: var(--color-icon-remove);
            cursor: pointer;
          }
        }
      }
      &__input {
        min-height: 2.4rem;
        max-height: 2.4rem;
        max-width: 0;
        min-width: 0 !important;
        font-size: 0px;
        width: 100%;
        color: var(--color-bg);
        &-container {
          display: flex;
          cursor: pointer;
          max-width: 0px;
          &:after {
            display: none;
          }
        }
      }
      &__value-container {
        overflow-y: auto;
        gap: 4px;
        width: 100%;
      }

      &__menu {
        transform-origin: top;
        animation: menu-fade-in 0.2s ease-in-out;
        background: var(--color-bg);
        border-radius: 0.6rem;
        box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
        min-height: 12.4rem;
        margin-top: 0.8rem;
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        width: 100%;

        ::-webkit-scrollbar {
          width: 18px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: var(--color-scrollbar-thumb);
          border-radius: 12px;
          border: 6px solid var(--color-scrollbar-bg);
        }
      }

      &__menu-list {
        border: 1px solid var(--color-accent);
        width: 100%;
        min-height: 12.4rem;
        border-radius: 0.6rem;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: -0.28px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.8rem 1.8rem;
      }

      &__option {
        min-height: 2rem;
        transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
        &:hover,
        &:focus {
          color: var(--color-text-active);
          cursor: pointer;
        }
      }
    }
  }
`;
