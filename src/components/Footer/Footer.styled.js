import { styled, css } from "styled-components";

export const StyledFooter = styled.footer`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --breakpoint-desktop: ${(props) => props.theme.breakpoints.desktop};
  --color-bg-footer: ${({ theme }) => theme.bg.footer};
  --color-footer-logoTextActive: ${({ theme }) => theme.footer.logoTextActive};
  --color-footer-logoTextIdle: ${({ theme }) => theme.footer.logoTextIdle};

  background-color: var(--color-bg-footer);
  display: flex;
  justify-content: center;
  transition: background-color 200ms;

  ${({ $variant }) =>
    $variant === "mobile"
      ? css`
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
            }
          }
        `
      : $variant === "tablet"
      ? css`
          > div {
            width: 100%;
            padding-top: 5rem;
            padding-bottom: 2.35rem;
            > div {
              display: flex;
              justify-content: space-between;
              margin-bottom: 7.2rem;
              > div {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2.4rem;

                > ul {
                  padding-left: 2.5rem;
                }

                > a:first-of-type {
                  display: flex;
                  align-items: center;
                  gap: 0.8rem;

                  > span {
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

                  @media (min-width: ${({ theme }) =>
                      theme.breakpoints.tablet}) {
                    gap: 1.2rem;

                    > span {
                      font-size: 2.8rem;
                      line-height: 100%;
                      letter-spacing: 0.042rem;
                    }
                  }

                  &:hover,
                  &:focus,
                  &:focus-within {
                    > span {
                      color: var(--color-footer-logoTextActive);
                    }
                  }
                }
              }

              > nav {
                padding-right: 6.2rem;
                min-width: 150px;
                > ul > li {
                  justify-content: flex-start;
                }
              }
            }
            > form {
              margin-bottom: 3.75rem;
            }
          }
        `
      : $variant === "desktop"
      ? css`
          > div {
            width: 100%;
            padding-top: 5rem;
            padding-bottom: 2.35rem;
            > div {
              display: flex;
              justify-content: space-between;

              margin-bottom: 7.2rem;
              > div {
                display: flex;
                flex-direction: column;
                gap: 4rem;
                > ul {
                  padding-left: 2.5rem;
                }

                > a:first-of-type {
                  display: flex;
                  align-items: center;
                  gap: 0.8rem;

                  > span {
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

                  @media (min-width: ${({ theme }) =>
                      theme.breakpoints.tablet}) {
                    gap: 1.2rem;

                    > span {
                      font-size: 2.8rem;
                      line-height: 100%;
                      letter-spacing: 0.042rem;
                    }
                  }

                  &:hover,
                  &:focus,
                  &:focus-within {
                    > span {
                      color: var(--color-footer-logoTextActive);
                    }
                  }
                }
              }

              > nav {
                padding-right: 6.2rem;
                min-width: 150px;
                > ul > li {
                  justify-content: flex-start;
                }
              }
            }
          }
        `
      : null}
`;
