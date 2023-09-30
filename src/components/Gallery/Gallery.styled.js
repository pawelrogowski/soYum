import styled from "styled-components";

export const StyledGallery = styled.section`
  margin-bottom: 3.2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 5rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 1.4rem;
    margin-bottom: 10rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 3.2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3.2rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 1.4rem;
    }
    li {
      flex-basis: 100%;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        flex-basis: calc((100% - 1 * 3.2rem) / 2);
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        flex-basis: calc((100% - 3 * 1.4rem) / 4);
      }
    }
  }
  h2 {
    margin-bottom: 3.2rem;
  }
`;
