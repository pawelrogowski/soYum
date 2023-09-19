import { styled } from "styled-components";
import { flexContainer, breakpoint } from "../../utils/mixins";

export const StyledHeader = styled.header`
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  width: 100%;
  height: 4.6rem;
  padding: 0 1.6rem;
  margin-top: 2.1rem;
  margin: 2.1rem auto 5rem auto;
  ${breakpoint.tablet`
    margin-bottom: 7.3rem;
  `}
  ${breakpoint.desktop`
    margin-bottom: 10.2rem;
  `}
  ${flexContainer({
    direction: "row",
    justify: "flex-start",
    align: "center",
    wrap: "nowrap",
    gap: 0,
  })}

  > a:first-of-type {
    margin-right: auto;
  }
  > a:focus-within {
    > svg {
      outline: 2px solid black;
    }
  }
`;
