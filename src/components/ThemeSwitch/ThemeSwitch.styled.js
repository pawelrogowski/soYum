import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 6.1rem;
  height: 2.7rem;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > span {
    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightgray;
    transition: box-shadow 400ms, transform 400ms;
    border-radius: 34px;
  }

  > span:before {
    box-shadow: 2px 1px 10px rgba(0, 0, 0, 0.4);
    position: absolute;
    content: "";
    height: 2.1rem;
    width: 2.135rem;
    left: 0.305rem;
    bottom: 0.3rem;
    background-color: #fafafa;
    transition: box-shadow 400ms, transform 400ms;
    border-radius: 50%;
  }

  > input:checked + span {
    background-color: #8baa36;
    box-shadow: inset 0px 3px 10px rgba(0, 0, 0, 0.4);
  }

  > input:checked + span:before {
    box-shadow: -2px -1px 10px rgba(0, 0, 0, 0.4);
    transform: translateX(33px);
  }
`;
