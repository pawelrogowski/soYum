import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledButton = styled(motion.button)`
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.04);
  &:disabled {
    background: grey;
    pointer-events: none;
    border: none;
  }
  color: ${({ theme: t }) => t.button.base.fontColorIdle};
  font-size: 1.6rem;
  font-family: ${({ theme: t }) => t.button.font};
  font-weight: 400;
  background-color: ${({ theme: t }) => t.button.base.bgIdle};
  border-radius: 2.4rem 4.4rem;
  width: 16.1rem;
  height: 7rem;
  border: 0.1rem solid ${({ theme: t }) => t.button.base.borderIdle};
  transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
    color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms, border cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
    transform cubic-bezier(0.17, 0.67, 1, 1.23) 50ms,
    border-radius cubic-bezier(0.17, 0.67, 1, 1.23) 100ms;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${({ theme: t }) => t.button.base.bgHover};
    border: 0.1rem solid ${({ theme: t }) => t.button.base.borderHover};
  }
  &:active {
    transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
      color cubic-bezier(0.17, 0.67, 1, 1.23) 100ms, border cubic-bezier(0.17, 0.67, 1, 1.23) 100ms,
      transform cubic-bezier(0.17, 0.67, 1, 1.23) 50ms;
    background-color: ${({ theme: t }) => t.button.base.bgActive};
    border: 0.1rem solid ${({ theme: t }) => t.button.base.borderActive};
  }

  ${({ $variant, theme }) =>
    $variant === "outlineSmall"
      ? css`
          background-color: ${theme.button.outlineSmall.bgIdle};
          border: 0.2rem solid ${theme.button.outlineSmall.borderIdle};
          color: ${theme.button.outlineSmall.fontColorIdle};

          &:hover,
          &:focus {
            border-radius: 4.4rem 2.4rem;
            background-color: ${theme.button.outlineSmall.bgHover};
            color: ${theme.button.outlineSmall.fontColorHover};
            border: 0.2rem solid ${theme.button.outlineSmall.borderHover};
          }

          &:active {
            background-color: ${({ theme: t }) => t.button.outlineSmall.bgActive};
            border: 0.2rem solid ${({ theme: t }) => t.button.outlineSmall.borderActive};
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
            border-radius: 4.4rem 2.4rem;
            background-color: ${theme.button.outlineBig.bgHover};
            color: ${theme.button.outlineBig.fontColorHover};
            border: 0.2rem solid ${theme.button.outlineBig.borderHover};
          }
          &:active {
            color: ${theme.button.outlineBig.fontColorActive};
          }

          &:active {
            background-color: ${({ theme: t }) => t.button.outlineBig.bgActive};
            border: 0.2rem solid ${({ theme: t }) => t.button.outlineBig.borderActive};
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
            background-color: ${({ theme: t }) => t.button.rectBig.bgActive};
            border: 0.2rem solid ${({ theme: t }) => t.button.rectBig.borderActive};
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
            background-color: ${({ theme: t }) => t.button.rectSmall.bgActive};
            border: 0.2rem solid ${({ theme: t }) => t.button.rectSmall.borderActive};
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
            background-color: ${theme.button.rectSmall.bgHover};
            color: ${theme.button.rectSmall.fontColorHover};
            border: 0.2rem solid ${theme.button.rectSmall.borderHover};
          }

          &:active {
            background-color: ${({ theme: t }) => t.button.rectSmall.bgActive};
            border: 0.2rem solid ${({ theme: t }) => t.button.rectSmall.borderActive};
          }
        `
      : null};
`;
