import { css } from "styled-components";

export const responsiveBackgroundImage = (image1x, image2x, image3x) => css`
  background-image: url(${image1x});

  @media screen and (min-resolution: 192dpi),
    only screen and (min-device-pixel-ratio: 2) {
    background-image: url(${image2x});
  }

  ${image3x &&
  css`
    @media screen and (min-resolution: 288dpi),
      only screen and (min-device-pixel-ratio: 3) {
      background-image: url(${image3x});
    }
  `}
`;
