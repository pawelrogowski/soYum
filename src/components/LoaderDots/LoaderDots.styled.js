import { styled } from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(0.2rem);
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 200ms;
  z-index: 1;

  animation: delayLoader 1.5s ease-in-out 1 forwards;

  div {
    width: 14rem;
    height: 5.2rem;
    background: #8baa36;
    border-radius: 5rem;
    --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
    --s: 3.6rem 3.6rem;
    -webkit-mask: var(--c) left 0.4rem top 50%, var(--c) center,
      var(--c) right 0.4rem top 50%, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: l1 1.5s infinite;

    @keyframes l1 {
      0% {
        -webkit-mask-size: 0 0, 0 0, 0 0, auto;
      }
      16.67% {
        -webkit-mask-size: var(--s), 0 0, 0 0, auto;
      }
      33.33% {
        -webkit-mask-size: var(--s), var(--s), 0 0, auto;
      }
      50% {
        -webkit-mask-size: var(--s), var(--s), var(--s), auto;
      }
      66.67% {
        -webkit-mask-size: 0 0, var(--s), var(--s), auto;
      }
      83.33% {
        -webkit-mask-size: 0 0, 0 0, var(--s), auto;
      }
      100% {
        -webkit-mask-size: 0 0, 0 0, 0 0, auto;
      }
    }
  }

  @keyframes delayLoader {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  p {
    margin-top: 3rem;
    font-size: 1.6rem;
    color: #fafafa;
    opacity: 0;

    animation: fadeInText 0.5s ease-in-out 5s 1 forwards;
  }

  @keyframes fadeInText {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
