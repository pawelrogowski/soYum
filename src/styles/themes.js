export const breakpoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  maxDesktop: "1400px",
};

const typography = {
  family: {
    primary: "Poppins",
    secondary: "Poppins",
    accent: "Poppins",
  },
};

const brandColors = {
  main: "#8BAA36",
  secondary: "#FAFAFA",
  accent: "#EBF3D4",
};

export const lightTheme = {
  breakpoints,
  bg: {
    main: "#FAFAFA",
    secondary: "#1E1F28",
    form: "#FAFAFA",
  },
  link: {
    authNav: "#fafafa",
    authNavActive: brandColors.main,
  },
  startPage: {
    header: "#fafafa",
    description: "#fafafa",
    registerButton: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: brandColors.main,
      borderHover: "#FAFAFA",
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#FAFAFA",
    },
    signinButton: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "#748d2e",
      borderIdle: "#FAFAFA",
      borderHover: "#FAFAFA",
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: brandColors.main,
    },
  },
  authForm: {
    font: typography.family.primary,
    header: "#FAFAFA",
    bg: "#2A2C36",
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "transparent",
      fontIdle: "#ffffffcc",
      fontActive: "#fff",
      borderIdle: "#ffffff33",
      borderActive: "#fff",
      iconIdle: "#ffffffcc",
      iconActive: "#fff",
      error: "#E74A3B",
      warning: "#F6C23E",
      correct: "#3CBC81",
    },
    button: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#22252A",
    },
  },
  logo: {
    header: {
      bg: brandColors.main,
      icon: brandColors.secondary,
    },
    footer: {
      bg: brandColors.accent,
      icon: brandColors.main,
    },
  },
  icon: {
    social: {
      fill: "#FAFAFA",
      fillHover: "#1E1F28",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "#23262A",
      placeholder: "#bdbdbd",
      borderIdle: "#f0f0f0",
      borderFocus: "#0000005e",
    },
  },
  navigation: {
    font: typography.family.primary,
    colorIdle: "#23262A",
    colorHover: brandColors.main,
    icon: "#23262A",
  },
  button: {
    font: typography.family.primary,
    base: {
      bgIdle: "#22252A",
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: "#22252A",
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#FAFAFA",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "#FAFAFA",
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#22252A",
      fontColorHover: "#FAFAFA",
    },
    rectBig: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#22252A",
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "#22252A",
      bgActive: "#22252A",
      borderIdle: brandColors.main,
      borderHover: "#22252A",
      borderActive: "#22252A",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#FAFAFA",
    },
    rectSmallDisabled: {
      bgIdle: "#D9D9D9",
      bgHover: "#FFFFFF",
      bgActive: brandColors.main,
      borderIdle: "#D9D9D9",
      borderHover: "#23262A",
      borderActive: brandColors.main,
      fontColorIdle: "#23262A",
      fontColorHover: "#23262A",
    },
  },
  themeSwitch: {
    bgOff: "#fafafa",
    bgOn: brandColors.main,
  },
};

export const darkTheme = {
  breakpoints,
  bg: {
    main: "#1E1F28",
    secondary: "#8BAA36",
    form: "#FAFAFA",
  },
  link: {
    ...lightTheme.link,
  },
  startPage: {
    ...lightTheme.startPage,
  },
  authForm: {
    ...lightTheme.authForm,
  },
  logo: {
    header: {
      bg: brandColors.main,
      icon: brandColors.secondary,
    },
    footer: {
      bg: brandColors.accent,
      icon: brandColors.main,
    },
  },
  icon: {
    social: {
      fill: "#FAFAFA",
      fillHover: "#1E1F28",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "#23262A",
      placeholder: "#bdbdbd",
      borderIdle: "#f0f0f0",
      borderFocus: "#0000005e",
    },
  },
  navigation: {
    font: typography.family.primary,
    colorIdle: "#FAFAFA",
    colorHover: brandColors.main,
    icon: "#fafafa",
  },
  button: {
    font: typography.family.primary,
    base: {
      bgIdle: brandColors.main,
      bgHover: "#22252A",
      bgActive: "#2c3036",
      borderIdle: brandColors.main,
      borderHover: "#22252A",
      borderActive: "#2c3036",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#FAFAFA",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "#FAFAFA",
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#FAFAFA",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#22252A",
      fontColorHover: "#FAFAFA",
    },
    rectBig: {
      bgIdle: "#1d2024",
      bgHover: "#1d2024",
      bgActive: "#2c3036",
      borderIdle: "#1d2024",
      borderHover: "#1d2024",
      borderActive: "#2c3036",
      fontColorIdle: "#FAFAFA",
      fontColorHover: brandColors.main,
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "#22252A",
      bgActive: "#22252A",
      borderIdle: brandColors.main,
      borderHover: "#22252A",
      borderActive: "#22252A",
      fontColorIdle: "#FAFAFA",
      fontColorHover: "#FAFAFA",
    },
    rectSmallDisabled: {
      bgIdle: "#D9D9D9",
      bgHover: "#FFFFFF",
      bgActive: brandColors.main,
      borderIdle: "#D9D9D9",
      borderHover: "#23262A",
      borderActive: brandColors.main,
      fontColorIdle: "#23262A",
      fontColorHover: "#23262A",
    },
  },
  themeSwitch: {
    ...lightTheme.themeSwitch,
  },
};
