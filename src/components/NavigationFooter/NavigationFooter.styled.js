import { styled } from "styled-components";

export const StyledNav = styled.nav`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      gap: 2rem;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      gap: 2.4rem;
    }

    > li {
      text-align: center;
      color: ${({ theme }) => theme.navigation.footer.colorIdle};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 128.571%;
      letter-spacing: -0.028rem;
      transition: color 100ms;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.navigation.footer.colorHover};
      }
      > a {
        text-align: center;
      }
    }
  }
`;
