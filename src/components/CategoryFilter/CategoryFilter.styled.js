import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &:after {
    content: "";
    position: absolute;
    bottom: -3.4rem;
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  > ul {
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 2.8rem;
    > li {
      > a {
        color: #e0e0e0;
        font-size: 1.4rem;
        line-height: 1;
        transition: color 200ms;
        &:hover,
        &:focus {
          color: #8baa36;
        }
      }
    }
  }
`;
