import styled from "styled-components";

export const StyledButton = styled.button`
  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  cursor: pointer;
  position: relative;
  width: 27.9rem;
  height: 26.8rem;
  min-width: 27.9rem;
  background: #8baa36;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid #8baa36;
  transition: scale cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
    background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms,
    border-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  > span {
    animation: spin 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 8px #8baa36 inset;
    border-bottom: 8px solid #8baa36;
    border-top: 8px solid #8baa36;
  }
  @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
    width: 35.7rem;
    height: 34.4rem;
    min-width: 35.7rem;
  }

  &:active {
    scale: 0.9;
  }
  &:hover,
  &:focus {
    background-color: #22252a;
    border: 1px solid #8baa36;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 6.4rem;
    height: 6.4rem;
    fill: none;
    stroke: #fafafa;
    transition: fill cubic-bezier(0.17, 0.67, 1, 1.23) 200ms stroke
      cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  }
  > picture {
    > img {
      width: 100%;
      height: auto;
      aspect-ratio: 279 / 268;
      @media screen and (min-width: ${({ theme: t }) => t.breakpoints.desktop}) {
        aspect-ratio: 357 / 344;
      }
    }
  }
`;
