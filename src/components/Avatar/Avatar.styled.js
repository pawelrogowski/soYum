import { styled } from "styled-components";
import { breakpoint, flexContainer, font } from "../../utils/mixins";

export const StyledDiv = styled.div`
  ${flexContainer({
    direction: "row",
    justify: "flex-start",
    align: "center",
    wrap: "nowrap",
    gap: "1.4rem",
  })}
  margin-right: 2.4rem;
  ${breakpoint.tablet`
      margin-right: 5rem;
    `}

  > picture > img {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    background-color: lightgrey;
    ${breakpoint.tablet`
        width: 4.4rem;
        height: 4.4rem;
      `}
  }

  > span {
    ${font({
      family: "#22252a",
      color: "Poppins",
      size: "1.2rem",
      weight: "600",
      height: "20.4rem",
    })}
    ${breakpoint.tablet`
          font-size: 1.4rem;
          line-height: 23.8rem;
      `}
  }
`;
