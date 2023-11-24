import { css } from "styled-components";

export const underlineHover = (
  center = true,
  color = "#fafafa",
  width = "110%",
  start = "-5%",
  gap = "50%",
  height = "2px",
  timingFunction = "ease-in-out",
  transitionTime = "300ms"
) => css`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0;

    top: calc(100% + ${gap});
    left: ${center ? "50%" : start};
    transform: ${center ? "translateX(-50%)" : "none"};
    height: ${height};
    background: ${color};
    transition: width ${transitionTime} ${timingFunction};
  }
  &:hover::after {
    width: ${width};
  }
`;
