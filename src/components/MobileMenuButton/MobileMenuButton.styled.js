import { css, styled } from "styled-components";

export const StyledButton = styled.button`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --color-mobileMenu-strokeIdle: ${({ theme: t }) => t.mobileMenu.strokeIdle};
  --color-font-alternative: ${({ theme: t }) => t.userAvatar.fontAlternativeIdle};
  --color-brand: ${({ theme: t }) => t.brandColors.main};
  --color-icon-mobile: ${({ theme: t }) => t.mobileMenu.strokeIdle};
  background: none;
  border: none;
  width: 2.8rem;
  height: 100%;
  z-index: 2;
  cursor: pointer;

  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    width: 3.2rem;
  }

  > svg {
    width: 2.8rem;
    height: 2.8rem;
    transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    @media screen and (max-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      stroke: var(--color-icon-mobile);
    }

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      width: 3.2rem;
      height: 3.2rem;
      stroke: var(--color-font-alternative);
    }
    ${({ $useAltColors }) =>
      $useAltColors &&
      css`
        stroke: var(--color-icon-mobile) !important;
      `}
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      stroke: var(--color-brand);
    }
  }
`;
