import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  svg:first-of-type {
    width: 4.4rem;
    height: 4.4rem;
  }
  svg:last-of-type {
    stroke: #22252a;
    width: 3.2rem;
    height: 3.2rem;
  }
  &:focus,
  &:hover {
    outline: none;
    svg {
      stroke: green;
    }
  }
`;
