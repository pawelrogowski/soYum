import { styled } from "styled-components";
import bgImageMobile1x from "../../assets/images/start-background-mobile@1x.jpg";
import bgImageMobile2x from "../../assets/images/start-background-mobile@2x.jpg";
import bgImageMobile3x from "../../assets/images/start-background-mobile@3x.jpg";
import bgImageTablet1x from "../../assets/images/start-background-tablet@1x.jpg";
import bgImageTablet2x from "../../assets/images/start-background-tablet@2x.jpg";
import bgImageTablet3x from "../../assets/images/start-background-tablet@3x.jpg";
import bgImageDesktop1x from "../../assets/images/start-background-desktop@1x.jpg";
import bgImageDesktop2x from "../../assets/images/start-background-desktop@2x.jpg";
import bgImageDesktop3x from "../../assets/images/start-background-desktop@3x.jpg";

import { responsiveBackgroundImage, breakpoint } from "../../styles/mixins";
export const StartPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 28rem;
  padding: 3.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${responsiveBackgroundImage(
    bgImageMobile1x,
    bgImageMobile2x,
    bgImageMobile3x
  )}

  ${breakpoint.tablet`
      ${responsiveBackgroundImage(
        bgImageTablet1x,
        bgImageTablet2x,
        bgImageTablet3x
      )};
  `};

  ${breakpoint.desktop`
      ${responsiveBackgroundImage(
        bgImageDesktop1x,
        bgImageDesktop2x,
        bgImageDesktop3x
      )};
  `}

  a {
    > svg {
      margin-bottom: 2.8rem;
      max-width: 54px;
      max-height: 54px;
      width: 54px;
      height: 54px;
    }
  }

  h1 {
    margin-bottom: 1.4rem;
    color: #fafafa;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.048rem;
    text-align: center;
  }

  p {
    margin-bottom: 4.4rem;
    max-width: 35rem;
    text-align: center;
    color: #fafafa;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.028rem;
  }
  nav {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: 3rem;
    > ul {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      li:first-of-type {
        button {
          color: #fafafa;
          background-color: #8baa36;
          border-color: #8baa36;
          width: 13.2rem;
          height: 45px;
          &:hover {
            background-color: #22252a;
            border-color: #22252a;
            color: #8baa36;
          }
        }
      }
      li:last-of-type {
        button {
          color: #fafafa;
          border-color: #fafafa;
          width: 9.5rem;
          height: 45px;
          &:hover {
            border-color: #8baa36;
          }
        }
      }
    }
  }
`;
