import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-text-idle: ${({ theme: t }) => t.counter.textIdle};
  --color-text-active: ${({ theme: t }) => t.counter.textActive};
  --color-icon-active: ${({ theme: t }) => t.counter.iconActive};
  --color-icon-idle: ${({ theme: t }) => t.counter.iconIdle};
  --color-icon-disabled: ${({ theme: t }) => t.counter.iconDisabled};
  --color-border: ${({ theme: t }) => t.counter.border};
  padding: 0.7rem 1.4rem;
  display: flex;
  border-radius: 1.8rem;
  border: 1px solid var(--color-border);
  margin-left: auto;
  max-width: 11rem;
  min-width: 9.2rem;
  justify-content: space-evenly;

  > button {
    cursor: pointer;
    border: none;
    background: none;
    width: 1.4rem;
    height: 1.4rem;
    &:hover,
    &:focus {
      > svg {
        stroke: var(--color-icon-active);
      }
    }
    > svg {
      transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
      width: 1.4rem;
      height: 1.4rem;
      stroke: var(--color-icon-idle);
    }
    &:disabled {
      cursor: initial;
      > svg {
        transition: stroke cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
        width: 1.4rem;
        height: 1.4rem;
        stroke: var(--color-icon-disabled);
      }
    }
  }
  > span {
    color: var(--color-text-idle);
    font-size: 1.4rem;
    line-height: 1;
    text-align: center;
    flex-grow: 1;
  }
`;
