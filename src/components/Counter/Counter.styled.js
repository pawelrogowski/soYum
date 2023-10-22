import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-text-idle: ${({ theme }) => theme.counter.textIdle};
  --color-text-active: ${({ theme }) => theme.counter.textActive};
  --color-icon-active: ${({ theme }) => theme.counter.iconActive};
  --color-icon-idle: ${({ theme }) => theme.counter.iconIdle};
  --color-icon-disabled: ${({ theme }) => theme.counter.iconDisabled};
  --color-border: ${({ theme }) => theme.counter.border};
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
      transition: stroke 200ms;
      width: 1.4rem;
      height: 1.4rem;
      stroke: var(--color-icon-idle);
    }
    &:disabled {
      cursor: initial;
      > svg {
        transition: stroke 200ms;
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
