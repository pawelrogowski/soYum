import { styled } from "styled-components";
import { font } from "../../../utils/mixins";
export const StyledForm = styled.form`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 37.5rem;

  div {
    position: relative;
    height: 5rem;
    max-width: 25.9rem;
    width: 100%;
    margin-right: 1.2rem;
    > label {
      display: none;
    }
    > input {
      width: 100%;
      height: 100%;
      padding: 1.45rem 4rem 1.45rem 5.1rem;
      outline: none;
      border-radius: 0.5rem;
      border: 0.1rem solid ${({ theme }) => theme.authForm.textInput.borderIdle};
      background-color: ${({ theme }) => theme.authForm.textInput.bgIdle};
      transition: color 100ms, background-color 100ms, border 100ms;

      ${font({
        family: ({ theme }) => theme.authForm.textInput.font,
        color: ({ theme }) => theme.authForm.textInput.fontIdle,
        size: "1.4rem",
        weight: "400",
      })}

      &:focus,
      &:hover {
        border: 0.1rem solid
          ${({ theme }) => theme.authForm.textInput.borderActive};
        background: ${({ theme }) => theme.authForm.textInput.bgIdle};
      }
    }
    > span {
      display: none;
    }
  }
  svg {
    position: absolute;

    width: 2.2rem;
    height: 2.2rem;
    top: 1.4rem;
    transition: stroke 100ms, fill 100ms;

    &:nth-of-type(1) {
      stroke: ${({ theme }) => theme.authForm.textInput.iconIdle};
      fill: none;
      left: 1.8rem;
    }
    &:nth-of-type(2) {
      stroke: black;

      border-radius: 50%;
      fill: ${({ theme }) => theme.authForm.textInput.error};
      right: 1.9rem;
    }
  }

  button {
    height: 5rem;
    width: 100%;
    max-width: 18.7rem;
  }
`;
