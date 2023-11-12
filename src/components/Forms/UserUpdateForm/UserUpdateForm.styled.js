import { Form } from "formik";
import styled from "styled-components";

export const StyledFormikForm = styled(Form)`
  --color-img-bg: ${({ theme: t }) => t.userUpdateForm.bg};
  --color-img-box-shadow: ${({ theme: t }) => t.userUpdateForm.boxShadow};
  --color-img-button-bg-idle: ${({ theme: t }) => t.userUpdateForm.img.buttonBgIdle};
  --color-img-button-bg-active: ${({ theme: t }) => t.userUpdateForm.img.buttonBgActive};
  --color-img-button-icon-idle: ${({ theme: t }) => t.userUpdateForm.img.iconIdle};
  --color-img-button-icon-active: ${({ theme: t }) => t.userUpdateForm.img.iconActive};
  --color-input-bg-idle: ${({ theme: t }) => t.userUpdateForm.input.bgIdle};
  --color-input-bg-active: ${({ theme: t }) => t.userUpdateForm.input.bgActive};
  --color-input-bg-disabled: ${({ theme: t }) => t.userUpdateForm.input.bgDisabled};
  --color-input-border-idle: ${({ theme: t }) => t.userUpdateForm.input.borderIdle};
  --color-input-border-active: ${({ theme: t }) => t.userUpdateForm.input.borderActive};
  --color-input-border-disabled: ${({ theme: t }) => t.userUpdateForm.input.borderDisabled};
  --color-input-icon-user-idle: ${({ theme: t }) => t.userUpdateForm.input.iconUserIdle};
  --color-input-icon-user-active: ${({ theme: t }) => t.userUpdateForm.input.iconUserActive};
  --color-input-icon-user-disabled: ${({ theme: t }) => t.userUpdateForm.input.iconUserDisabled};
  --color-input-icon-edit-idle: ${({ theme: t }) => t.userUpdateForm.input.iconEditIdle};
  --color-input-icon-edit-active: ${({ theme: t }) => t.userUpdateForm.input.iconEditActive};
  --color-input-text-idle: ${({ theme: t }) => t.userUpdateForm.input.textIdle};
  --color-input-text-disabled: ${({ theme: t }) => t.userUpdateForm.input.textDisabled};
  --color-button-bg-idle: ${({ theme: t }) => t.userUpdateForm.button.bgIdle};
  --color-button-bg-active: ${({ theme: t }) => t.userUpdateForm.button.bgActive};
  --color-button-bg-disabled: ${({ theme: t }) => t.userUpdateForm.button.bgDisabled};
  --color-button-border-idle: ${({ theme: t }) => t.userUpdateForm.button.borderIdle};
  --color-button-border-active: ${({ theme: t }) => t.userUpdateForm.button.borderActive};
  --color-button-border-disabled: ${({ theme: t }) => t.userUpdateForm.button.borderDisabled};
  --color-button-text-idle: ${({ theme: t }) => t.userUpdateForm.button.textIdle};
  --color-button-text-active: ${({ theme: t }) => t.userUpdateForm.button.textActive};
  --color-button-text-disabled: ${({ theme: t }) => t.userUpdateForm.button.textDisabled};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div:first-of-type {
    position: relative;
    margin-bottom: 5.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      margin-bottom: 5rem;
    }
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
      margin-bottom: 5.2rem;
    }
    &:hover {
      > picture > img {
        box-shadow: 0px 0px 3px var(--color-img-box-shadow);
      }
      > button {
        background-color: var(--color-img-button-bg-active);
        > svg {
          stroke: var(--color-img-button-icon-active);
        }
      }
    }
    > picture {
      width: 8.8rem;
      height: 8.8rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        width: 10.3rem;
        height: 10.3rem;
      }
      > img {
        cursor: pointer;
        transition: box-shadow cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
        border-radius: 50%;
        overflow: hidden;
        width: 8.8rem;
        height: 8.8rem;
        background-color: var(--color-img-bg);
        @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
          width: 10.3rem;
          height: 10.3rem;
        }
      }
    }
    > button {
      cursor: pointer;
      position: absolute;
      bottom: -3px;
      right: 6px;
      background: none;
      border-radius: 50%;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--color-img-button-bg-idle);
      border: none;
      transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      > svg {
        width: 1.8rem;
        height: 1.8rem;
        stroke: var(--color-img-button-icon-idle);
        transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      }
    }
  }
  > div:last-of-type {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 2.4rem;
    @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
      gap: 3.2rem;
    }
    > svg {
      position: absolute;
      width: 2.1rem;
      height: 2.1rem;
      stroke: var(--color-input-icon-user-idle);
      left: 1.2rem;
      top: 1.3rem;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        left: 1.2rem;
        top: 1.7rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }
    .confirm-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 4rem;
      top: 1.6rem;
      > svg {
        width: 1.6rem;
        height: 1.6rem;
        fill: #8baa36;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        right: 4.8rem;
        top: 2rem;
        > svg {
          width: 1.9rem;
          height: 1.9rem;
        }
      }
    }
    .edit-username-button {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1.4rem;
      top: 1.6rem;
      &:hover,
      &:focus {
        > svg {
          stroke: var(--color-input-icon-edit-active);
        }
      }
      > svg {
        width: 1.7rem;
        height: 1.7rem;
        stroke: var(--color-input-icon-edit-idle);
        transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        right: 1.8rem;
        top: 2rem;
        > svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    .edit-username-button--cancel {
      cursor: pointer;
      position: absolute;
      background: none;
      border: none;
      right: 1.4rem;
      top: 1.6rem;
      > svg {
        width: 1.7rem;
        height: 1.7rem;
        stroke: red;
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        right: 1.8rem;
        top: 2rem;
        > svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
    > input {
      color: var(--color-input-text-idle);
      width: 100%;
      height: 4.8rem;
      border-radius: 5px;
      border: 1px solid var(--color-input-border-idle);
      display: flex;
      align-items: center;
      padding: 0 6.5rem 0 3.8rem;
      font-size: 1.4rem;
      letter-spacing: -0.036rem;
      background: var(--color-input-bg-idle);
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        height: 5.8rem;
        font-size: 1.8rem;
        padding: 0 7.4rem 0 4.6rem;
      }
      &:disabled {
        color: var(--color-input-text-disabled);
        border-color: var(--color-input-border-disabled);
        background: var(--color-input-bg-disabled);
      }
      &:focus {
        border-color: var(--color-input-border-active);
        background: var(--color-input-bg-active);
        outline: none;
      }
    }
    > button:last-of-type {
      width: 100%;
      height: 4.9rem;
      font-size: 1.4rem;
      line-height: 1.28;
      background: var(--color-button-bg-idle);
      border-color: var(--color-button-border-idle);
      color: var(--color-button-text-idle);
      &:hover,
      &:focus {
        background: var(--color-button-bg-active);
        border-color: var(--color-button-border-active);
        color: var(--color-button-text-active);
      }
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.tablet}) {
        height: 5.9rem;
        font-size: 1.6rem;
        line-height: 1.125;
      }
      &:disabled {
        background: var(--color-button-bg-disabled);
        border-color: var(--color-button-border-disabled);
        color: var(--color-button-text-disabled);
      }
    }
  }
`;
