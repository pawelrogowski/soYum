import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 62rem;
  outline: none;
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    max-width: 120rem;
    width: 100%;
  }
  > div:first-of-type {
    display: flex;
    margin-bottom: 2.4rem;
    justify-content: space-between;
    padding-right: 3rem;
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;

    gap: 1.8rem;
  }
`;
