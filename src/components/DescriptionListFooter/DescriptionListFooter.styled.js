import { styled } from "styled-components";
import { breakpoint } from "../../utils/mixins";

export const StyledUl = styled.ul`
  display: none;
  ${breakpoint.tablet`
    display: flex
  `}
  flex-direction: column;
  gap: 1.4rem;
  list-style: disc;
  > li {
    color: #fafafa;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 128.571%;
    letter-spacing: -0.028rem;
    &:hover,
    &:focus {
    }
  }
`;
