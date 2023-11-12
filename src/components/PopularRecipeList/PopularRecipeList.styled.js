import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  > h2 {
    margin-bottom: 3.2rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      margin-bottom: 4rem;
    }
  }
  > ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
      flex-direction: row;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      gap: 2.4rem;
      flex-direction: column;
    }
  }
`;
