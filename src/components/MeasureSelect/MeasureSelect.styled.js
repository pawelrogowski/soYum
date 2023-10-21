import Select from "react-select";
import styled from "styled-components";

export const StyledSelect = styled(Select)`
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

  padding: 1.6rem 1.2rem 1.6rem 1.6rem;
  border: none;
  background: #f5f5f5;
  height: 5.3rem;
  width: 9.7rem;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  transition: border-color 200ms;
  cursor: text;
  &:hover,
  &:focus {
    border: 1px solid var(--color-border-active);
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
      &-container {
        display: none;
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
      background: var(--color-bg);
      border-radius: 0.6rem;
      box-shadow: 0px 7px 8px 5px rgba(0, 0, 0, 0.1);
      min-height: 13rem;

      right: 0;
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
      min-height: 13rem;
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
`;
