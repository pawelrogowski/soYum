import { motion } from "framer-motion";
import { styled } from "styled-components";

import bgImageDesktop1x from "../../assets/images/start-background-desktop@1x.webp";
import bgImageDesktop2x from "../../assets/images/start-background-desktop@2x.webp";
import bgImageDesktop3x from "../../assets/images/start-background-desktop@3x.webp";
import bgImageMobile1x from "../../assets/images/start-background-mobile@1x.webp";
import bgImageMobile2x from "../../assets/images/start-background-mobile@2x.webp";
import bgImageMobile3x from "../../assets/images/start-background-mobile@3x.webp";
import bgImageTablet1x from "../../assets/images/start-background-tablet@1x.webp";
import bgImageTablet2x from "../../assets/images/start-background-tablet@2x.webp";
import bgImageTablet3x from "../../assets/images/start-background-tablet@3x.webp";
import { responsiveBackgroundImage } from "../../utils/mixins";
export const StartPageContainer = styled(motion.main)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  min-width: 28rem;
  padding: 3.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${responsiveBackgroundImage(bgImageMobile1x, bgImageMobile2x, bgImageMobile3x)}

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    ${responsiveBackgroundImage(bgImageTablet1x, bgImageTablet2x, bgImageTablet3x)};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    ${responsiveBackgroundImage(bgImageDesktop1x, bgImageDesktop2x, bgImageDesktop3x)};
  }

  > svg {
    margin-bottom: 2.8rem;
    max-width: 5.4rem;
    max-height: 5.4rem;
    width: 5.4rem;
    height: 5.4rem;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      max-width: 6.8rem;
      max-height: 6.8rem;
      width: 6.8rem;
      height: 6.8rem;
    }
  }

  h1 {
    margin-bottom: 1.4rem;
    color: ${({ theme }) => theme.startPage.header};
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.048rem;
    text-align: center;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 2.8rem;
      line-height: 2.8rem;
      letter-spacing: -0.056rem;
    }
  }

  p {
    margin-bottom: 4.4rem;
    max-width: 35rem;
    text-align: center;
    color: ${({ theme }) => theme.startPage.description};
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.028rem;
    @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      margin-bottom: 4rem;
      max-width: 50.5rem;
      font-size: 1.8rem;
      line-height: 2.4rem;
      letter-spacing: -0.036rem;
    }
  }

  nav {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 1.2rem;
    margin-right: 1.5rem;
    > ul {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;

      @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        gap: 1.8rem;
      }

      li:first-of-type {
        button {
          color: ${({ theme }) => theme.startPage.registerButton.fontColorIdle};
          background-color: ${({ theme }) => theme.startPage.registerButton.bgIdle};
          border-color: #8baa36;
          width: 13.2rem;
          height: 4.5rem;
          border: 0.2rem solid ${({ theme }) => theme.startPage.registerButton.borderIdle};
          &:hover,
          &:focus {
            background-color: ${({ theme }) => theme.startPage.registerButton.bgHover};
            border-color: ${({ theme }) => theme.startPage.registerButton.borderHover};
            color: ${({ theme }) => theme.startPage.registerButton.fontColorHover};
          }
          &:active {
            border-color: ${({ theme }) => theme.startPage.registerButton.borderActive};
          }
          @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
            font-size: 1.6rem;
            width: 18.4rem;
            height: 6.7rem;
          }
        }
      }
      li:last-of-type {
        button {
          color: ${({ theme }) => theme.startPage.signinButton.fontColorIdle};
          border-color: ${({ theme }) => theme.startPage.signinButton.borderIdle};
          width: 9.5rem;
          height: 4.5rem;
          &:hover,
          &:focus {
            border-color: ${({ theme }) => theme.startPage.signinButton.borderHover};
          }
          &:active {
            border-color: ${({ theme }) => theme.startPage.signinButton.borderActive};
            background-color: ${({ theme }) => theme.startPage.signinButton.bgActive};
          }
          @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
            font-size: 1.6rem;
            width: 14.1rem;
            height: 6.7rem;
            max-height: 6.7rem;
          }
        }
      }
    }
  }
`;
