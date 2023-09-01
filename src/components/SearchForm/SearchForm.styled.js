import styled from "styled-components";
import { font } from "../../styles/mixins";
export const StyledForm = styled.form`
  position: relative;

  label,
  p {
    display: none;
  }

  input {
    ${font({
      family: ({ theme }) => theme.form.font,
      color: ({ theme }) => theme.form.search.font,
      size: "1.6rem",
      weight: "400",
    })}

    height: 7rem;
    border: 0.1rem solid ${({ theme }) => theme.form.search.borderIdle};
    width: 39rem;
    border-radius: 2.4rem 0rem 0rem 4.4rem;
    padding: 0 6rem 0rem 4.9rem;
    outline: none;
    transition: border-color 150ms;

    &:not(:placeholder-shown) ~ Button {
      border: 0.1rem solid ${(props) => props.theme.button.base.bgHover};
      background-color: ${(props) => props.theme.button.base.bgHover};
    }

    &:focus,
    &:hover,
    &:focus-within {
      transition: border-color 150ms;
      border: 0.1rem solid ${({ theme }) => theme.form.search.borderFocus};
    }
    &::placeholder {
      color: ${({ theme }) => theme.form.search.placeholder};
    }
  }
  button {
    position: absolute;
    top: 0;
    left: 349px;
  }
`;
