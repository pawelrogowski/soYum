import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  width: 100%;
  > textarea {
    padding: 1rem 1.6rem;
    max-width: 55.2rem;
    width: 100%;
    min-height: 34rem;
    color: rgba(250, 250, 250, 0.6);
    border-radius: 5px;
    border: 1px solid #4a4b52;
    font-size: 1.8rem;
    line-height: 1;
    letter-spacing: -0.036rem;
    background: none;
    scrollbar-width: thin;
    &:focus,
    &:hover {
      outline: none;
      border-color: green;
    }
  }
`;
