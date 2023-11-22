import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-bg: ${({ theme: t }) => t.paginationFilter.bg};
  --color-box-shadow: ${({ theme: t }) => t.paginationFilter.boxShadow};
  --color-link-switch-idle: ${({ theme: t }) => t.paginationFilter.switchLinkIdle};
  --color-link-switch-active: ${({ theme: t }) => t.paginationFilter.switchLinkActive};
  --color-link-switch-disabled: ${({ theme: t }) => t.paginationFilter.switchLinkDisabled};
  --color-link-page-bg-idle: ${({ theme: t }) => t.paginationFilter.pageLinkBgIdle};
  --color-link-page-bg-active: ${({ theme: t }) => t.paginationFilter.pageLinkBgActive};
  --color-link-page-current: ${({ theme: t }) => t.paginationFilter.pageLinkBgCurrent};
  --color-link-page-font-idle: ${({ theme: t }) => t.paginationFilter.pageLinkFontIdle};
  --color-link-page-font-active: ${({ theme: t }) => t.paginationFilter.pageLinkFontActive};
  --color-link-page-font-current: ${({ theme: t }) => t.paginationFilter.pageLinkFontCurrent};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  border-radius: 2.6rem;
  box-shadow: 0px 4px 4px 0px var(--color-box-shadow);
  background: var(--color-bg);
  .link-disabled {
    pointer-events: none;
    > svg {
      transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
        stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      fill: var(--color-link-switch-disabled);
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  > a {
    cursor: pointer;
    height: 100%;
    padding: 0 2rem;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:first-of-type {
      transform: scaleX(-1);
    }
    > svg {
      transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
        stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      fill: var(--color-link-switch-idle);
      width: 1.5rem;
      height: 1.5rem;
    }
    &:hover,
    &:focus {
      > svg {
        fill: var(--color-link-switch-active);
        stroke: var(--color-link-switch-active);
      }
    }
  }
  > ul {
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 100%;
    > li {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .current-page {
        background-color: var(--color-link-page-current);
        color: var(--color-link-page-font-current);
      }
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: var(--color-link-page-font-idle);
        text-align: center;
        font-size: 1.2rem;
        width: 2.8rem;
        height: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
          background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
        &:hover,
        &:focus {
          color: var(--color-link-page-font-active);
          background-color: var(--color-link-page-bg-active);
        }
      }
    }
  }
`;
