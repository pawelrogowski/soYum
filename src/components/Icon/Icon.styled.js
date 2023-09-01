import styled, { css } from "styled-components";

export const StyledSvg = styled.svg`
  ${({ $icon }) =>
    $icon === "404"
      ? css`
          fill: none;
          width: 498px;
          height: 300px;
        `
      : $icon === "arrow_long"
      ? css``
      : null}
`;
