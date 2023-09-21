import { styled } from "styled-components";
import { breakpoint } from "../../../utils/mixins";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.bg.footer};
  transition: background-color 200ms;
  display: flex;
  justify-content: center;

  > div {
    width: 100%;
    padding-top: 2.8rem;
    padding-bottom: 1.75rem;
    ${breakpoint.tablet`
        padding-top: 5rem;
        padding-bottom: 2.35rem;
    `}
    ${breakpoint.desktop`
        padding-top: 6.4rem;
        padding-bottom: 4.95rem;
    `}
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.2rem;
    a:first-of-type {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      &:hover,
      &:focus,
      &:focus-within {
        span {
          color: #86aa43;
        }
      }
      ${breakpoint.tablet`
        gap:1.2rem;
      `}

      > span {
        color: #fafafa;
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.8rem;
        letter-spacing: 0.027rem;
        transition: color 200ms;
        &:hover,
        &:focus,
        &:focus-within {
          color: #86aa43;
        }
        ${breakpoint.tablet`
          font-size: 2.8rem;
          line-height: 100%
          letter-spacing: 0.042rem;
        `}
      }
    }
  }
`;
