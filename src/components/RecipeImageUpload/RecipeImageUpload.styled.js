import styled from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  width: 27.9rem;
  height: 26.8rem;
  background: #8baa36;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid #8baa36;
  transition: scale 200ms, background-color 200ms, border-color 200ms;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 35.7rem;
    height: 34.4rem;
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
    transition: fill 200ms stroke 200ms;
  }
  > picture {
    > img {
      width: 100%;
      height: auto;
      aspect-ratio: 279 / 268;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        aspect-ratio: 357 / 344;
      }
    }
  }
`;
