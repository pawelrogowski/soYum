import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme }) => theme.select.bg};
  --color-ingredient-bg: ${({ theme }) => theme.select.ingredient.bg};
  --color-ingredient-border-idle: ${({ theme }) => theme.select.ingredient.borderIdle};
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
  position: relative;
  padding: 1.6rem 1.2rem 1.6rem 1.6rem;
  background: var(--color-ingredient-bg);
  height: 5.3rem;
  width: auto;
  border: 1px solid
    ${(props) =>
      props.$hasError === "true"
        ? css`var(--color-error)`
        : css`var(--color-ingredient-border-idle)`};
  border-radius: 5px;
  transition: border-color 200ms;
  display: flex;
  gap: 0.2rem;
  margin-right: 1rem;
  cursor: text;
  &:hover,
  &:focus {
    border: 1px solid
      ${(props) =>
        props.$hasError === "true"
          ? css`var(--color-error)`
          : css`var(--color-ingredient-border-active)`};
  }

  .validation-error {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    overflow: hidden;
    border-left: 1px solid var(--color-error);
    border-right: 1px solid var(--color-error);
    max-width: 100%;
    color: var(--color-error);
    bottom: -0.5rem;
    padding: 0 0.8rem;
    left: 50%;
    transform: translateX(-50%);
  }

  input {
    max-width: 3rem;
    color: var(--color-text-idle);
    font-family: Poppins;
    font-size: 1.4rem;
    line-height: normal;
    letter-spacing: -0.38px;
    overflow: visible;
    background: transparent;
    border: none;
    text-align: center;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::-moz-inner-spin-button,
    &::-moz-outer-spin-button {
      appearance: none;
      margin: 0;
    }

    &[type="number"] {
      -moz-appearance: textfield;
      appearance: textfield;
    }

    &::-webkit-inner-spin-button:after,
    &::-webkit-outer-spin-button:after,
    &::-moz-inner-spin-button:after,
    &::-moz-outer-spin-button:after {
      content: "";
    }

    &:focus {
      outline: none;
    }
  }

  > div {
    span {
      display: none;
    }

    div {
      max-height: 1.8rem;
      min-height: 0;
    }

    .Select {
      //main wrapper
      &__control {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        color: var(--color-text-idle);
        font-size: 1.4rem;
        line-height: normal;
        letter-spacing: -0.032rem;
        height: 2.4rem;

        gap: 1.3rem;
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
        line-height: 1;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.6rem;
        }
      }
      &__single-value {
        font-size: 1.4rem;
        line-height: 1;
        overflow: visible;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.6rem;
        }
      }

      // dropdown icon wrapper
      &__indicator {
        //idle icons
        svg {
          fill: var(--color-icon-idle);
          transition: fill 200ms;
          cursor: pointer;
          &:focus,
          &:hover {
            fill: var(--color-text-active);
          }
        }
        max-height: 1.4rem;
      }
      &__indicators {
        margin-bottom: 0.5rem;
      }
      //dropdown clear icon

      &__input {
        min-height: 0;
        max-height: 2.4rem;
        width: 100%;
        max-width: 0;
        min-width: 0;
        &-container {
          cursor: pointer;
          max-width: 0;
          min-width: 0;
          &:after {
            display: none;
            max-width: 0;
            min-width: 0;
          }
        }
      }
      &__value-container {
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        overflow-y: auto;
        gap: 12px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: visible;
      }

      &__menu {
        background: var(--color-bg);
        border-radius: 0.6rem;
        box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
        min-height: 13rem;
        margin-top: 1.6rem;
        right: -1.4rem;
        bottom: 0;
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        width: 10rem;

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
        width: 10rem;
        min-height: 13rem;
        border-radius: 0.6rem;
        font-size: 14px;
        font-style: normal;
        line-height: normal;
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
