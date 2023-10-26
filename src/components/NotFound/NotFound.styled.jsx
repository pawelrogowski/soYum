import styled from "styled-components";

export const StyledSection = styled.section`
  --color-text: ${({ theme }) => theme.notFound.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
  > svg {
    width: 100%;
    height: 100%;
  }
  > h1 {
    color: var(--color-text);
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.11;
    letter-spacing: -0.036rem;
    margin-bottom: 0.8rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2.4rem;
      line-height: 1;
      letter-spacing: -0.048rem;
    }
  }
  > p {
    color: var(--color-text);
    text-align: center;
    font-size: 1.4rem;
    line-height: 1.28;
    letter-spacing: -0.028rem;
    opacity: 0.5;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.8rem;
      line-height: 1.33;
      letter-spacing: -0.036rem;
    }
  }
`;
