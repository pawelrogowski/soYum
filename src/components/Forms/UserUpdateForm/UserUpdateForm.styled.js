import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-of-type {
    position: relative;
    margin-bottom: 5.4rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-bottom: 5rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 5.2rem;
    }
    &:hover {
      > picture > img {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.9);
      }
      > button {
        background-color: #000;
        > svg {
          stroke: #8baa36;
        }
      }
    }
    > picture {
      width: 8.8rem;
      height: 8.8rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 10.3rem;
        height: 10.3rem;
      }
      > img {
        cursor: pointer;
        transition: box-shadow 200ms;
        border-radius: 50%;
        overflow: hidden;
        width: 8.8rem;
        height: 8.8rem;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 10.3rem;
          height: 10.3rem;
        }
      }
    }
    > button {
      cursor: pointer;
      position: absolute;
      bottom: -3px;
      right: 6px;
      background: none;
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #8baa36;
      border: none;
      transition: background-color 200ms;
      > svg {
        width: 1.8rem;
        height: 1.8rem;
        stroke: #fafafa;
        transition: stroke 200ms;
      }
    }
  }
  > div:last-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 2.4rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3.2rem;
    }
    > svg {
      position: absolute;
      width: 2.1rem;
      height: 2.1rem;
      stroke: #23262a;
      left: 1.2rem;
      top: 1.3rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: 1.2rem;
        top: 1.7rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    .confirm-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 4rem;
      top: 1.6rem;
      > svg {
        width: 1.6rem;
        height: 1.6rem;
        fill: #8baa36;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        right: 4.8rem;
        top: 2rem;
        > svg {
          width: 1.9rem;
          height: 1.9rem;
        }
      }
    }
    .edit-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1.4rem;
      top: 1.6rem;
      &:hover,
      &:focus {
        > svg {
          stroke: #8baa36;
        }
      }
      > svg {
        width: 1.7rem;
        height: 1.7rem;
        stroke: #23262a;
        transition: stroke 200ms;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        right: 1.8rem;
        top: 2rem;
        > svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    .edit-username-button--cancel {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1.4rem;
      top: 1.6rem;
      > svg {
        width: 1.7rem;
        height: 1.7rem;
        stroke: red;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        right: 1.8rem;
        top: 2rem;
        > svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    > input {
      color: #23262a;
      width: 100%;
      height: 4.8rem;
      border-radius: 5px;
      border: 1px solid #bababc;
      display: flex;
      align-items: center;
      padding: 0 6.5rem 0 3.8rem;
      font-size: 1.4rem;
      letter-spacing: -0.036rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 5.8rem;
        font-size: 1.8rem;
        padding: 0 7.4rem 0 4.6rem;
      }
      &:disabled {
        color: #23262a;
      }
    }
    > button:last-of-type {
      width: 100%;
      height: 4.9rem;
      font-size: 1.4rem;
      line-height: 1.28;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 5.9rem;
        font-size: 1.6rem;
        line-height: 1.125;
      }
    }
  }
`;
