import styled from "styled-components";

export const PageContent = styled.div`
  max-width: 1860px;
  margin: 0 auto;
  padding: 9.6rem 2rem 10rem 2rem;
  @media screen and (max-height: 800px) {
    padding-top: 2.5rem;
  }
  min-height: 100dvh;
  height: 100dvh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: initial;
  align-items: center;

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    @media screen and (max-height: 1100px) {
      padding-top: 2.5rem;
    }
  }

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  }

  &::after {
    position: fixed;
    content: "";
    background-color: ${({ theme: t }) => t.bg.form};

    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
    clip-path: polygon(38% 54%, 57% 54%, 100% 50%, 100% 100%, 0% 100%, 0% 50%);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fafafa;
    z-index: -2;
  }

  > svg {
    min-width: 28rem;
    min-height: 25rem;
    max-width: 50rem;
    width: 100%;

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
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

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        font-size: 1.6rem;
      }
      text-decoration-line: underline;
      color: ${({ theme: t }) => t.link.authNav};
      transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
      &:hover,
      &:focus {
        color: ${({ theme: t }) => t.link.authNavActive};
      }
    }
  }
`;
