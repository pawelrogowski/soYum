import styled from "styled-components";
import { flexContainer } from "../../styles/mixins";

export const StyledUl = styled.ul`
  display: inline-block;

  ${flexContainer({
    justify: "center",
    align: "center",
    gap: "1.4rem",
  })}

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1.8rem;
  }

  li {
    ${flexContainer({
      justify: "center",
      align: "center",
    })}
  }

  a {
    &:hover,
    &:focus {
      svg {
        fill: ${({ theme }) => theme.icon.social.fillHover};
        transition: fill 100ms;
      }
    }
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.icon.social.fill};
    transition: fill 100ms;
  }
`;
