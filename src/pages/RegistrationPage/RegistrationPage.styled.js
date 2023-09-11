import styled from "styled-components";
import { flexContainer, breakpoint } from "../../styles/mixins";
import bgMobile from "../../assets/icons/auth-backgrounds/bg-mobile.svg";
import bgTablet from "../../assets/icons/auth-backgrounds/bg-tablet.svg";
import bgDesktop from "../../assets/icons/auth-backgrounds/bg-desktop.svg";

export const PageContent = styled.main`
  padding: 9.6rem 2rem 10rem 2rem;
  @media (max-height: 800px) {
    padding-top: 2.5rem;
  }
  min-height: 100vh;
  height: 100vh;
  width: 100vw;

  ${flexContainer({
    justify: "initial",
    direction: "column",
    align: "center",
  })}
  ${breakpoint.tablet`
    @media (max-height: 1100px) {
    padding-top: 2.5rem;
  }`}
  ${breakpoint.desktop`
        ${flexContainer({
          justify: "space-evenly",
          direction: "row",
          align: "center",
        })}
        padding: 0;
    `}

  &::after {
    position: fixed;
    content: "";
    background-image: url(${bgMobile});
    ${breakpoint.tablet`
      background-image: url(${bgTablet});
      background-size: 100vw 65vh;
    `}
    ${breakpoint.desktop`
      background-image: url(${bgDesktop});
      background-size: 100vw 40vh;
    `}
    background-repeat: no-repeat;
    background-size: 100vw 50vh;
    background-position: bottom;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
  }

  > svg {
    min-width: 28rem;
    min-height: 25rem;
    max-width: 50rem;
    width: 100%;
    ${breakpoint.tablet`
      min-height: 40rem;
    `};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    align-items: center;
    width: 100%;
    max-width: 50rem;
    > span {
      > a {
        font-size: 1.4rem;
        ${breakpoint.tablet`
          font-size: 1.6rem;
        `};
        text-decoration-line: underline;
        color: ${({ theme }) => theme.link.authNav};
        transition: color 100ms;
        &:hover,
        &:focus {
          color: ${({ theme }) => theme.link.authNavActive};
        }
      }
    }
  }
`;
