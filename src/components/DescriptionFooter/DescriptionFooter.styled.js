import styled from "styled-components";

export const StyledUl = styled.ul`
  display: none;
  flex-direction: column;
  gap: 1.4rem;
  list-style: disc;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    display: flex;
  }

  > li {
    color: rgba(250, 250, 250, 1);
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.28;
    letter-spacing: -0.028rem;
  }
`;
