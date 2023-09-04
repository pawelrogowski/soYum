import styled, { css } from "styled-components";

import { breakpoint } from "../../styles/mixins";

export const StyledDiv = styled.div`
  padding: 0 2rem;
  min-width: 3.75rem;

  ${({ $variant }) =>
    $variant === "Registration"
      ? css`=
        `
      : null}/* ${breakpoint.tablet(css`
    padding: 4.4rem 5rem;
  `)}; */
`;
