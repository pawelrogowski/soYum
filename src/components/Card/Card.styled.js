import styled from "styled-components";

export const StyledFigure = styled.figure`
  position: relative;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  figcaption {
    position: absolute;
    bottom: 2.6rem;
    left: 1.8rem;

    background-color: #fff;

    border-radius: 4px;
    padding: 1.6rem;
    width: calc(100% - 3.2rem);

    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.024rem;
  }
  picture {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
