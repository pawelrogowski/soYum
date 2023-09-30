import styled from "styled-components";

export const StyledDiv = styled.div`
  --color-call-bg: ${({ theme }) => theme.callToAction.bg};
  --color-text-highlight: ${({ theme }) => theme.callToAction.textHightlight};
  --color-text-idle: ${({ theme }) => theme.callToAction.text};
  --color-text-link-idle: ${({ theme }) => theme.callToAction.link.textIdle};
  --color-text-link-active: ${({ theme }) =>
    theme.callToAction.link.textActive};

  position: absolute;
  bottom: 100px;
  right: 9px;
  width: 22.5rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: var(--color-call-bg);
  border-radius: 0.8rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 26rem;
    padding: 1.2rem;
    bottom: 24px;
    right: 26px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 29.8rem;
    padding: 1.6rem;
    bottom: 90px;
    right: -15px;
  }

  p {
    color: var(--color-text-idle);
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: -0.024rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      line-height: 1.28;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      line-height: 1.43;
    }
    span {
      color: var(--color-text-highlight);
    }
  }

  a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color: var(--color-text-link-idle);
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
    justify-content: flex-end;
    transition: color 200ms;
    cursor: pointer;
    &:hover,
    &:focus {
      color: var(--color-text-link-active);
      > svg {
        stroke: var(--color-text-link-active);
      }
    }

    svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: var(--color-text-link-idle);
      transition: stroke 200ms;
    }
  }
  > svg {
    position: absolute;
    width: 100%;
    top: 6rem;
    left: -1rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 7rem;
      left: 1rem;
    }
  }
`;
