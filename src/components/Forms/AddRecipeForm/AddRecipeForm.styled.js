import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 3.2rem;
    flex-direction: row;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 5rem;
  }
  > div:first-of-type {
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
`;
