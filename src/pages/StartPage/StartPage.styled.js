import { styled } from "styled-components";
import startBgx1 from "../../assets/images/start-page@1x.jpg";

export const StartPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  min-width: 28rem;
  padding: 3.5rem;
  background-image: url(${startBgx1});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  a {
    > svg {
      margin-bottom: 2.8rem;
      max-width: 54px;
      max-height: 54px;
      width: 54px;
      height: 54px;
    }
  }

  h1 {
    margin-bottom: 1.4rem;
    color: #fafafa;
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 2.4rem;
    letter-spacing: -0.048rem;
    text-align: center;
  }

  p {
    margin-bottom: 4.4rem;
    max-width: 35rem;
    text-align: center;
    color: #fafafa;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.8rem;
    letter-spacing: -0.028rem;
  }
  nav {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-right: 3rem;
    > ul {
      display: flex;
      flex-direction: row;
      gap: 1.2rem;
      li:first-of-type {
        button {
          color: #fafafa;
          background-color: #8baa36;
          border-color: #8baa36;
          width: 13.2rem;
          height: 45px;
          &:hover {
            background-color: #22252a;
            border-color: #22252a;
            color: #8baa36;
          }
        }
      }
      li:last-of-type {
        button {
          color: #fafafa;
          border-color: #fafafa;
          width: 9.5rem;
          height: 45px;
          &:hover {
            border-color: #8baa36;
          }
        }
      }
    }
  }
`;
