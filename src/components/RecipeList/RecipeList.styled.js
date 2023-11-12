import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.8rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 4rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 5rem;
    }
  }
`;
