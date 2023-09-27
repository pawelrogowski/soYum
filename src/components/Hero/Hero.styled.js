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
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    padding: 9.5rem 0;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 7.4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding-top: 4.5rem;
      align-items: start;
      max-width: 38rem;
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
    p {
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
  picture {
    margin-bottom: 2.4rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: var(--color-hero-bg-decoration);
      width: 150%;
      height: 150%;
      top: 50%;
      left: 58%;
      border-radius: 100px;
      z-index: -1;
      transform: translate(0, -50%) rotate(45deg);
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 200%;
        height: 200%;
        top: 40%;
        left: 47%;
        border-radius: 100px;
        z-index: -1;
        transform: translate(0, -50%) rotate(21deg);
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 600%;
        height: 600%;
        top: -120%;
        left: 65%;
        border-radius: 100px;
        z-index: -1;
        transform: translate(0, -50%) rotate(15deg);
      }
    }
    &:after {
      content: "";
      position: absolute;
      top: 33%;
      left: 50%;
      background-image: url(${leaves});
      background-size: contain;
      width: 230%;
      height: 230%;
      transform: translate(-50%, -50%) rotate(60deg) scaleX(-1);
      filter: blur(2px);
      z-index: -1;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 200%;
        height: 200%;
      }
    }
  }
`;
