import { motion } from "framer-motion";
import { styled } from "styled-components";

import saladBg from "../../assets/images/saladBg.avif";

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

  background-image: url(${saladBg});

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
