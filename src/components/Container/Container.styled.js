import styled, { css } from "styled-components";
import leaves from "../../assets/images/leaves@1x.webp";
export const StyledDiv = styled.main`
  max-width: ${({ theme }) => theme.breakpoints.maxContent};
  min-width: ${({ theme }) => theme.breakpoints.minContent};
  padding: 0 2.1rem;
  position: relative;
  margin: 0 auto;
  width: 100%;

  ${(props) =>
    props.as === "main" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 10rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        padding-bottom: 20rem;
      }
      > section:last-of-type {
        margin-bottom: 3.2rem;
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
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 33.5rem;
          height: 51.7rem;
          bottom: -29.9rem;
          left: -10.1rem;
          rotate: -217deg;
        }
      }
    `}
`;
