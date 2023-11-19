import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-top: 11.4rem;
  width: 100dvw;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    margin-top: 10.4rem;
  }
  > h1 {
    margin-bottom: 1.8rem;
    color: rgba(139, 170, 54, 1);
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.048rem;
    text-align: center;
    text-wrap: balance;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      margin-bottom: 2.4rem;
      font-size: 4.4rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.088rem;
      max-width: 50.6rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      max-width: 58.6rem;
    }
  }
  > p {
    margin-bottom: 2.4rem;
    color: rgba(34, 37, 42, 1);
    text-align: center;
    text-wrap: balance;
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.33;
    letter-spacing: -0.024rem;
    max-width: 30rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      color: rgba(35, 38, 42, 1);
      font-size: 1.8rem;
      letter-spacing: -0.036rem;
      max-width: 50.6rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      max-width: 58.6rem;
    }
  }
  > button {
    color: rgba(34, 37, 42, 1);
    width: 15rem;
    height: 3.5rem;
    margin-bottom: 3.8rem;
    font-size: 1rem;
    line-height: 1.5;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      width: 27.8rem;
      height: 5.9rem;
      font-size: 1.6rem;
      margin-bottom: 6rem;
    }
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 0.8rem;
    }
    > svg {
      width: 1.6rem;
      height: 1.6rem;
      stroke: rgba(0, 0, NaN, 1);
      stroke-width: 3px;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        width: 2.1rem;
        height: 2.1rem;
      }
    }
    > span {
      margin-top: 0.1rem;
      color: rgba(35, 38, 42, 1);
      font-size: 1rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.024rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        color: rgba(35, 38, 42, 1);
        font-size: 1.4rem;
      }
    }
  }
`;
