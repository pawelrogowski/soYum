import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh;
  backdrop-filter: blur(0.1rem);
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color cubic-bezier(0.17, 0.67, 1, 1.23) 200ms;
  z-index: 3;
  animation: delayLoader 1.5s ease-in-out 1 forwards;

  div {
    width: 14rem;
    height: 5.2rem;
    background: rgba(139, 170, 54, 1);
    border-radius: 5rem;
    --c: no-repeat radial-gradient(farthest-side, rgba(0, 0, NaN, 1) 92%, rgba(0, 0, NaN, 1)0);
    --s: 3.6rem 3.6rem;
    mask: var(--c) left 0.4rem top 50%, var(--c) center, var(--c) right 0.4rem top 50%,
      linear-gradient(rgba(0, 0, NaN, 1) 0 0);
    -webkit-mask: var(--c) left 0.4rem top 50%, var(--c) center, var(--c) right 0.4rem top 50%,
      linear-gradient(rgba(0, 0, NaN, 1) 0 0);
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
    color: rgba(250, 250, 250, 1);
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
