import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  .ingredient-list {
    margin-bottom: 5rem;
  }
  > .image-upload-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 6.71rem;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3.2rem;
      flex-direction: row;
      align-items: flex-start;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 5rem;
      min-height: 38rem;
    }
    .image-upload-wrapper__inner {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      gap: 1.8rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 3.1rem;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 5.7rem;
      }
    }
  }

  > button {
    margin-top: 4.2rem;
    width: 129px;
    height: 46px;
    font-size: 16px;
    line-height: 1;
    border-color: #22252a;
    background-color: #22252a;
    color: #fafafa;

    &:hover,
    &:focus {
      border-radius: 4.4rem 2.4rem;
      border-color: #8baa36;
      background-color: #8baa36;
      color: #fafafa;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 17rem;
      height: 6rem;

      font-size: 16px;
    }
  }
`;
