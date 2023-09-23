import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --bg-footer: ${({ theme }) => theme.bg.footer};
  --breakpoints-tablet: ${({ theme }) => theme.breakpoints.tablet};
  --breakpoints-desktop: ${({ theme }) => theme.breakpoints.desktop};

  background-color: var(--bg-footer);
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    padding-top: 2.8rem;
    padding-bottom: 1.75rem;

    @media (min-width: var(--breakpoints-tablet)) {
      padding-top: 5rem;
      padding-bottom: 2.35rem;
    }

    @media (min-width: var(--breakpoints-desktop)) {
      padding-top: 6.4rem;
      padding-bottom: 4.95rem;
    }

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
          gap: 0.8rem;

          &:hover,
          &:focus,
          &:focus-within {
            span {
              color: #86aa43;
            }
          }

          @media (min-width: var(--breakpoints-tablet)) {
            gap: 1.2rem;
          }

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

            @media (min-width: var(--breakpoints-tablet)) {
              font-size: 2.8rem;
              line-height: 100%;
              letter-spacing: 0.042rem;
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
