import { styled } from "styled-components";

export const StyledButton = styled.button`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --color-mobileMenu-strokeIdle: ${({ theme: t }) => t.mobileMenu.strokeIdle};
  --color-mobileMenu-strokeHomeMobile: ${({ theme: t }) => t.mobileMenu.strokeHomeMobile};
  --color-mobileMenu-strokeHomeTablet: ${({ theme: t }) => t.mobileMenu.strokeHomeTablet};
  --color-mobileMenu-strokeRecipeMobile: ${({ theme: t }) => t.mobileMenu.strokeRecipeMobile};
  --color-mobileMenu-strokeRecipeTablet: ${({ theme: t }) => t.mobileMenu.strokeRecipeTablet};
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
    stroke: ${({ $location: l }) =>
      l.includes("/home")
        ? "var(--color-mobileMenu-strokeHomeMobile)"
        : l.includes("/recipe")
        ? "var(--color-mobileMenu-strokeRecipeMobile)"
        : "var(--color-mobileMenu-strokeIdle)"};

    transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      stroke: ${({ $location: l }) =>
        l.includes("/home")
          ? "var(--color-mobileMenu-strokeHomeTablet)"
          : l.includes("/recipe")
          ? "var(--color-mobileMenu-strokeRecipeTablet)"
          : "var(--color-mobileMenu-strokeIdle)"};
    }

    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  &:focus,
  &:hover {
    svg {
      stroke: var(--color-brand);
    }
  }
`;
