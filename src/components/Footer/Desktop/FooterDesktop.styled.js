import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --color-footer-bg: ${({ theme }) => theme.bg.footer};
  --breakpoint-tablet: ${({ theme }) => theme.breakpoints.tablet};
  --breakpoint-desktop: ${({ theme }) => theme.breakpoints.desktop};

  background-color: var(--color-footer-bg);
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;

    padding-top: 6.4rem;
    padding-bottom: 4.95rem;

    > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2.4rem;

        > ul {
          padding-left: 21px;
        }

        a:first-of-type {
          display: flex;
          align-items: center;

          &:hover,
          &:focus,
          &:focus-within {
            span {
              color: #86aa43;
            }
          }

          gap: 1.2rem;

          span {
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

            font-size: 2.8rem;
            line-height: 100%;
            letter-spacing: 0.042rem;
          }
        }
      }
      nav {
        padding-right: 20px;
      }
    }
  }
`;
