import styled from "styled-components";

export const StyledDiv = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  border-radius: 2.6rem;
  box-shadow: 0px 4px 4px 0px rgba(135, 135, 135, 0.2);
  background: #fafafa;
  padding: 1.4rem;
  > a {
    cursor: pointer;
    width: 2.5rem;
    height: 5.5rem;
    padding: 0.6rem 0;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:first-of-type {
      transform: scaleX(-1);
    }
    > svg {
      transition: fill 200ms, stroke 200ms;
      fill: #0000006b;
      width: 1.5rem;
      height: 1.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      > svg {
        fill: #8baa36;
        stroke: #8baa36;
      }
    }
  }
  > ul {
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    height: 100%;
    > li {
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .current-page {
        background-color: #ebf3d4;
      }
      > a {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        color: #22252a;
        text-align: center;
        font-size: 12px;
        width: 2.8rem;
        height: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        transition: color 200ms, background-color 200ms;
        &:hover,
        &:focus {
          outline: none;
          color: #fafafa;
          background-color: #8baa36;
        }
      }
    }
  }
`;
