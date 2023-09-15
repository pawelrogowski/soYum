import { styled } from "styled-components";
import { flexContainer } from "../../utils/mixins";

export const StyledHeader = styled.header`
  width: 100%;
  height: 4.6rem;
  padding: 2.1rem 0;
  ${flexContainer({
    direction: "row",
    justify: "flex-start",
    align: "center",
    wrap: "nowrap",
    gap: 0,
  })}

  > button {
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
  }

  > a:first-of-type {
    margin-right: auto;
  }
`;
