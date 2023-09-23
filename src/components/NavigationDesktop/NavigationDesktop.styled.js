import styled from "styled-components";

export const StyledNav = styled.nav`
  --font-family: ${({ theme }) => theme.navigation.font};
  --color-idle: ${({ theme }) => theme.navigation.colorIdle};
  --color-hover: ${({ theme }) => theme.navigation.colorHover};
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
      color: var(--color-idle);
      font-size: 1.4rem;
      font-family: var(--font-family);
      line-height: 1.8rem;
      letter-spacing: -0.028rem;
      font-weight: 500;
      font-style: normal;
      transition: color 100ms;

      &:hover,
      &:focus {
        color: var(--color-hover);
        transition: color 100ms;
      }
    }

    > li > button > svg {
      stroke: var(--color-idle);
      width: 2.4rem;
      height: 2.4rem;
      transition: stroke 100ms;
    }

    > li {
      &:focus,
      &:hover {
        svg {
          stroke: var(--color-hover);
          transition: color 100ms;
        }
      }
    }

    > li > button {
      width: 2.4rem;
      height: 2.4rem;
      background: none;
      border: none;
      outline: none;
      cursor: pointer;
    }
  }
`;
