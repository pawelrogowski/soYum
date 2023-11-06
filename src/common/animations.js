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
    type: "spring",
    transition: {
      duration: 0.2,
      type: "easeInOut",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.2 },
      type: "easeInOut",
    },
  },
};

export const mobileMenuMotion = {
  initial: { left: "-100%", opacity: 0 },
  animate: { left: 0, opacity: 1 },
  exit: { left: "-100%", transition: { duration: 0.2 } },
  transition: { duration: 0.3 },
};

export const prepStepMotion = {
  initial: {
    opacity: 0,
    y: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      type: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 0.2,
      type: "easeInOut",
    },
  },
};

export const routeChangeMotion = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.1 } },
  transition: { duration: 0.1 },
};

export const galleryMotion = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.05 } },
  transition: { duration: 0.05 },
};

export const logoMotion = {
  initial: { scale: 1, borderRadius: "1.2rem" },
  animate: { scale: 1 },
  exit: { scale: 0.8, transition: { duration: 0.5 } },
  whileHover: {
    scale: 1.3,
    borderRadius: "1.6rem",
    transition: {
      scale: { duration: 0.3 },
      borderRadius: { duration: 0.3 },
    },
  },
  whileFocus: {
    scale: 1.3,
    borderRadius: "1.6rem",
    transition: {
      scale: { duration: 0.3 },
      borderRadius: { duration: 0.3 },
    },
  },
  whileTap: {
    scale: 1.3,
    borderRadius: "1.6rem",
    transition: {
      scale: { duration: 0.3 },
      borderRadius: { duration: 0.3 },
    },
  },
};

export const startPageMotion = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.1 },
};
