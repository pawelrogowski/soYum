import styled from "styled-components";

import leaves from "../../assets/images/leaves@1x.webp";
export const StyledDiv = styled.div`
  --color-brand-highlight: ${({ theme }) => theme.brandColors.main};
  --color-hero-text: ${({ theme }) => theme.hero.text};
  --color-hero-bg-decoration: ${({ theme }) => theme.hero.bgDecoration};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 7.4rem;
    }
  }

  > .hero__text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1.4rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      align-items: start;
      max-width: 36.2rem;
      gap: 2.4rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      max-width: 46.5rem;
      gap: 1.4rem;
      margin-top: -5.1rem;
    }
    h1 {
      white-space: nowrap;
      color: var(--color-hero-text);
      font-size: 6rem;
      line-height: 1;
      letter-spacing: -0.3rem;
      font-weight: 400;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 7.2rem;
        line-height: 0.72;
        letter-spacing: -0.036rem;
        text-align: start;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 10rem;
        line-height: 1;
        letter-spacing: -0.05rem;
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
      min-width: 25rem;
      max-width: 32rem;
      text-wrap: pretty;

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 100%;
        text-align: start;
        margin-bottom: 0.8rem;
      }

      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
        margin-bottom: 3.6rem;
      }
    }
  }

  > .hero__image-container {
    position: relative;

    height: 100%;
    margin-bottom: 2.1rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 0;
    }

    > picture {
      width: 100%;
      max-width: 49.2rem;
      position: relative;
      max-width: 100%;
      min-width: 34rem;
      width: 100%;
      height: auto;
      aspect-ratio: 320 / 296;
      max-width: 100%;
      min-width: 34rem;
      width: 100%;
      height: auto;
      aspect-ratio: 320 / 296;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        max-width: 54rem;
        min-width: 40rem;
        width: 110%;
        aspect-ratio: 378 / 351;
        min-width: auto;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        min-width: 46.3rem;
        max-width: 60rem;
        margin-bottom: 0rem;
        aspect-ratio: 578 / 539;
      }
      > img {
        max-width: 51rem;
        min-width: 34rem;
        width: 100%;
        height: auto;
        aspect-ratio: 320 / 296;
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          max-width: 54rem;
          min-width: 40rem;
          width: 110%;
          aspect-ratio: 378 / 351;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
          min-width: 46.3rem;
          max-width: 60rem;
          margin-bottom: 0rem;
          aspect-ratio: 578 / 539;
        }
      }
      &:after {
        content: "";
        position: absolute;
        top: 32%;
        left: 51%;
        background-image: url(${leaves});
        background-size: contain;
        width: 230%;
        height: 230%;
        max-width: 1142px;
        transform: translate(-50%, -50%) rotate(60deg) scaleX(-1);
        filter: blur(0.2rem);
        z-index: -1;
        background-repeat: no-repeat;

        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          top: 37%;
          left: 45%;
          width: 235%;
          height: 235%;
          transform: translate(-50%, -50%) rotate(67deg) scaleX(-1);
        }
      }
      > div:last-of-type {
        width: 145%;
        height: 145%;
        top: 50%;
        left: 50%;
        transform: translate(0, -50%) rotate(49deg) skew(5deg, 5deg);
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 500%;
          height: 500%;
          max-width: 2435px;
          top: -73%;
          left: 127%;
          transform: translate(0, -50%) rotate(-62deg) skewX(18deg) skewY(1deg);
          border-radius: 12rem;
        }
        @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
          width: 500%;
          height: 500%;
          max-width: 2620px;
          top: -95%;
          left: 113%;
          transform: translate(0, -50%) rotate(-66deg) skewX(18deg) skewY(0deg);
          border-radius: 12rem;
        }
      }
    }
  }
  form {
    height: 5.2rem;
    max-width: 42rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 5.9rem;
      max-width: 100%;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      height: 7rem;
    }
    > button {
      height: 100%;
      width: 11.3rem;
      font-size: 1.4rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 16.1rem;
        font-size: 1.6rem;
      }
    }
    > input {
      height: 100%;
      padding-right: 12.3rem;
      font-size: 1.2rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.6rem;
        padding-right: 17.1rem;
      }
    }
  }
`;
