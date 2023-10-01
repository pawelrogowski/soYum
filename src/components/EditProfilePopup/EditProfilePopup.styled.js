import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  top: calc(100% + 1.4rem);
  left: -50%;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 16.1rem;
  height: 13rem;
  border-radius: 0.8rem;
  padding: 1.8rem;
  background: #fff;
  border: solid 1px #8baa36;
  transform: translateX(-50%, -50%);
  z-index: 1;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      color: #23262a;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.6;
    }
    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: #23262a;
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    color: #fafafa;
    width: 12.5rem;
    height: 4.3rem;
    font-size: 1.4rem;
    line-height: 2.1rem;
    > svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: #fafafa;
    }
  }
`;
