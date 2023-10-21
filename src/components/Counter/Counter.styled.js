import styled from "styled-components";

export const StyledDiv = styled.div`
  padding: 0.7rem 1.4rem;
  display: flex;
  border-radius: 1.8rem;
  border: 1px solid rgba(51, 51, 51, 0.3);
  margin-left: auto;
  max-width: 11rem;
  min-width: 9.2rem;
  justify-content: space-evenly;
  > button {
    cursor: pointer;
    border: none;
    background: none;
    width: 1.4rem;
    height: 1.4rem;
    &:hover,
    &:focus {
      > svg {
        stroke: #8baa36;
      }
    }
    > svg {
      transition: stroke 200ms;
      width: 1.4rem;
      height: 1.4rem;
      stroke: #3333334d;
    }
    &:disabled {
      cursor: initial;
      > svg {
        transition: stroke 200ms;
        width: 1.4rem;
        height: 1.4rem;
        stroke: #3333331d;
      }
    }
  }
  > span {
    color: #333;
    font-size: 1.4rem;
    line-height: 1;
    text-align: center;
    flex-grow: 1;
  }
`;
