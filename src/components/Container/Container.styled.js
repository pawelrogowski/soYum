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
      &:after {
        content: "";
        position: absolute;
        background-image: url(${leaves});
        background-repeat: no-repeat;
        background-size: cover;
        width: 295px;
        height: 468px;
        bottom: -264px;
        left: -101px;
        rotate: -217deg;
        filter: blur(4.5px);
        transform: scaleX(-1);
        z-index: -1;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          width: 335px;
          height: 517px;
          bottom: -299px;
          left: -101px;
          rotate: -217deg;
        }
      }
    `}
`;
