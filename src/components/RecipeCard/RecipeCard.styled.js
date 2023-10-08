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
  > picture {
    height: 100%;
    aspect-ratio: 1 / 1;
    > img {
      height: 100%;
      aspect-ratio: 1 / 1;
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

    > svg {
      width: 1.4rem;
      height: 1.4rem;
      stroke: #fafafa;
      transition: stroke 200ms;
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
    text-overflow: ellipsis;

    > h2 {
      color: #3e4462;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1;
      letter-spacing: -0.024rem;
      padding-right: 3rem;
      overflow-x: hidden;
      white-space: nowrap;
      text-overflow: ellipsis ellipsis;
    }
    > p {
      color: #23262a;
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.25;
      letter-spacing: -0.016rem;
      width: calc(100%);
      flex-grow: 1;
      padding-right: 2.4rem;
      height: 3.9rem;
      overflow: hidden;
      margin-bottom: 5px;
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
      }
    }
  }
`;
