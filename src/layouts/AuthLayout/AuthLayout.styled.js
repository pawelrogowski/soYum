import styled from "styled-components";
import { StyledDiv } from "../../components/Container/Container.styled";
export const PageContent = styled(StyledDiv)`
  max-width: 1860px;
  margin: 0 auto;
  padding: 9.6rem 2rem 10rem 2rem;
  @media (max-height: 800px) {
    padding-top: 2.5rem;
  }
  min-height: 100vh;
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    @media (max-height: 1100px) {
      padding-top: 2.5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }

  &::after {
    position: fixed;
    content: "";
    background-color: ${({ theme }) => theme.bg.form};

    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    clip-path: polygon(38% 54%, 57% 54%, 100% 50%, 100% 0%, 0% 0%, 0% 50%);
  }

  > svg {
    min-width: 28rem;
    min-height: 25rem;
    max-width: 50rem;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-height: 40rem;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    align-items: center;
    width: 100%;
    max-width: 50rem;
    > a {
      font-size: 1.4rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.6rem;
      }
      text-decoration-line: underline;
      color: ${({ theme }) => theme.link.authNav};
      transition: color 100ms;
      &:hover,
      &:focus {
        color: ${({ theme }) => theme.link.authNavActive};
      }
    }
  }
`;
