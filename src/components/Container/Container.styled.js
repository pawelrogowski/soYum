import styled, { css } from "styled-components";
import icon from "../../assets/icons/login_background.svg";
import { breakpoint, flexContainer } from "../../styles/mixins";

export const StyledDiv = styled.div`
  padding: 0 2rem;
  min-width: 3.75rem;

  ${({ $variant }) =>
    $variant === "Registration"
      ? css`
          ${flexContainer({
            justify: "center",
            direction: "column",
            align: "center",
            gap: "2rem",
          })}
          background: url(${icon});
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center bottom;
          min-height: 100vh;
        `
      : null}/* ${breakpoint.tablet(css`
    padding: 4.4rem 5rem;
  `)}; */
`;
