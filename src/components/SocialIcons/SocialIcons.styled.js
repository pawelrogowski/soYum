import styled from "styled-components";

export const StyledUl = styled.ul`
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1.8rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    &:hover,
    &:focus {
      svg {
        fill: ${({ theme }) => theme.icon.social.fillHover};
        transition: fill 100ms;
      }
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.icon.social.fill};
    transition: fill 100ms;
  }
`;
