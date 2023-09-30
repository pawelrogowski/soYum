import styled from "styled-components";
import leaves from "../../assets/images/leaves@1x.webp";
import Container from "../Container/Container";

export const StyledDiv = styled(Container)`
  --color-background: ${({ theme }) => theme.bg.main};
  --color-text: ${({ theme }) => theme.footer.legalText};
  position: relative;
  overflow: hidden;
  background-color: var(--color-background);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
  height: 6.6rem;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    gap: 2.8rem;
    height: 7.8rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    gap: 4rem;
    height: 11.4rem;
  }
  > span {
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.01rem;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      letter-spacing: -0.014rem;
    }
  }
  > a {
    color: var(--color-text);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.01rem;
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      letter-spacing: -0.014rem;
    }
  }

  &:after {
    content: "";
    position: absolute;
    background-image: url(${leaves});
    background-repeat: no-repeat;
    background-size: contain;
    width: 18.1rem;
    height: 17.2rem;
    bottom: -3.8rem;
    right: -9.6rem;
    rotate: -35deg;
    filter: blur(0.45rem);
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
      width: 21.3rem;
      height: 20.1rem;
      bottom: -2.4rem;
      right: -4.4rem;
      rotate: -8.9deg;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
      width: 27.1rem;
      height: 26.7rem;
      bottom: -2.4rem;
      right: -4.4rem;
      rotate: -8.9deg;
    }
  }
`;
