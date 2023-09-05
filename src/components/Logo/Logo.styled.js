import styled, { css } from "styled-components";
import { Icon } from "../Icon/Icon";
export const LogoIcon = styled(Icon)`
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  border-radius: 1.2rem;
  stroke-width: 2;
  padding: 0.7rem 0.5rem 0.6rem 0.6rem;
  max-width: 4rem;
  max-height: 4rem;

  ${({ variant, theme }) =>
    variant === "header"
      ? css`
          stroke: ${theme.logo.header.icon};
          background-color: ${theme.logo.header.bg};
        `
      : variant === "footer"
      ? css`
          stroke: ${theme.logo.footer.icon};
          background-color: ${theme.logo.footer.bg};

          @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            border-radius: 0.6rem;
            padding: 0.4rem 0.2rem 0.3rem 0.3rem;
            max-width: 3.2rem;
            max-height: 3.2rem;
          }
        `
      : null}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 4.4rem;
    max-height: 4.4rem;
  }
`;
