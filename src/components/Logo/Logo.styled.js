import styled, { css } from "styled-components";

import { Icon } from "../Icon/Icon";

export const LogoIcon = styled(Icon)`
  --color-logo-header-icon: ${({ theme: t }) => t.logo.header.icon};
  --color-logo-header-bg: ${({ theme: t }) => t.logo.header.bg};
  --color-logo-footer-icon: ${({ theme: t }) => t.logo.footer.icon};
  --color-logo-footer-bg: ${({ theme: t }) => t.logo.footer.bg};

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
          stroke: var(--color-logo-header-icon);
          background-color: var(--color-logo-header-bg);
        `
      : variant === "footer"
      ? css`
          stroke: var(--color-logo-footer-icon);
          background-color: var(--color-logo-footer-bg);

          @media screen and (max-width: ${(props) => props.theme.breakpoints.tablet}) {
            border-radius: 0.6rem;
            padding: 0.4rem 0.2rem 0.3rem 0.3rem;
            max-width: 3.2rem;
            max-height: 3.2rem;
          }
        `
      : null}

  @media screen and (min-width: var(--breakpoint-tablet)) {
    max-width: 4.4rem;
    max-height: 4.4rem;
  }
`;
