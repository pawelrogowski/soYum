import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
  > svg {
    stroke: ${({ theme }) => theme.mobileMenu.strokeIdle};
    width: 3.2rem;
    height: 3.2rem;
    transition: stroke 200ms;
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      stroke: ${({ theme }) => theme.mobileMenu.strokeHover};
    }
  }
`;
