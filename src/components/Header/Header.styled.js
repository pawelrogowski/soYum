import { styled } from "styled-components";

export const StyledHeader = styled.header`
  --color-decoration: ${({ theme }) => theme.backgroundDecoration.primary};

  position: relative;
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  padding: 1.8rem 1.8rem 0 1.8rem;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.3rem;
    background-color: var(--color-decoration);
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 1.4rem;
      height: 1.4rem;
    }
  }

  &::before {
    bottom: -2.1rem;
    left: 14.3rem;
    rotate: -25deg;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      bottom: -5.8rem;
      left: 19.8rem;
    }
  }

  &::after {
    bottom: -4.4rem;
    right: 1rem;
    rotate: -25deg;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      bottom: -6.9rem;
      right: 10rem;
    }
  }

  > a:first-of-type {
    z-index: 1;
    margin-right: auto;
  }

  > a:focus-within {
    > svg {
      outline: 0.2rem solid black;
    }
  }
`;
