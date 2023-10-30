export const inputErrorMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transitionEnd: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.1,
    type: "tween",
  },
};
