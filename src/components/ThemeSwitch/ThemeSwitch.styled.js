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
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    background: linear-gradient(rgba(75, 75, 75, 0), rgba(255, 255, 255, 0.1));
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: lightgray;
    transition: 0.4s;
    border-radius: 34px;
  }

  > span:before {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    position: absolute;
    content: "";
    height: 2.1rem;
    width: 2.135rem;
    left: 0.305rem;
    bottom: 0.3rem;
    background-color: #fafafa;
    transition: 0.4s;
    border-radius: 50%;
  }

  > input:checked + span {
    background-color: #8baa36;
  }

  > input:checked + span:before {
    transform: translateX(33px);
  }
`;
