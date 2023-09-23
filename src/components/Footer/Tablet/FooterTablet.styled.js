import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --color-bg-footer: ${({ theme }) => theme.bg.footer};
  --color-footer-logoTextIdle: ${({ theme }) => theme.footer.logoTextIdle};
  --color-footer-logoTextActive: ${({ theme }) => theme.footer.logoTextActive};

  background-color: var(--color-bg-footer);
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  div {
    width: 100%;
    padding-top: 2.8rem;
    padding-bottom: 1.75rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-top: 5rem;
      padding-bottom: 2.35rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
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
            color: var(--color-footer-logoTextIdle);
            font-size: 1.8rem;
            font-weight: 700;
            line-height: 1.8rem;
            letter-spacing: 0.027rem;
            transition: color 200ms;

            &:hover,
            &:focus,
            &:focus-within {
              color: var(--color-footer-logoTextActive);
            }
          }

          @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
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
              color: var(--color-footer-logoTextActive);
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
