import styled from "styled-components";

export const StyledDiv = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  min-width: ${({ theme }) => theme.breakpoints.minContent};
  padding: 0 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;
`;
