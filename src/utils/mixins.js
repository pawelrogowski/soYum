import { css } from "styled-components";

export const font = ({
  color = "inherit",
  size = "inherit",
  family = "inherit",
  height = "inherit",
  spacing = "normal",
  weight = "normal",
  style = "normal",
}) => css`
  color: ${color};
  font-size: ${size};
  font-family: ${family};
  line-height: ${height};
  letter-spacing: ${spacing};
  font-weight: ${weight};
  font-style: ${style};
`;

export const flexContainer = ({
  direction = "row",
  justify = "flex-start",
  align = "stretch",
  wrap = "nowrap",
  gap = "0",
} = {}) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justify};
  align-items: ${align};
  flex-wrap: ${wrap};
  gap: ${gap};
`;

export const breakpoint = {
  tablet: (...styles) => {
    return css`
      @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
        ${css(...styles)}
      }
    `;
  },

  desktop: (...styles) => {
    return css`
      @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
        ${css(...styles)}
      }
    `;
  },
};

export const responsiveBackgroundImage = (image1x, image2x, image3x) => css`
  background-image: url(${image1x});

  @media only screen and (min-resolution: 192dpi),
    only screen and (min-device-pixel-ratio: 2) {
    background-image: url(${image2x});
  }

  ${image3x &&
  css`
    @media only screen and (min-resolution: 288dpi),
      only screen and (min-device-pixel-ratio: 3) {
      background-image: url(${image3x});
    }
  `}
`;
