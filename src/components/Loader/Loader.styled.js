import { styled } from "styled-components";

export const Loader = styled.div`
  width: 140px;
  height: 52px;
  background: #8baa36;
  border-radius: 50px;
  --c: no-repeat radial-gradient(farthest-side, #000 92%, #0000);
  --s: 36px 36px;
  -webkit-mask: var(--c) left 4px top 50%, var(--c) center,
    var(--c) right 4px top 50%, linear-gradient(#000 0 0);
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
`;
