import styled from "styled-components";
import leaves from "../../assets/images/leaves@1x.webp";
export const StyledSection = styled.section`
  --color-brand-highlight: ${({ theme }) => theme.brandColors.main};
  --color-hero-text: ${({ theme }) => theme.hero.text};
  --color-hero-bg-decoration: ${({ theme }) => theme.hero.bgDecoration};

  padding: 6.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 14.7rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 9.5rem 0;
    padding-bottom: 20rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 7.4rem;
  }

  > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-top: 4.5rem;
      align-items: start;
      max-width: 36.2rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 50rem;
    }
    h1 {
      white-space: nowrap;
      color: var(--color-hero-text);
      font-size: 6rem;
      line-height: 1;
      letter-spacing: -0.3rem;
      margin-bottom: 1.4rem;
      font-weight: 400;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 7.2rem;
        line-height: 0.72;
        letter-spacing: -0.036rem;
        margin-bottom: 2.4rem;
        text-align: start;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 10rem;
        line-height: 1;
        letter-spacing: -0.05rem;
        margin-bottom: 1.4rem;
      }

      > span {
        color: var(--color-brand-highlight);
      }
    }
    > p {
      color: var(--color-hero-text);
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.28;
      letter-spacing: -0.028rem;
      margin-bottom: 4.4rem;
      max-width: 25rem;
      font-weight: 400;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 100%;
        text-align: start;
        margin-bottom: 3.2rem;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
        margin-bottom: 5rem;
      }
    }
  }
  > div:nth-of-type(2) {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: var(--color-hero-bg-decoration);
      width: 150%;
      height: 150%;
      top: 50%;
      left: 58%;
      border-radius: 10rem;
      z-index: -1;
      transform: translate(0, -50%) rotate(45deg);
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 200%;
        height: 200%;
        top: 40%;
        left: 35%;
        border-radius: 10rem;
        transform: translate(0, -50%) rotate(30deg);
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 600%;
        height: 600%;
        top: -120%;
        left: 65%;
        border-radius: 10rem;
        z-index: -1;
        transform: translate(0, -50%) rotate(15deg);
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 27%;
      left: 72%;
      background-image: url(${leaves});
      background-size: contain;
      width: 275%;
      height: 275%;
      transform: translate(-50%, -50%) rotate(60deg) scaleX(-1);
      filter: blur(0.2rem);
      z-index: -1;
      background-repeat: no-repeat;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        top: 37%;
        left: 45%;
        width: 235%;
        height: 235%;
        transform: translate(-50%, -50%) rotate(67deg) scaleX(-1);
      }
    }
    picture {
      margin-bottom: 2.4rem;
      position: relative;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin-bottom: 0rem;
      }
      > img {
        max-width: 100%;
        width: 100%;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          max-width: 110%;
          width: 110%;
        }
      }
    }
  }
`;
