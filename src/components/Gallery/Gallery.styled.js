import styled from "styled-components";

export const StyledGallery = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  gap: 2.4rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 4rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 5rem;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  > button {
    align-self: flex-end;
    max-width: 9.4rem;
    max-height: 3.8rem;
    font-size: 1.4rem;
    line-height: 1.285;
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
`;
