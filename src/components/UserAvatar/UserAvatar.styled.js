import { styled } from "styled-components";

export const StyledDiv = styled.div`
  --font-idle: ${({ theme }) => theme.userAvatar.fontIdle};
  --font-hover: ${({ theme }) => theme.userAvatar.fontHover};
  --breakpoint-tablet: ${({ theme }) => theme.breakpoints.tablet};

  height: 100%;
  margin-right: 2.4rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1.4rem;

  &:hover,
  &:focus,
  &:focus-within {
    cursor: pointer;
    span {
      color: var(--font-hover);
    }
  }

  @media (min-width: var(--breakpoint-tablet)) {
    margin-right: 5rem;
  }

  > picture > img {
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;
    background-color: lightgrey;
    transition: border-color 250ms;

    @media (min-width: var(--breakpoint-tablet)) {
      width: 4.4rem;
      height: 4.4rem;
    }
  }

  > span {
    color: var(--font-idle);
    font-size: 1.2rem;
    font-family: "Poppins";
    line-height: 20.4rem;
    letter-spacing: normal;
    font-weight: 600;
    font-style: normal;
    transition: color 250ms;

    @media (min-width: var(--breakpoint-tablet)) {
      font-size: 1.4rem;
      line-height: 23.8rem;
    }
  }
`;
