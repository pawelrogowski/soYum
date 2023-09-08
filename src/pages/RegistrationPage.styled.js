import styled from "styled-components";
import { flexContainer, breakpoint } from "../styles/mixins";
import bgMobile from "../assets/icons/auth-backgrounds/bg-mobile.svg";
import bgTablet from "../assets/icons/auth-backgrounds/bg-tablet.svg";
import bgDesktop from "../assets/icons/auth-backgrounds/bg-desktop.svg";

export const StyledDiv = styled.main`
  padding: 9.6rem 2rem 10rem 2rem;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;

  ${flexContainer({
    justify: "initial",
    direction: "column",
    align: "center",
  })}

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
    min-width: 35.8rem;
    max-width: 50rem;
    width: 100%;
    min-height: 35.1rem;
    aspect-ratio: 1;
    padding: 0 2.5rem;
    /* margin-bottom: -5.8rem; */
  }
`;
