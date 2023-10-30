import styled from "styled-components";

export const StyledDiv = styled.div`
  max-width: 62rem;
  outline: none;
  > div:first-of-type {
    display: flex;
    margin-bottom: 2.4rem;
    justify-content: space-between;

    margin-left: auto;
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
  }
`;
