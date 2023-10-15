import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-of-type {
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
    position: relative;
    margin-bottom: 3rem;
    > picture {
      width: 8.8rem;
      height: 8.8rem;

      > img {
        cursor: pointer;
        transition: box-shadow 200ms;
        border-radius: 50%;
        overflow: hidden;
        width: 8.8rem;
        height: 8.8rem;
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
    > svg {
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      stroke: #23262a;
      left: 1rem;
      top: 1.1rem;
    }
    .confirm-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 4.2rem;
      top: 1.2rem;
      > svg {
        width: 2.2rem;
        height: 2.2rem;
        fill: #8baa36;
      }
    }
    .edit-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1rem;
      top: 1.1rem;
      > svg {
        width: 2.4rem;
        height: 2.4rem;
        stroke: #23262a;
      }
    }
    .edit-username-button--cancel {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1rem;
      top: 1.1rem;
      > svg {
        width: 2.4rem;
        height: 2.4rem;
        stroke: red;
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
      padding: 0 7.6rem 0 3.8rem;
      font-size: 1.4rem;
      letter-spacing: -0.036rem;
      &:disabled {
        color: #23262a;
      }
    }
    > button:last-of-type {
      width: 100%;
      height: 4.9rem;
      font-size: 1.4rem;
      line-height: 1.28;
    }
  }
`;
