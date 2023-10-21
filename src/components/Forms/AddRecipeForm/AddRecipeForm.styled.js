import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  align-self: flex-start;
  display: flex;
  gap: 5rem;
  width: 100%;
  > div:first-of-type {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 3.1rem;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 4rem;
    }
  }
`;
