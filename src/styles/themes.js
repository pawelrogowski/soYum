export const breakpoints = {
  mobile: "320px",
  mobileMax: "767px",
  tablet: "768px",
  tabletMax: "1023px",
  desktop: "1024px",
  maxContent: "1240px",
  minContent: "280px",
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
  brandColors: {
    ...brandColors,
  },
  hero: {
    text: "#22252a",
    bgDecoration: "#eaf3d6",
  },
  bg: {
    main: "#FAFAFA",
    secondary: "#1E1F28",
    form: "#22252A",
    footer: "#22252A",
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
  newsletterForm: {
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
      fill: brandColors.main,
      fillHover: "#FAFAFA",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "#23262A",
      background: "#fff",
      placeholder: "#bdbdbd",
      borderIdle: "#f0f0f0",
      borderFocus: "#f0f0f0",
    },
  },
  navigation: {
    font: typography.family.primary,
    colorIdle: "#23262A",
    colorHover: brandColors.main,
    icon: "#23262A",
    blend: "initial",
    mobile: {
      font: typography.family.primary,
      colorIdle: "#FAFAFA",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "#FAFAFA",
      colorHover: brandColors.main,
    },
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
  userAvatar: {
    fontIdle: "#22252a",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "initial",
  },
  mobileMenu: {
    bg: "linear-gradient(200deg, rgba(235,243,212,1) 0%, rgba(235,243,212,1) 100%)",
    strokeIdle: "#22252A",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "initial",
  },
  footer: {
    legalText: "#8e8f92",
    logoTextIdle: "#FAFAFA",
    logoTextActive: brandColors.main,
    descriptionText: "#FAFAFA",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "#1e1f28",
  },
  notFound: {
    text: "#000",
  },
};

export const darkTheme = {
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  bg: {
    main: "#1E1F28",
    secondary: "#8BAA36",
    form: "#22252A",
    footer: "#8BAA36",
  },
  hero: {
    text: "#fafafa",
    bgDecoration: "#eaf3d6",
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
  newsletterForm: {
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "23262A",
      fontIdle: "#ffffffcc",
      fontActive: "#23262A",
      borderIdle: "#ffffff33",
      borderActive: "#23262A",
      iconIdle: "#ffffffcc",
      iconActive: "#fff",
      error: "#E74A3B",
      warning: "#F6C23E",
      correct: "#3CBC81",
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
      fillHover: "#22252a",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "#FAFAFA",
      background: "#1e1f28",
      placeholder: "#8c8c91",
      borderIdle: "#8c8c91",
      borderFocus: "#8c8c91",
    },
  },
  navigation: {
    font: typography.family.primary,
    colorIdle: "#FAFAFA",
    colorHover: brandColors.main,
    icon: "#fafafa",
    blend: "difference",
    mobile: {
      colorIdle: "#FAFAFA",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "#FAFAFA",
      colorHover: "#23262A",
    },
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
  userAvatar: {
    fontIdle: "#FAFAFA",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "difference",
  },
  mobileMenu: {
    bg: "#1E1F28",
    strokeIdle: "#FAFAFA",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "difference",
  },
  footer: {
    logoTextIdle: "#FAFAFA",
    logoTextActive: "#22252a",
    descriptionText: "#FAFAFA",
    legalText: "#8e8f92",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "#fafafa",
  },
  notFound: {
    text: "#FAFAFA",
  },
};
