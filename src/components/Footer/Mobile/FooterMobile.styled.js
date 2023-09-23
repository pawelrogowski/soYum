import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  --tablet: ${(props) => props.theme.breakpoints.tablet};
  --desktop: ${(props) => props.theme.breakpoints.desktop};
  --bg-footer: ${({ theme }) => theme.bg.footer};
  --logo-text-active: ${({ theme }) => theme.footer.logoTextActive};

  background-color: var(--bg-footer);
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
          color: var(--logo-text-active);
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

  @media (min-width: var(--tablet)) {
    > div {
      padding-top: 5rem;
      padding-bottom: 2.35rem;

      a:first-of-type {
        gap: 1.2rem;

        > span {
          font-size: 2.8rem;
          line-height: 100%;
          letter-spacing: 0.042rem;
        }
      }
    }
  }

  @media (min-width: var(--desktop)) {
    > div {
      padding-top: 6.4rem;
      padding-bottom: 4.95rem;
    }
  }
`;
