import styled from "styled-components";

export const StyledFigure = styled.figure`
  --color-card-bg: ${({ theme }) => theme.card.bg};
  --color-card-border-idle: ${({ theme }) => theme.card.borderIdle};
  --color-card-border-active: ${({ theme }) => theme.card.borderActive};
  --color-caption-text-idle: ${({ theme }) => theme.card.caption.textIdle};
  --color-caption-text-active: ${({ theme }) => theme.card.caption.textActive};
  --color-caption-bg-idle: ${({ theme }) => theme.card.caption.bgIdle};
  position: relative;
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid var(--color-card-border-idle);
  background-color: var(--color-card-bg);
  transition: border-color 200ms, color 200ms, background 200ms;
  &:hover,
  &:focus,
  &:focus-within {
    border: 2px solid var(--color-card-border-active);
    > figcaption {
      color: var(--color-caption-text-active);
      border: 1px solid var(--color-caption-text-active);
    }
  }
  figcaption {
    position: absolute;
    bottom: 2.6rem;
    left: 1.8rem;
    background-color: var(--color-caption-bg-idle);
    border: 1px solid var(--color-caption-bg-idle);
    border-radius: 4px;
    padding: 1.6rem;
    width: calc(100% - 3.2rem);
    color: var(--color-caption-text-idle);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.024rem;
    transition: border-color 200ms, color 200ms, background 200ms;
  }
  picture {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
