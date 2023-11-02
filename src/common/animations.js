export const inputErrorMotion = {
  initial: {
    opacity: 1,
    x: "0%",
  },
  animate: {
    opacity: 1,
    x: ["-5%", "0%", "5%", "0%"],
    transition: {
      duration: 0.2,
      yoyo: 3,
      repeatDelay: 0.1,
      repeatType: "reverse",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const ingredientListItemMotion = {
  initial: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 2.2,
    },
  },
};

export const mobileMenuMotion = {
  initial: { left: "-100%", opacity: 0 },
  animate: { left: 0, opacity: 1 },
  exit: { left: "-100%", transition: { duration: 0.2 } },
  transition: { duration: 0.3 },
};
