import styled from "styled-components";

export const StyledDiv = styled.div`
  position: absolute;
  bottom: 100px;
  right: 9px;
  width: 22.5rem;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: #fafafa;
  border-radius: 0.8rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 26rem;
    padding: 1.2rem;
    bottom: 24px;
    right: 26px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 29.8rem;
    padding: 1.6rem;
    bottom: 90px;
    right: -15px;
  }

  p {
    color: #3e4462;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5rem;
    letter-spacing: -0.024rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.4rem;
      line-height: 1.28;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      line-height: 1.43;
    }
    span {
      color: #8baa36;
    }
  }

  a {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    color: #3e4462;
    font-size: 1rem;
    line-height: 1.2;
    letter-spacing: 0.2px;
    justify-content: flex-end;

    svg {
      width: 1.8rem;
      height: 1.8rem;
      stroke: #3e4462;
      fill: #3e4462;
    }
  }
`;
