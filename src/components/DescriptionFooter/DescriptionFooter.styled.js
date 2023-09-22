import styled from "styled-components";

export const StyledUl = styled.ul`
  display: none;
  flex-direction: column;
  gap: 1.4rem;
  list-style: disc;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  > li {
    color: #fafafa;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 128.571%;
    letter-spacing: -0.028rem;
  }
`;
