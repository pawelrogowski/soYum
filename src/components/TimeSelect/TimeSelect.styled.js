import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme }) => theme.categorySelect.bg};
  --color-text-idle: ${({ theme }) => theme.categorySelect.textIdle};
  --color-text-active: ${({ theme }) => theme.categorySelect.textActive};
  --color-text-placeholder: ${({ theme }) => theme.categorySelect.textPlaceholder};
  --color-icon-idle: ${({ theme }) => theme.categorySelect.iconIdle};
  --color-icon-active: ${({ theme }) => theme.categorySelect.iconActive};
  --color-icon-remove: ${({ theme }) => theme.categorySelect.iconRemove};
  --color-border-idle: ${({ theme }) => theme.categorySelect.borderIdle};
  --color-border-active: ${({ theme }) => theme.categorySelect.borderActive};
  --color-accent: ${({ theme }) => theme.categorySelect.accent};
  --color-scrollbar-bg: ${({ theme }) => theme.categorySelect.scrollbarBg};
  --color-scrollbar-thumb: ${({ theme }) => theme.categorySelect.scrollbarThumb};

  display: flex;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid var(--color-border-idle);
  height: 4.4rem;
  transition: border-color 200ms;
  width: 100%;
  cursor: pointer;
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--color-border-active);
  }

  > span {
    width: 100%;
    color: var(--color-text-placeholder);
    font-size: 1.4rem;
    line-height: 1;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.6rem;
    }
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
      //main wrapper
      &__control {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--color-text-idle);
        font-size: 1.4rem;
        line-height: normal;
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
        line-height: 1;
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
        margin-bottom: 0.5rem;
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
        border: 1px solid var(--color-border-active);
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
        min-height: 0;
        max-height: 2.4rem;
        width: 100%;
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
        scrollbar-color: var(--color-scrollbar-thumb) var(--color-scrollbar-bg);
        overflow-y: auto;
        gap: 12px;
        width: 11rem;
      }

      &__menu {
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
