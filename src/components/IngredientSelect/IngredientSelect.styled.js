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
  border-radius: 5px;
  .validation-error {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    overflow: hidden;
    border-left: 1px solid var(--color-error);
    border-right: 1px solid var(--color-error);
    border-left-width: 50%;
    max-width: 100%;
    color: var(--color-error);
    bottom: 3.7rem;
    padding: 0 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    overflow: visible;
  }

  .validation-error--measure {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    overflow: hidden;
    border-left: 1px solid var(--color-error);
    border-right: 1px solid var(--color-error);
    border-left-width: 50%;
    max-width: 100%;
    color: var(--color-error);
    bottom: 3.4rem;
    padding: 0 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    overflow: visible;
  }
  .validation-error--amount {
    display: block !important;
    position: absolute;
    background: var(--color-error-bg);
    overflow: hidden;
    border-left: 1px solid var(--color-error);
    border-right: 1px solid var(--color-error);
    border-left-width: 50%;
    width: calc(100% + 3px);
    color: var(--color-error);
    bottom: 3.5rem;
    padding: 0 0.6rem;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    overflow: visible;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 0.8rem;
      bottom: 3.7rem;
      width: calc(100% + 3px);
    }
  }

  > .ingredient-flex-row {
    display: flex;
    max-width: 59rem;
    height: 5.9rem;
    width: 100%;
    border: 1px solid
      ${(props) =>
        props.$hasError === "true"
          ? css`var(--color-error)`
          : css`var(--color-ingredient-border-idle)`};
    background: var(--color-ingredient-bg);
    border-radius: 5px;
    padding: 1.7rem 1.2rem 1.2rem 1.2rem;
    transition: border-color 100ms;
    min-width: 278px;
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

      max-height: 2.4rem;
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
        height: 24px;
        transform: translateY(-50%);
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
            flex-wrap: nowrap;
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
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
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
          font-size: 1.4rem;
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
    margin-left: 1rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 1.4rem;
    }
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
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding: 0 1.4rem;
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
        height: 24px;
        transform: translateY(-50%);
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
      }
    }
    > label:nth-child(2) {
      position: relative;
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
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              margin-bottom: 2px;
            }
          }
          //dropdown clear icon

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
            scrollbar-width: thin;
            display: flex;
            flex-wrap: nowrap;
            scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
            gap: 10px;
            overflow: visible;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              margin-bottom: 2px;

              width: 5.2rem;
            }
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
            font-size: 1.4rem;
            font-style: normal;
            line-height: 1;
            letter-spacing: -0.28px;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0.8rem 1.8rem;
            @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
              font-size: 1.6rem;
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
      }
    }
  }
`;
