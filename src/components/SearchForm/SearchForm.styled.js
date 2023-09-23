import styled from "styled-components";

export const StyledForm = styled.form`
  --color-form-search-borderIdle: ${({ theme }) =>
    theme.form.search.borderIdle};
  --color-form-search-font: ${({ theme }) => theme.form.search.font};
  --font-form: ${({ theme }) => theme.form.font};
  --color-button-base-bgHover: ${({ theme }) => theme.button.base.bgHover};
  --color-form-search-borderFocus: ${({ theme }) =>
    theme.form.search.borderFocus};
  --color-form-search-placeholder: ${({ theme }) =>
    theme.form.search.placeholder};

  position: relative;

  label,
  p {
    display: none;
  }

  input {
    height: 7rem;
    border: 0.1rem solid var(--color-form-search-borderIdle);
    width: 39rem;
    border-radius: 2.4rem 0rem 0rem 4.4rem;
    padding: 0 6rem 0rem 4.9rem;
    outline: none;
    transition: border-color 100ms;

    color: var(--color-form-search-font);
    font-size: 1.6rem;
    font-family: var(--font-form);
    line-height: inherit;
    letter-spacing: normal;
    font-weight: 400;
    font-style: normal;

    &:not(:placeholder-shown) ~ Button {
      border: 0.1rem solid var(--color-button-base-bgHover);
      background-color: var(--color-button-base-bgHover);
    }

    &:focus,
    &:hover,
    &:focus-within {
      transition: border-color 100ms;
      border: 0.1rem solid var(--color-form-search-borderFocus);
    }

    &::placeholder {
      color: var(--color-form-search-placeholder);
    }
  }

  button {
    position: absolute;
    top: 0;
    left: 349px;
    @media ${({ theme }) => theme.breakpoints.tablet} {
      position: relative;
      left: initial;
      top: initial;
    }
  }
`;
