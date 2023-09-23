import styled, { css } from "styled-components";
import { Icon } from "../Icon/Icon";

export const LogoIcon = styled(Icon)`
  --logo-header-icon: ${({ theme }) => theme.logo.header.icon};
  --logo-header-bg: ${({ theme }) => theme.logo.header.bg};
  --logo-footer-icon: ${({ theme }) => theme.logo.footer.icon};
  --logo-footer-bg: ${({ theme }) => theme.logo.footer.bg};
  --breakpoints-tablet: ${({ theme }) => theme.breakpoints.tablet};

  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  border-radius: 1.2rem;
  stroke-width: 2;
  padding: 0.7rem 0.5rem 0.6rem 0.6rem;
  max-width: 4rem;
  max-height: 4rem;

  ${({ variant }) =>
    variant === "header"
      ? css`
          stroke: var(--logo-header-icon);
          background-color: var(--logo-header-bg);
        `
      : variant === "footer"
      ? css`
          stroke: var(--logo-footer-icon);
          background-color: var(--logo-footer-bg);

          @media (max-width: var(--breakpoints-tablet)) {
            border-radius: 0.6rem;
            padding: 0.4rem 0.2rem 0.3rem 0.3rem;
            max-width: 3.2rem;
            max-height: 3.2rem;
          }
        `
      : null}

  @media (min-width: var(--breakpoints-tablet)) {
    max-width: 4.4rem;
    max-height: 4.4rem;
  }
`;
