import { font } from "../../utils/mixins";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  ${font({
    family: ({ theme }) => theme.button.font,
    color: ({ theme }) => theme.button.base.fontColorIdle,
    size: "1.6rem",
    weight: "400",
  })}

  background-color: ${({ theme }) => theme.button.base.bgIdle};
  border-radius: 2.4rem 4.4rem;
  width: 16.1rem;
  height: 7rem;
  border: 0.1rem solid ${({ theme }) => theme.button.base.borderIdle};
  transition: background-color 100ms, color 100ms, border 100ms;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    transition: background-color 100ms, color 100ms, border 100ms;
    background-color: ${({ theme }) => theme.button.base.bgHover};
    border: 0.1rem solid ${({ theme }) => theme.button.base.borderHover};
  }
  &:active {
    transition: background-color 100ms, color 100ms, border 100ms;
    background-color: ${({ theme }) => theme.button.base.bgActive};
    border: 0.1rem solid ${({ theme }) => theme.button.base.borderActive};
  }

  ${({ $variant, theme }) =>
    $variant === "outlineSmall"
      ? css`
          background-color: ${theme.button.outlineSmall.bgIdle};
          border: 0.2rem solid ${theme.button.outlineSmall.borderIdle};
          color: ${theme.button.outlineSmall.fontColorIdle};

          &:hover,
          &:focus {
            background-color: ${theme.button.outlineSmall.bgHover};
            color: ${theme.button.outlineSmall.fontColorHover};
            border: 0.2rem solid ${theme.button.outlineSmall.borderHover};
          }

          &:active {
            background-color: ${({ theme }) =>
              theme.button.outlineSmall.bgActive};
            border: 0.2rem solid
              ${({ theme }) => theme.button.outlineSmall.borderActive};
          }
        `
      : $variant === "outlineBig"
      ? css`
          background-color: ${theme.button.outlineBig.bgIdle};
          border: 0.2rem solid ${theme.button.outlineBig.borderIdle};
          color: ${theme.button.outlineBig.fontColorIdle};
          width: 23.9rem;
          max-height: 6.1rem;

          &:hover,
          &:focus {
            background-color: ${theme.button.outlineBig.bgHover};
            color: ${theme.button.outlineBig.fontColorHover};
            border: 0.2rem solid ${theme.button.outlineBig.borderHover};
          }

          &:active {
            background-color: ${({ theme }) =>
              theme.button.outlineBig.bgActive};
            border: 0.2rem solid
              ${({ theme }) => theme.button.outlineBig.borderActive};
          }
        `
      : $variant === "rectBig"
      ? css`
          background-color: ${theme.button.rectBig.bgIdle};
          border: 0.2rem solid ${theme.button.rectBig.borderIdle};
          color: ${theme.button.rectBig.fontColorIdle};
          border-radius: 0.6rem;
          width: 33.9rem;
          height: 6rem;

          &:hover,
          &:focus {
            background-color: ${theme.button.rectBig.bgHover};
            color: ${theme.button.rectBig.fontColorHover};
            border: 0.2rem solid ${theme.button.rectBig.borderHover};
          }

          &:active {
            background-color: ${({ theme }) => theme.button.rectBig.bgActive};
            border: 0.2rem solid
              ${({ theme }) => theme.button.rectBig.borderActive};
          }
        `
      : $variant === "rectSmall"
      ? css`
          background-color: ${theme.button.rectSmall.bgIdle};
          border: 0.2rem solid ${theme.button.rectSmall.borderIdle};
          color: ${theme.button.rectSmall.fontColorIdle};
          border-radius: 0.6rem;
          width: 19.2rem;
          height: 5.9rem;

          &:hover,
          &:focus {
            background-color: ${theme.button.rectSmall.bgHover};
            color: ${theme.button.rectSmall.fontColorHover};
            border: 0.2rem solid ${theme.button.rectSmall.borderHover};
          }

          &:active {
            background-color: ${({ theme }) => theme.button.rectSmall.bgActive};
            border: 0.2rem solid
              ${({ theme }) => theme.button.rectSmall.borderActive};
          }
        `
      : $variant === "rectSmallDisabled"
      ? css`
          background-color: ${theme.button.rectSmallDisabled.bgIdle};
          border: 0.2rem solid ${theme.button.rectSmallDisabled.borderIdle};
          color: ${theme.button.rectSmallDisabled.fontColorIdle};
          border-radius: 0.6rem;
          width: 19.2rem;
          height: 5.9rem;

          &:hover,
          &:focus {
            background-color: ${theme.button.rectSmallDisabled.bgHover};
            color: ${theme.button.rectSmallDisabled.fontColorHover};
            border: 0.2rem solid ${theme.button.rectSmallDisabled.borderHover};
          }

          &:active {
            background-color: ${({ theme }) =>
              theme.button.rectSmallDisabled.bgActive};
            border: 0.2rem solid
              ${({ theme }) => theme.button.rectSmallDisabled.borderActive};
          }
        `
      : null};
`;
