import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --breakpoint-desktop: ${(props) => props.theme.breakpoints.desktop};
  --color-bg-footer: ${({ theme }) => theme.bg.footer};
  --color-footer-logoTextActive: ${({ theme }) => theme.footer.logoTextActive};

  background-color: var(--color-bg-footer);
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    padding-top: 2.8rem;
    padding-bottom: 1.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;

    a:first-of-type {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      &:hover,
      &:focus,
      &:focus-within {
        span {
          color: var(--color-footer-logoTextActive);
        }
      }

      > span {
        color: #fafafa;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.8rem;
        letter-spacing: 0.027rem;
        transition: color 200ms;

        &:hover,
        &:focus,
        &:focus-within {
          color: #86aa43;
        }
      }
    }
  }
`;
