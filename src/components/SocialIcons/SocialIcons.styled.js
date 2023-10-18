import styled from "styled-components";

export const StyledUl = styled.ul`
  --breakpoint-tablet: ${({ theme }) => theme.breakpoints.tablet};
  --color-social-fill: ${({ theme }) => theme.icon.social.fill};
  --color-social-fillHover: ${({ theme }) => theme.icon.social.fillHover};

  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1.8rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    display: flex;
    align-items: center;
    &:hover,
    &:focus {
      svg {
        fill: var(--color-social-fillHover);
        transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      }
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: var(--color-social-fill);
    transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 2rem;
      height: 2rem;
    }
  }
`;
