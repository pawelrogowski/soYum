import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 100%;
  > h1 {
    margin-bottom: 5rem;
  }
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.8rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 4rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 5rem;
    }
  }
`;
