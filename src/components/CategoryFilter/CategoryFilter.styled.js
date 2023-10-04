import styled from "styled-components";

export const StyledNav = styled.nav`
  --color-text-idle: ${({ theme }) => theme.categoryFilter.textIdle};
  --color-text-active: ${({ theme }) => theme.categoryFilter.textActive};
  --color-decoration-idle: ${({ theme }) =>
    theme.categoryFilter.decorationIdle};
  --color-decoration-active: ${({ theme }) =>
    theme.categoryFilter.decorationIdle};
  --color-button-idle: ${({ theme }) => theme.categoryFilter.buttonIdle};
  --color-button-active: ${({ theme }) => theme.categoryFilter.buttonActive};
  --color-button-disabled: ${({ theme }) =>
    theme.categoryFilter.buttonDisabled};
  position: relative;
  width: 100%;
  height: 9.6rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  border-bottom: 0.1rem solid var(--color-decoration-idle);
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 10.6rem;
  }

  > button {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    &:first-of-type {
      transform: rotate(180deg);
    }
    &:disabled {
      > svg {
        stroke: var(--color-button-disabled);
        fill: var(--color-button-disabled);
      }
    }
    > svg {
      transition: stroke 200ms, fill 200ms;
      stroke: var(--color-button-idle);
      fill: var(--color-button-idle);
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  > button:not(:disabled) {
    &:hover,
    &:focus {
      > svg {
        stroke: var(--color-button-active);
        fill: var(--color-button-active);
      }
    }
  }
  > ul {
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2.8rem;
    > li {
      > a {
        color: var(--color-text-idle);
        font-size: 1.4rem;
        line-height: 1;
        transition: color 200ms;
        &:hover,
        &:focus {
          color: var(--color-button-active);
        }
      }
    }
  }
  .active-link {
    color: ${({ theme }) => theme.brandColors.main} !important;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -4.2rem;
      left: 50%;
      width: calc(100% + 3.2rem);
      height: 0;
      border: 0.4rem solid ${({ theme }) => theme.brandColors.main};
      transform: translateX(-50%);
      border-radius: 4px;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        bottom: -4.8rem;
      }
    }
  }
  .active-link-extreme {
    color: ${({ theme }) => theme.brandColors.main} !important;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -4.2rem;
      left: 50%;
      width: 100%;
      height: 0;
      border: 0.4rem solid ${({ theme }) => theme.brandColors.main};
      transform: translateX(-50%);
      border-radius: 4px;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        bottom: -4.8rem;
      }
    }
  }
`;
