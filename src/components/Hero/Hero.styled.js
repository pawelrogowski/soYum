import styled from "styled-components";

export const StyledSection = styled.section`
  --color-brand-highlight: ${({ theme }) => theme.brandColors.main};

  padding: 6.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      color: #22252a;
      font-size: 6rem;
      line-height: 1;
      letter-spacing: -0.3rem;
      margin-bottom: 1.4rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 7.2rem;
        line-height: 0.72;
        letter-spacing: -0.036rem;
        margin-bottom: 2.4rem;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 10rem;
        line-height: 1;
        letter-spacing: -0.05rem;
        margin-bottom: 1.4rem;
      }

      > span {
        color: var(--color-brand-highlight);
      }
    }
    p {
      color: #23262a;
      text-align: center;
      font-size: 1.4rem;
      line-height: 1.28;
      letter-spacing: -0.028rem;
      margin-bottom: 4.4rem;

      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
      }
    }
  }
  picture {
    margin-bottom: 2.4rem;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      background: #ebf3d4;
      width: 300%;
      height: 300%;
      top: 50%;
      left: 58%;
      border-radius: 100px;
      z-index: -1;
      transform: translate(0, -50%) rotate(45deg);
    }
  }
`;
