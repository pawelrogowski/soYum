import { css, styled } from "styled-components";

import leaves from "../../assets/images/leavesDecor.avif";

export const StyledFooter = styled.footer`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --breakpoint-desktop: ${(props) => props.theme.breakpoints.desktop};
  --color-bg-footer: ${({ theme }) => theme.bg.footer};
  --color-footer-logoTextActive: ${({ theme }) => theme.footer.logoTextActive};
  --color-footer-logoTextIdle: ${({ theme }) => theme.footer.logoTextIdle};

  background-color: var(--color-bg-footer);
  min-width: ${({ theme }) => theme.breakpoints.minContent};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  > div:first-of-type {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      background-image: url(${leaves});
      background-repeat: no-repeat;
      background-size: cover;
      width: 33.5rem;
      height: 46.8rem;
      top: -21rem;
      left: -5rem;
      rotate: -217deg;
      filter: blur(0.4rem);
      transform: scaleX(-1);
      z-index: -1;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 33.5rem;
        height: 51.7rem;
        top: -26rem;
        left: -11rem;
        rotate: -217deg;
      }
    }
  }
  ${({ $variant }) =>
    $variant === "mobile"
      ? css`
          > div:first-of-type {
            width: 100%;
            padding-top: 2.8rem;
            padding-bottom: 1.75rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3.2rem;

            > a:first-of-type {
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
                transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;

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
          > div:first-of-type {
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
                  gap: 1.2rem;

                  > span {
                    color: var(--color-footer-logoTextIdle);
                    font-size: 1.8rem;
                    font-weight: 700;
                    line-height: 1.8rem;
                    letter-spacing: 0.027rem;
                    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
                    font-size: 2.8rem;
                    line-height: 100%;
                    letter-spacing: 0.042rem;

                    &:hover,
                    &:focus,
                    &:focus-within {
                      color: var(--color-footer-logoTextActive);
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
                min-width: 15rem;
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
          > div:first-of-type {
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
                  gap: 1.2rem;

                  > span {
                    color: var(--color-footer-logoTextIdle);
                    font-size: 1.8rem;
                    font-weight: 700;
                    line-height: 1.8rem;
                    letter-spacing: 0.027rem;
                    transition: color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
                    font-size: 2.8rem;
                    line-height: 100%;
                    letter-spacing: 0.042rem;

                    &:hover,
                    &:focus,
                    &:focus-within {
                      color: var(--color-footer-logoTextActive);
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
                min-width: 15rem;
                > ul > li {
                  justify-content: flex-start;
                }
              }
            }
          }
        `
      : null}
`;
