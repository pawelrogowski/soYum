import styled from "styled-components";

export const StyledFigure = styled.figure`
  --color-background-card: ${({ theme }) => theme.popularCard.bgCard};
  --color-background-image: ${({ theme }) => theme.popularCard.bgImage};
  --color-font-head: ${({ theme }) => theme.popularCard.fontHead};
  --color-font-article: ${({ theme }) => theme.popularCard.fontArticle};
  --color-border-idle: ${({ theme }) => theme.popularCard.borderIdle};
  --color-border-active: ${({ theme }) => theme.popularCard.borderActive};
  position: relative;
  display: flex;
  width: 100%;
  padding: 0 1.3rem 1.3rem 0;
  gap: 1.1rem;
  background-color: var(--color-background-card);
  overflow: hidden;
  border-bottom: 1px solid var(--color-border-idle);
  transition: border-color 200ms;
  flex-basis: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1.3rem 1.3rem 0;
    flex-basis: calc((100% - 1 * 3.2rem) / 2);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 1.3rem 1.3rem 0;
    flex-basis: 100%;
  }
  &:hover,
  &:focus {
    border-bottom: 1px solid var(--color-border-active);
    cursor: pointer;
  }
  > picture {
    min-width: 104px;
    width: 104px;
    height: 85px;
    aspect-ratio: 104 / 85;
    background-color: var(--color-background-image);
    border-radius: 7px;
    overflow: hidden;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      min-width: 102px;
      width: 102px;
      height: 85px;
      aspect-ratio: 102 / 85;
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      min-width: 97px;
      width: 97px;
      height: 85px;
      aspect-ratio: 97 / 85;
    }

    > img {
      min-width: 104px;
      width: 104px;
      height: 85px;
      aspect-ratio: 104 / 85;
      background-color: var(--color-background-image);
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-width: 102px;
        width: 102px;
        height: 85px;
        aspect-ratio: 102 / 85;
      }
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        min-width: 97px;
        width: 97px;
        height: 85px;
        aspect-ratio: 97 / 85;
      }
    }
  }

  > figcaption {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 100%;
    overflow: hidden;
    padding-top: 0.2rem;

    > h2 {
      color: var(--color-font-head);
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.024rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      line-height: 1.25;
    }
    > p {
      color: var(--color-font-article);
      font-size: 1rem;
      line-height: 1.25;
      letter-spacing: -0.016rem;

      flex-grow: 1;
      overflow: hidden;
      text-wrap: preety;
      @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        text-wrap: balance;
      }
    }
  }
`;
