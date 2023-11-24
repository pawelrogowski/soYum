import styled from "styled-components";

import heroLowRes from "../../assets/images/heroLowRes.avif";
import leaves from "../../assets/images/leavesDecor.avif";
import { fadeInAnimation } from "../../styles/mixins";
export const StyledDiv = styled.div`
  --color-brand-highlight: ${({ theme: t }) => t.brandColors.main};
  --color-hero-text: ${({ theme: t }) => t.hero.text};
  --color-hero-bg-decoration: ${({ theme: t }) => t.hero.bgDecoration};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${fadeInAnimation("150ms")}
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
    width: 100%;
    flex-direction: row;
  }

  > .hero__text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      align-items: start;
      max-width: 36.2rem;
      gap: 2.4rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      min-width: 50.5rem;
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
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        font-size: 7.2rem;
        line-height: 0.72;
        letter-spacing: -0.036rem;
        text-align: start;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
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

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        max-width: 100%;
        text-align: start;
        margin-bottom: 0.8rem;
      }

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
        margin-bottom: 3.6rem;
      }
    }
  }

  > .hero__image-container {
    display: flex;
    margin-left: auto;
    position: relative;
    margin-bottom: 2.1rem;
    flex-grow: 1;
    aspect-ratio: 320 / 296;
    background-image: url(${heroLowRes});
    background-size: contain;
    background-repeat: no-repeat;

    background-position: center;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      aspect-ratio: 378 / 351;
      margin-bottom: 0;
      min-width: 38rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      aspect-ratio: 578 / 539;
      margin-bottom: 0;
      min-height: 53.9rem;
    }
    &:after {
      content: "";
      position: absolute;
      top: 32%;
      left: 51%;
      background-image: url(${leaves});
      background-size: contain;
      width: 170%;
      height: 170%;
      transform: translate(-50%, -50%) rotate(60deg) scaleX(-1);
      filter: blur(0.2rem);
      z-index: -1;
      background-repeat: no-repeat;
      aspect-ratio: 320 / 296;

      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        aspect-ratio: 378 / 351;
        top: 31%;
        left: 45%;
        width: 180%;
        height: 180%;
        transform: translate(-50%, -50%) rotate(61deg) scaleX(-1);
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        min-width: 96.4rem;
        aspect-ratio: 378/351;
        top: 23%;
        left: 43%;
        width: 180%;
        height: 180%;
        transform: translate(-50%, -50%) rotate(55deg) scaleX(-1);
      }
    }
    > div:last-of-type {
      width: 300%;
      height: 300%;
      top: 50%;
      left: 108%;
      transform: translate(0, -50%) rotate(49deg) skew(-8deg, -20deg);
      border-radius: 30% 70% 82% 18%/72% 30% 70% 28%;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        width: 365%;
        height: 187%;
        top: initial;
        bottom: 0;
        left: -7%;
        transform: translate(0%, 0) rotate(-13deg);
        border-radius: 30% 70% 82% 18%/72% 30% 70% 28%;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        width: 365%;
        height: 182%;
        top: initial;
        bottom: 78px;
        left: -18%;
        transform: translate(0%, 0) rotate(-13deg);
        border-radius: 96% 22% 69% 54%/100% 0% 46% 21%;
      }
    }
    > picture {
      min-width: 32rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        min-width: 38rem;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        margin-bottom: 0rem;
        display: flex;
        min-width: 46.2rem;
      }
      > img {
        width: 100%;
        height: auto;
        aspect-ratio: 320 / 296;
        object-fit: contain;
        min-width: 32rem;

        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          min-width: 38rem;
          aspect-ratio: 378 / 351;
        }
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
          margin-bottom: 0rem;
          display: flex;
          min-width: 46.2rem;
          aspect-ratio: 578 / 539;
        }
      }
    }
  }
  form {
    height: 5.2rem;
    max-width: 42rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      height: 5.9rem;
      max-width: 100%;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      height: 7rem;
    }
    > button {
      height: 100%;
      width: 11.3rem;
      font-size: 1.4rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        width: 16.1rem;
        font-size: 1.6rem;
      }
    }
    > input {
      height: 100%;
      padding-right: 12.3rem;
      font-size: 1.2rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        font-size: 1.6rem;
        padding-right: 17.1rem;
      }
    }
  }
`;
