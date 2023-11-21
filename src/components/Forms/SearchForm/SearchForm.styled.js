import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  --color-form-search-borderIdle: ${({ theme: t }) => t.form.search.borderIdle};
  --color-form-search-font: ${({ theme: t }) => t.form.search.font};
  --font-form: ${({ theme: t }) => t.form.font};
  --color-button-base-bgHover: ${({ theme: t }) => t.button.base.bgHover};
  --color-form-search-borderFocus: ${({ theme: t }) => t.form.search.borderFocus};
  --color-form-search-placeholder: ${({ theme: t }) => t.form.search.placeholder};
  --color-form-search-background: ${({ theme: t }) => t.form.search.background};
  --color-bg: ${({ theme: t }) => t.select.bg};
  --color-text-idle: ${({ theme: t }) => t.select.textIdle};
  --color-text-active: ${({ theme: t }) => t.select.textActive};
  --color-text-placeholder: ${({ theme: t }) => t.select.textPlaceholder};
  --color-icon-idle: ${({ theme: t }) => t.select.iconIdle};
  --color-icon-active: ${({ theme: t }) => t.select.iconActive};
  --color-icon-remove: ${({ theme: t }) => t.select.iconRemove};
  --color-border-idle: ${({ theme: t }) => t.select.borderIdle};
  --color-border-active: ${({ theme: t }) => t.select.borderActive};
  --color-accent: ${({ theme: t }) => t.select.accent};
  --color-scrollbar-bg: ${({ theme: t }) => t.select.scrollbarBg};
  --color-scrollbar-thumb: ${({ theme: t }) => t.select.scrollbarThumb};
  --color-error: ${({ theme: t }) => t.select.error};
  --color-error-bg: ${({ theme: t }) => t.select.errorBg};
  --color-ingredient-bg: ${({ theme: t }) => t.select.ingredient.bg};
  --color-border-search: ${({ theme: t }) => t.select.colorBorderSearch};

  width: 100%;
  max-width: 50.1rem;
  position: relative;
  min-width: ${({ theme: t }) => t.breakpoints.minContent};
  ${({ $variant }) =>
    $variant === "page" &&
    css`
      max-width: 32rem;

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        max-width: 36.2rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        max-width: 50.1rem;
      }
    `}
  label,
  p {
    display: none;
  }

  input {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    background: var(--color-form-search-background);
    height: 7rem;
    width: 100%;
    border: 0.1rem solid var(--color-form-search-borderIdle);
    border-radius: 2.4rem 4.4rem 2.4rem 4.4rem;
    padding: 0 17rem 0rem 3rem;
    outline: none;
    transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
    color: var(--color-form-search-font);
    font-size: 1.6rem;
    font-family: var(--font-form);
    height: 5.3rem;
    padding-right: 12.6rem;
    font-size: 1.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      height: 5.7rem;
      font-size: 1.6rem;
      padding-right: 14.6rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      height: 7rem;
      padding-right: 18.6rem;
    }

    &:not(:placeholder-shown) ~ Button {
      &:hover {
        border: 0.1rem solid var(--color-button-base-bgHover);
        background-color: var(--color-button-base-bgHover);
      }
    }

    &:focus,
    &:hover,
    &:focus-within {
      transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      border: 0.1rem solid var(--color-form-search-borderFocus);
    }

    &::placeholder {
      color: var(--color-form-search-placeholder);
    }
  }

  button {
    position: absolute;
    right: 0rem;
    top: 0;
    background: ${({ theme: t }) => t.form.search.button.bgIdle};
    border-color: ${({ theme: t }) => t.form.search.button.borderIdle};
    height: 5.3rem;
    font-size: 1.4rem;
    width: 11.3rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      width: 13.1rem;
      height: 5.7rem;
      font-size: 1.6rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      width: 16.1rem;
      height: 7rem;
    }
    &:hover,
    &:focus {
      background: ${({ theme: t }) => t.form.search.button.bgActive};
      border-color: ${({ theme: t }) => t.form.search.button.borderActive};
    }
  }

  .select-container {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    margin-top: 2.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      margin-top: 2.8rem;
      gap: 1.8rem;
    }
    > span:first-of-type {
      width: auto;
      color: ${({ $placeholderShown }) =>
        $placeholderShown ? css`var(--color-text-placeholder)` : css`var(--color-text-idle)`};
      font-size: 1.2rem;
      line-height: 1.33;
      font-weight: 500;
      letter-spacing: -0.24px;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        font-size: 1.6rem;
      }
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    > div {
      border: 1px solid var(--color-border-search);
      background: var(--color-ingredient-bg);
      border-radius: 5px;
      height: 3.4rem;
      padding: 8px 14px;

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        height: 4.1rem;
      }
      > div {
        width: 14.6rem;
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 17.5rem;
        }
        span {
          display: none;
        }

        div {
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
            font-size: 1.2rem;
            line-height: 1.5;
            letter-spacing: -0.032rem;
            height: 1.8rem;
            ::-webkit-scrollbar {
              width: 0px;
            }
            @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
              font-size: 1.6rem;
            }
          }

          &__placeholder {
            color: var(--color-text-placeholder);
            font-size: 1.2rem;
            line-height: 1.5;
            letter-spacing: -0.24px;
            @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
              font-size: 1.6rem;
            }
          } // dropdown icon wrapper
          &__indicator {
            //idle icons
            svg {
              fill: var(--color-icon-idle);
              transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
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
            height: 1.8rem;
            display: flex;
            justify-content: center;
            align-items: center;
            @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
              height: 2.4rem;
            }
          }
          &__indicator {
            align-self: center;
            height: 1.8rem;
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
            max-height: 1.8rem;
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
            scrollbar-width: thin;
            scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
            min-width: 9rem;
            right: -1.4rem;
            margin-top: 1.35rem;
            width: calc(100% + 28px);

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

            border-radius: 0.6rem;
            font-family: Poppins;
            font-size: 12px;
            line-height: 1.5;
            letter-spacing: -0.28px;
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            padding: 0.8rem 1.4rem;
            @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
              font-size: 1.6rem;
            }
          }

          &__option {
            min-height: 1.8rem;
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
  }
`;
