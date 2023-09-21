import { styled } from "styled-components";
import { breakpoint } from "../../utils/mixins";

export const StyledNav = styled.nav`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    ${breakpoint.tablet`
      gap: 2rem;
    `}
    ${breakpoint.desktop`
      gap: 2.4rem;
    `}

    >li {
      text-align: center;
      color: #fafafa;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 128.571%;
      letter-spacing: -0.028rem;
      transition: color 100ms;
      &:hover,
      &:focus {
        color: #86aa43;
      }
    }
  }
`;
