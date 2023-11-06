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

  .menu {
    animation: fadeIn 0.2s ease-in-out;
  }
  display: flex;
  align-items: center;
  border-radius: 5px;
  .validation-error {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    padding: 0 4px;
    color: var(--color-error);
    bottom: -2.1rem;
    left: 0.71rem;
    text-align: center;
    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
  .validation-error--centered {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    padding: 0 4px;
    color: var(--color-error);
    bottom: -2.1rem;
    left: 50%;
    transform: translateX(-50%) !important;
    text-align: center;
    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }

  > .ingredient-flex-row {
    display: flex;
    max-width: 59rem;
    /* height: 5.9rem; */
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.$hasError === "true"
          ? css`var(--color-error)`
          : css`var(--color-ingredient-border-idle)`};
    background: var(--color-ingredient-bg);
    border-radius: 5px;
    padding: 1.2rem;
    transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    min-width: 25.1rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 1.7rem 1.6rem 1.6rem 1.6rem;
    }

    &:hover,
    &:focus {
      border: 1px solid
        ${(props) =>
          props.$hasError === "true"
            ? css`var(--color-error)`
            : css`var(--color-ingredient-border-active)`};
    }
    > .ingredient-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 5rem;
      border: none;
      align-self: center;
      max-height: 2.4rem;
      height: 1.8rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 2.4rem;
      }

      flex-grow: 1;
      cursor: text;
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        background: ${(props) =>
          props.$hasError === "true"
            ? css`var(--color-error)`
            : css`var(--color-ingredient-border-idle)`};
        width: 1px;
        height: 1.8rem;
        transform: translateY(-50%);
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 2.4rem;
        }
      }
      > div {
        display: flex;
        align-items: center;
        width: calc(100% - 1.6rem);
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
          overflow: hidden;
          min-width: 6rem;
          flex: 6;
          @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            font-size: 1.6rem;
          }
        }

        // dropdown icon wrapper
        &__indicator {
          height: 1.8rem;
          @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            height: 2.4rem;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          svg {
            fill: var(--color-icon-idle);
            transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
            cursor: pointer;
            &:focus,
            &:hover {
              fill: var(--color-text-active);
            }
          }
          max-height: 1.4rem;
        }

        &__input {
          min-height: 0;
          max-height: 1.8rem;
          width: 100%;
          overflow-x: hidden;
          max-width: 95%;
          &-container {
            display: inline-flex;
            overflow-x: hidden;
            flex-wrap: nowrap;
            cursor: pointer;
            flex: 1;
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
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
        }

        &__menu {
          transform-origin: top;
          animation: menu-fade-in 0.2s ease-in-out;
          white-space: nowrap;
          overflow-x: hidden;
          background: var(--color-bg);
          border-radius: 0.6rem;
          box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
          min-height: 33.4rem;
          margin-top: 0.8rem;
          scrollbar-width: thin;
          scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
          min-width: 5rem;
          right: 0;
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
          min-height: 33.4rem;
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
  }

  > button {
    background: none;
    border: none;
    cursor: pointer;
    width: 1.8rem;
    height: 1.8rem;
    margin-left: 1rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: auto;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-left: 1.4rem;
    }
    justify-self: flex-end;
    flex: 0;
    &:hover,
    &:focus {
      outline: none;
      > svg {
        stroke: var(--color-icon-remove);
      }
    }
    &:disabled {
      > svg {
        cursor: initial;
        stroke: var(--color-border-idle);
      }
    }
    > svg {
      transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      stroke: var(--color-icon-idle);
      width: 1.8rem;
      height: 1.8rem;
    }
  }

  .select-measure-wrapper {
    position: relative;
    background: var(--color-ingredient-bg);
    height: 5.3rem;
    gap: 1.4rem;
    display: flex;
    align-items: center;
    cursor: text;
    max-height: 2.4rem;

    > label:first-of-type {
      position: relative;
      padding: 0 1.2rem;
      height: 1.8rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 1.4rem;
        height: 2.4rem;
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        border-left: 1px solid
          ${(props) =>
            props.$hasError === "true"
              ? css`var(--color-error)`
              : css`var(--color-ingredient-border-idle)`};
        width: 0px;
        height: 1.8rem;
        transform: translateY(-50%);
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          height: 2.4rem;
        }
      }
      input {
        max-width: 3rem;
        color: var(--color-text-idle);
        font-family: Poppins;
        font-size: 1.4rem;
        line-height: 1;
        letter-spacing: -0.38px;
        overflow: visible;
        background: transparent;
        border: none;
        text-align: center;
        min-width: 2.6rem;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          min-width: 3.6rem;
          font-size: 1.6rem;
        }
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
        &::placeholder {
          color: var(--color-text-placeholder);
        }
      }
    }
    > label:nth-child(2) {
      display: flex;
      align-items: center;
      position: relative;
      height: 1.8rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 2.4rem;
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
          &__control {
            * {
              display: block;
            }
            width: 100%;
            display: flex;
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            color: var(--color-text-idle);
            font-size: 1.4rem;
            line-height: 1;
            letter-spacing: -0.032rem;
            height: 1.8rem;
            padding-left: 1.4rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              padding-left: 1.2rem;
            }
            max-width: 8rem;
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
              transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
              cursor: pointer;
              &:focus,
              &:hover {
                fill: var(--color-text-active);
              }
            }
            max-height: 1.4rem;
          }
          &__indicators {
            height: 1.8rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              height: 2.4rem;
            }
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &__indicator {
            align-self: center;
            height: 1.8rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              height: 2.4rem;
            }
            display: flex;
            justify-content: center;
            align-items: center;
          }

          &__input {
            position: absolute;
            top: 0;
            left: 0;
            min-height: 0;
            height: 1.8rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              height: 2.4rem;
            }
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
            scrollbar-width: thin;
            display: flex;
            flex-wrap: nowrap;
            scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
            gap: 10px;
            overflow: visible;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              width: 5.2rem;
            }
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
            min-width: 5rem;
            right: 0;
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
          &*:focus,
          &*:focus-within {
            color: var(--color-text-active);
          }
          &__option {
            min-height: 2rem;
            transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
            &:hover {
              color: var(--color-text-active);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
