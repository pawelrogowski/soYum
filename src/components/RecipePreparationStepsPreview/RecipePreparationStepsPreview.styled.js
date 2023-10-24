import styled from "styled-components";

export const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  list-style-type: none;
  padding: 3.2rem 0;
  > li {
    counter-increment: my-counter;
    display: flex;
    align-items: center;
    gap: 1.4rem;
    color: #323232;
    font-size: 1.2rem;
    line-height: 1.16;
    letter-spacing: -0.024rem;

    &::before {
      content: counter(my-counter);
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      background-color: #8baa36;
      color: #fafafa;
      border-radius: 50%;
      text-align: center;
      font-size: 1.2rem;
      font-weight: 600;
    }
    > button:nth-of-type(1) {
      cursor: pointer;
      padding: 0;
      background: #2999c6;
      border: none;
      border-radius: 50%;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: bkacground-color 100ms;
      &:focus,
      &:hover {
        background-color: #323232;
        > svg {
          stroke: orangered;
        }
      }
      > svg {
        transition: stroke 100ms;
        width: 1.3rem;
        height: 1.3rem;
        stroke: #fafafa;
      }
    }
    > button:nth-of-type(2) {
      cursor: pointer;
      padding: 0;
      background: orangered;
      border: none;
      border-radius: 50%;
      min-width: 2.1rem;
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: bkacground-color 100ms;
      &:focus,
      &:hover {
        background-color: #323232;
        > svg {
          stroke: orangered;
        }
      }
      > svg {
        transition: stroke 100ms;
        width: 1.3rem;
        height: 1.3rem;
        stroke: #fafafa;
      }
    }
  }
`;
