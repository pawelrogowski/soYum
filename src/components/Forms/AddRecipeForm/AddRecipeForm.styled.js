import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  width: 100%;

  > div:first-of-type {
    align-self: flex-start;
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
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 5rem;
    }
    > div {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      width: 100%;

      gap: 1.8rem;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        gap: 3.1rem;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        gap: 4rem;
      }
    }
  }
`;
