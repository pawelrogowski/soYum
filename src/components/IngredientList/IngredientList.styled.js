import styled from "styled-components";

export const StyledDiv = styled.div`
  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
    > h2 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 1;
      letter-spacing: -0.048rem;
    }
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
`;
