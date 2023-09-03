import styled, { css } from "styled-components";

export const StyledSvg = styled.svg`
  ${({ $icon }) =>
    $icon === "404"
      ? css`
          fill: none;
          width: 498px;
          height: 300px;
        `
      : $icon === "hero-login-register"
      ? css`
          width: 285px;
          height: 250px;
        `
      : null}
`;
