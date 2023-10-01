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
  border: 0.2rem solid var(--color-card-border-idle);
  background-color: var(--color-card-bg);
  transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
    color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
    background cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  &:hover,
  &:focus,
  &:focus-within {
    border: 0.2rem solid var(--color-card-border-active);
    > figcaption {
      color: var(--color-caption-text-active);
      border: 0.1rem solid var(--color-caption-text-active);
    }
  }
  figcaption {
    position: absolute;
    bottom: 2.6rem;
    left: 1.8rem;
    background-color: var(--color-caption-bg-idle);
    border: 0.1rem solid var(--color-caption-bg-idle);
    border-radius: 0.4rem;
    padding: 1.6rem;
    width: calc(100% - 3.2rem);
    color: var(--color-caption-text-idle);
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.024rem;
    transition: border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
      background cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
  picture {
    width: 100%;
  }
  img {
    transition: scale cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
    width: 100%;
    &:hover,
    &:focus {
      scale: 1.3;
      transition: scale cubic-bezier(0.17, 0.67, 1, 1.23) 60s;
    }
  }
`;
