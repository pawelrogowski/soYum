import { styled } from "styled-components";

export const StyledDiv = styled.div`
  --color-userAvatar-fontIdle: ${({ theme }) => theme.userAvatar.fontIdle};
  --color-userAvatar-fontHover: ${({ theme }) => theme.userAvatar.fontHover};
  --color-decoration: ${({ theme }) => theme.backgroundDecoration.secondary};
  --blend-mode: ${({ theme }) => theme.userAvatar.blend};
  height: 100%;
  max-height: 4.6rem;
  margin-right: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.4rem;
  position: relative;

  &:hover,
  &:focus {
    cursor: pointer;
    span {
      color: var(--color-userAvatar-fontHover);
      mix-blend-mode: initial;
    }
  }
  &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 0.3rem;
    background-color: var(--color-decoration);
    bottom: -8.35rem;
    left: 3.8rem;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 1.2rem;
      height: 1.2rem;
      bottom: -10rem;
      left: -10rem;
      rotate: -25deg;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      bottom: -13.9rem;
      left: -30.5rem;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-right: 5rem;
  }

  > picture img {
    height: 3.4rem;
    width: 3.4rem;
    border-radius: 50%;
    background-color: lightgrey;
    transition: border-color 250ms;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 4.4rem;
      width: 4.4rem;
    }
  }

  > span {
    color: var(--color-userAvatar-fontIdle);
    font-size: 1.2rem;
    font-family: "Poppins";
    line-height: 2.34rem;
    letter-spacing: normal;
    font-weight: 600;
    font-style: normal;
    mix-blend-mode: var(--blend-mode);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      line-height: 2.38rem;
    }
  }
`;
