import styled from "styled-components";
import { flexContainer, breakpoint } from "../styles/mixins";
import icon from "../assets/icons/login_background.svg";

export const StyledDiv = styled.main`
  ${flexContainer({
    justify: "center",
    direction: "column",
    align: "center",
  })}
  padding: 0 2rem;
  background: url(${icon});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  min-height: 100vh;

  > svg {
    min-width: 35.8rem;
    max-width: 50rem;
    width: 100%;
    min-height: 35.1rem;
    aspect-ratio: 1.14;
    padding: 0 2.5rem;
    margin-bottom: -5.6rem;
    ${breakpoint.tablet`
    `}
  }
`;
