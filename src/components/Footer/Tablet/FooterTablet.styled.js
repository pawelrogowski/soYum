import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --footer-bg-color: ${({ theme }) => theme.bg.footer};
  --tablet-breakpoint: ${({ theme }) => theme.breakpoints.tablet};
  --desktop-breakpoint: ${({ theme }) => theme.breakpoints.desktop};
  --logo-text-idle: ${({ theme }) => theme.footer.logoTextIdle};
  --logo-text-active: ${({ theme }) => theme.footer.logoTextActive};

  background-color: var(--footer-bg-color);
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    padding-top: 2.8rem;
    padding-bottom: 1.75rem;

    @media (min-width: var(--tablet-breakpoint)) {
      padding-top: 5rem;
      padding-bottom: 2.35rem;
    }

    @media (min-width: var(--desktop-breakpoint)) {
      padding-top: 6.4rem;
      padding-bottom: 4.95rem;
    }

    div {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2.4rem;

        ul {
          padding-left: 21px;
        }

        a:first-of-type {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          span {
            color: var(--logo-text-idle);
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 1.8rem;
            letter-spacing: 0.027rem;
            transition: color 200ms;

            &:hover,
            &:focus,
            &:focus-within {
              color: var(--logo-text-active);
            }
          }

          @media (min-width: var(--tablet-breakpoint)) {
            gap: 1.2rem;

            span {
              font-size: 2.8rem;
              line-height: 100%;
              letter-spacing: 0.042rem;
            }
          }

          &:hover,
          &:focus,
          &:focus-within {
            span {
              color: var(--logo-text-active);
            }
          }
        }
      }

      nav {
        padding-right: 20px;
      }
    }
  }
`;
