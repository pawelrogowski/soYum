import { styled } from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  width: 100%;
  height: 4.6rem;
  padding: 0 1.6rem;
  margin-top: 2.1rem;
  margin: 2.1rem auto 5rem auto;

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
