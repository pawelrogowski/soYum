import { styled } from "styled-components";

export const StyledDiv = styled.div`
  --color-userAvatar-fontIdle: ${({ theme }) => theme.userAvatar.fontIdle};
  --color-userAvatar-fontHover: ${({ theme }) => theme.userAvatar.fontHover};

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
      color: var(--color-userAvatar-fontHover);
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
    line-height: 20.4rem;
    letter-spacing: normal;
    font-weight: 600;
    font-style: normal;
    transition: color 250ms;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      line-height: 23.8rem;
    }
  }
`;
