import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  overflow-x: auto;
  scrollbar-width: none;
  height: 5.6rem;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: -3.4rem;
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  &::-webkit-scrollbar {
    width: 0; /* For Chrome, Safari, and Opera */
  }
  > ul {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
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
