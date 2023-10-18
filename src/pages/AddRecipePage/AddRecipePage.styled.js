import styled from "styled-components";

import leaves from "../../assets/images/leaves@1x.webp";

export const MainContainer = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  min-width: ${({ theme }) => theme.breakpoints.minContent};
  padding: 10rem 2.1rem 10rem 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom: 20rem;
  }

  &:after {
    content: "";
    position: absolute;
    background-image: url(${leaves});
    background-repeat: no-repeat;
    background-size: cover;
    width: 2.95rem;
    height: 46.8rem;
    bottom: -26.4rem;
    left: -10rem;
    rotate: -217deg;
    filter: blur(0.15rem);
    transform: scaleX(-1);
    z-index: -1;

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 33.5rem;
      height: 51.7rem;
      bottom: -29.9rem;
      left: -10.1rem;
      rotate: -217deg;
    }
  }

  > h1 {
    margin-bottom: 6rem;
    align-self: flex-start;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin-bottom: 7.4rem;
    }
  }
  > nav {
    margin-bottom: 6.6rem;
  }
`;
