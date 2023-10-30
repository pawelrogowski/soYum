import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledDiv = styled(motion.div)`
  --color-bg: ${({ theme }) => theme.select.bg};
  --color-ingredient-bg: ${({ theme }) => theme.select.ingredient.bg};
  --color-ingredient-border-idle: ${({ theme }) => theme.select.ingredient.borderIdle};
  --color-ingredient-border-active: ${({ theme }) => theme.select.ingredient.borderActive};
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

  display: flex;
  align-items: center;

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

  .ingredient-wrapper {
    position: relative;
    > div {
      display: flex;
      align-items: center;
    }
  }
  > div:first-of-type {
    display: flex;
    gap: 1.4rem;
    max-width: 56rem;
    flex: 5;
    > div:first-of-type {
      padding: 1.6rem 1.2rem 1.6rem 1.6rem;
      border: none;
      background: var(--color-ingredient-bg);
      height: 5.3rem;
      width: 100%;
      max-width: 40.9rem;
      flex-grow: 1;
      border: 1px solid
        ${(props) =>
          props.$hasError === "true"
            ? css`var(--color-error)`
            : css`var(--color-ingredient-border-idle)`};
      border-radius: 5px;
      transition: border-color 100ms;
      cursor: text;
      &:hover,
      &:focus {
        border: 1px solid
          ${(props) =>
            props.$hasError === "true"
              ? css`var(--color-error)`
              : css`var(--color-ingredient-border-active)`};
      }

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
          align-items: center;
          justify-content: space-between;
          color: var(--color-text-idle);
          font-size: 1.4rem;
          line-height: 1;
          letter-spacing: -0.032rem;
          height: 1.8rem;
          flex-wrap: nowrap;
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
            transition: fill 100ms;
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
          max-height: 1.8rem;
          width: 100%;
          overflow-x: hidden;
          max-width: 95%;
          &-container {
            display: inline-flex;
            overflow-x: hidden;
            cursor: pointer;
            &:after {
              display: none;
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
          max-width: 40rem;
          overflow-x: hidden;
          background: var(--color-bg);
          border-radius: 0.6rem;
          box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
          min-height: 13rem;

          right: 0;
          bottom: 0;
          top: 3.5rem;
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
            background: var(--color-error);
            border-radius: 12px;
            border: 6px solid var(--color-error);
          }
        }

        &__menu-list {
          overflow-x: hidden;
          max-width: 40rem;
          border: 1px solid var(--color-accent);
          width: 100%;
          min-height: 13rem;
          border-radius: 0.6rem;
          font-family: Poppins;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.28px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 0.8rem 1.8rem;
        }

        &__option {
          overflow-x: hidden;
          max-width: 40rem;
          z-index: 5;
          min-height: 2rem;

          &:hover,
          &:focus {
            color: var(--color-text-active);
            cursor: pointer;
          }
        }
      }
    }
  }

  > button {
    background: none;
    border: none;
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: auto;
    justify-self: flex-end;
    flex: 0;
    &:hover,
    &:focus {
      > svg {
        stroke: var(--color-icon-remove);
      }
    }
    &:disabled {
      > svg {
        stroke: var(--color-border-idle);
      }
    }
    > svg {
      transition: stroke 100ms;
      stroke: var(--color-icon-idle);
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;
