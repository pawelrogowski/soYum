import styled from "styled-components";

export const StyledListItem = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  padding: 1.4rem 0.9rem;
  gap: 1.4rem;
  background-color: #fafafa;
  border-radius: 0.8rem;
  height: 15.2rem;
  overflow: hidden;
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2.8rem 2.4rem;
    height: 28.8rem;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 4rem;
    height: 40.4rem;
    gap: 5.4rem;
  }
  > picture {
    width: 124px;
    height: 124px;
    aspect-ratio: 1 / 1;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 228px;
      height: 232px;
      aspect-ratio: 228 / 232;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      width: 318px;
      height: 324px;
      aspect-ratio: 318 / 324;
    }
    > img {
      width: 124px;
      height: 124px;
      aspect-ratio: 1 / 1;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 228px;
        height: 232px;
        aspect-ratio: 228 / 232;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 318px;
        height: 324px;
        aspect-ratio: 318 / 324;
      }
    }
  }
  > button {
    position: absolute;
    top: 1.4rem;
    right: 0.9rem;
    width: 2.4rem;
    height: 2.4rem;
    background-color: #8baa36;
    border-color: #8baa36;
    transition: background-color 200ms, border-color 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 3.8rem;
      height: 3.8rem;
      top: 2.8rem;
      right: 2.4rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      top: 4rem;
      right: 4rem;
    }
    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: #fafafa;
      transition: stroke 200ms;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 2.2rem;
        height: 2.2rem;
      }
    }
    &:hover,
    &:focus {
      background-color: #1e1f28;
      border-color: #8baa36;
      > svg {
        stroke: #8baa36;
      }
    }
  }
  > article {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width: 100%;
    overflow-x: hidden;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      gap: 2.8rem;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      gap: 4rem;
    }

    > h2 {
      color: #3e4462;
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 1.25;
      letter-spacing: -0.024rem;
      padding-right: 3rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.4rem;
        line-height: 1.25;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 2.4rem;
        line-height: 1.25;
      }
    }
    > p {
      color: #23262a;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.016rem;
      width: calc(100%);
      flex-grow: 1;
      height: 3.9rem;
      overflow: hidden;
      padding-right: 1rem;
      text-wrap: preety;
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 1.4rem;
        line-height: 1.28;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: 1.8rem;
        line-height: 1.33;
        letter-spacing: -0.036rem;
      }
    }
    > div {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      > button {
        max-width: 8.7rem;
        max-height: 2.7rem;
        background-color: #8baa36;
        color: #fafafa;
        font-size: 1rem;
        line-height: 1.5;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.4rem;
          max-width: 13.8rem;
          max-height: 4.5rem;
        }
        @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
          font-size: 1.7rem;
          max-width: 17.2rem;
          max-height: 5.9rem;
        }
        &:hover,
        &:focus {
        }
      }
      > span {
        color: #3e4462;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.4%;
        letter-spacing: -0.024rem;
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
