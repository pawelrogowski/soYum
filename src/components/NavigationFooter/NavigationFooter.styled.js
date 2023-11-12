import { styled } from "styled-components";

export const StyledNav = styled.nav`
  --color-navigation-footer-idle: ${({ theme: t }) => t.navigation.footer.colorIdle};
  --color-navigation-footer-hover: ${({ theme: t }) => t.navigation.footer.colorHover};

  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 2rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 2.4rem;
    }

    > li {
      display: flex;
      justify-content: center;
      color: var(--color-navigation-footer-idle);
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.28;
      letter-spacing: -0.028rem;
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;

      &:hover,
      &:focus {
        color: var(--color-navigation-footer-hover);
      }
      > a {
        text-align: center;
      }
    }
  }
`;
