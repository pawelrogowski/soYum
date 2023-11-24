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

export const fadeInAnimation = (time = "450ms") => css`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fade-in ${time} ease-in-out 1;
`;
