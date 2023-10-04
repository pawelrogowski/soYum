import styled from "styled-components";

export const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    bottom: -3.4rem;
    left: 0;
    width: 100%;
    height: 0;
    border-bottom: 1px solid #e0e0e0;
  }
  > button {
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
    &:first-of-type {
      transform: rotate(180deg);
    }
    &:disabled {
      > svg {
        stroke: lightgray;
        fill: lightgray;
      }
    }
    > svg {
      transition: stroke 200ms, fill 200ms;
      stroke: black;
      fill: gray;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  > ul {
    overflow-x: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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
