import styled from "styled-components";

export const StyledNav = styled.nav`
  --color-text-idle: ${({ theme: t }) => t.categoryFilter.textIdle};
  --color-text-active: ${({ theme: t }) => t.categoryFilter.textActive};
  --color-decoration-idle: ${({ theme: t }) => t.categoryFilter.decorationIdle};
  --color-decoration-active: ${({ theme: t }) => t.categoryFilter.decorationIdle};
  --color-button-idle: ${({ theme: t }) => t.categoryFilter.buttonIdle};
  --color-button-active: ${({ theme: t }) => t.categoryFilter.buttonActive};
  --color-button-disabled: ${({ theme: t }) => t.categoryFilter.buttonDisabled};
  position: relative;
  width: 100%;
  height: 9.6rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  border-bottom: 0.1rem solid var(--color-decoration-idle);
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
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
      pointer-events: none;
      > svg {
        stroke: var(--color-button-disabled);
        fill: var(--color-button-disabled);
      }
    }
    > svg {
      transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
        fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
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
        transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
        &:hover,
        &:focus {
          color: var(--color-button-active);
        }
      }
    }
  }
  .active-link {
    color: ${({ theme: t }) => t.brandColors.main} !important;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -4.2rem;
      left: 50%;
      width: calc(100% + 3.2rem);
      height: 0;
      border: 0.4rem solid ${({ theme: t }) => t.brandColors.main};
      transform: translateX(-50%);
      border-radius: 4px;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        bottom: -4.8rem;
      }
    }
  }
  .active-link-extreme {
    color: ${({ theme: t }) => t.brandColors.main} !important;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      bottom: -4.2rem;
      left: 50%;
      width: 100%;
      height: 0;
      border: 0.4rem solid ${({ theme: t }) => t.brandColors.main};
      transform: translateX(-50%);
      border-radius: 4px;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        bottom: -4.8rem;
      }
    }
  }
`;
