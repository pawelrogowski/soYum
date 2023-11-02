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
  --color-error: ${({ theme }) => theme.select.error};
  --color-error-bg: ${({ theme }) => theme.select.errorBg};

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
  align-items: center;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid
    ${(props) =>
      props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-idle)`};
  height: 4.4rem;
  transition: border-color 200ms;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus {
    border-bottom: 1px solid
      ${(props) =>
        props.$hasError === "true" ? css`var(--color-error)` : css`var(--color-border-active)`};
  }

  .validation-error {
    background: var(--color-error-bg);
    overflow: hidden;
    max-width: 100%;
    color: var(--color-error);
    position: absolute;
    bottom: -0.5rem;
    padding: 0 0.8rem;
    left: 3.6rem;
  }

  > span:first-of-type {
    width: 100%;
    color: ${({ $placeholderShown }) =>
      $placeholderShown ? css`var(--color-text-placeholder)` : css`var(--color-text-idle)`};
    font-size: 1.4rem;
    line-height: 1.5;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
    }
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .no-placeholder {
    color: var(--color-text-idle);
  }
  > div:first-of-type {
    span {
      display: none;
    }

    div {
      max-height: 2.4rem;
      min-height: 0;
    }

    .Select {
      &__control {
        * {
          display: block;
        }
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-text-idle);
        font-size: 1.4rem;
        line-height: 1.5;
        letter-spacing: -0.032rem;
        height: 2.4rem;
        ::-webkit-scrollbar {
          width: 0px;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.6rem;
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
          transition: fill 200ms;
          cursor: pointer;
        }
        &:focus,
        &:hover {
          > svg {
            fill: var(--color-icon-active);
          }
        }
        max-height: 1.4rem;
      }

      &__indicators {
        height: 2.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__indicator {
        align-self: center;
        height: 2.4rem;
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

      &__input {
        position: absolute;
        top: 0;
        left: 0;
        min-height: 0;
        max-height: 2.4rem;
        width: 100%;
        overflow: hidden;
        &-container {
          display: flex;
          cursor: pointer;
          &:after {
            display: none;
          }
        }
      }
      &__value-container {
        position: relative;
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        overflow-y: auto;
        gap: 12px;
        width: 11rem;
        max-width: 7.5rem;
      }

      &__menu {
        transform-origin: top;
        animation: menu-fade-in 0.2s ease-in-out;
        white-space: nowrap;
        overflow-x: hidden;
        background: var(--color-bg);
        border-radius: 0.6rem;
        box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
        min-height: 12.4rem;
        margin-top: 0.8rem;
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        min-width: 9rem;
        right: 0%;
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
        overflow-x: hidden;
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

        &:hover,
        &:focus {
          color: var(--color-text-active);
          cursor: pointer;
        }
      }
    }
  }
`;
