import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  bottom: 100px;
  right: 9px;
  width: 22.5rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: #fafafa;
  border-radius: 0.8rem;

  p {
    color: #3e4462;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: -0.024rem;
    span {
      color: #8baa36;
    }
  }

  a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color: #3e4462;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
    justify-content: flex-end;
    svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: #3e4462;
      fill: #3e4462;
    }
  }
`;
