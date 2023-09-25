import { styled } from "styled-components";

export const StyledHeader = styled.header`
  --color-decoration: ${({ theme }) => theme.backgroundDecoration.primary};

  position: relative;
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  width: 100%;
  height: 4.6rem;
  padding: 0 1.6rem;
  margin-top: 2.1rem;
  margin: 2.1rem auto 5rem auto;

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

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 7.3rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-bottom: 10.2rem;
  }

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  > a:first-of-type {
    z-index: 1;
    margin-right: auto;
  }

  > a:focus-within {
    > svg {
      outline: 2px solid black;
    }
  }
`;
