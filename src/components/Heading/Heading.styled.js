import styled from "styled-components";

export const StyledHeading = styled.h1`
  --color-text: ${({ theme }) => theme.heading.color};
  color: var(--color-text);
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.056rem;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.2rem;
    letter-spacing: -0.064rem;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 4.4rem;
    letter-spacing: -0.088rem;
  }
`;
