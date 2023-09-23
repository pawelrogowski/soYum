import styled from "styled-components";

export const StyledButton = styled.button`
  --breakpoint-tablet: ${(props) => props.theme.breakpoints.tablet};
  --color-icon: ${({ theme }) => theme.mobileMenu.strokeIdle};

  background: none;
  border: none;
  width: 2.8rem;
  height: 100%;
  cursor: pointer;

  @media (min-width: var(--breakpoint-tablet)) {
    width: 3.2rem;
  }

  > svg {
    stroke: var(--color-icon);
    width: 2.8rem;
    height: 2.8rem;
    transition: stroke 200ms;

    @media (min-width: var(--breakpoint-tablet)) {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  &:focus,
  &:hover {
    outline: none;
    svg {
      stroke: var(--color-icon);
    }
  }
`;
