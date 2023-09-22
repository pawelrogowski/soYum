import styled from "styled-components";

export const StyledButton = styled.button`
  background: none;
  border: none;
  width: 2.8rem;
  height: 100%;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 3.2rem;
  }

  > svg {
    stroke: ${({ theme }) => theme.mobileMenu.strokeIdle};
    width: 2.8rem;
    height: 2.8rem;
    transition: stroke 200ms;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      stroke: ${({ theme }) => theme.mobileMenu.strokeHover};
    }
  }
`;
