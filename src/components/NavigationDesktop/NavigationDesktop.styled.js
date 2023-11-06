import styled from "styled-components";

export const StyledNav = styled.nav`
  --font-navigation: ${({ theme }) => theme.navigation.font};
  --color-navigation-idle: ${({ theme }) => theme.navigation.colorIdle};
  --color-navigation-hover: ${({ theme }) => theme.navigation.colorHover};
  --blend-mode: ${({ theme }) => theme.navigation.blend};
  margin-right: auto;

  > ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    gap: 3rem;

    > li > a,
    > span {
      color: var(--color-navigation-idle);
      font-size: 1.4rem;
      font-family: var(--font-navigation);
      line-height: 1.8rem;
      letter-spacing: -0.028rem;
      font-weight: 500;
      font-style: normal;
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

      &:hover,
      &:focus {
        color: var(--color-navigation-hover);
        transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      }
    }

    > li {
      &:focus-within {
        mix-blend-mode: initial;
      }
      a > button > svg {
        stroke: var(--color-navigation-idle);
        width: 2.4rem;
        height: 2.4rem;
        transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
        mix-blend-mode: var(--blend-mode);
      }
    }

    > li {
      &:focus,
      &:hover {
        svg {
          stroke: var(--color-navigation-hover);
          transition: none;
          mix-blend-mode: initial;
        }
      }
    }

    > li > a > button {
      width: 2.4rem;
      height: 2.4rem;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
