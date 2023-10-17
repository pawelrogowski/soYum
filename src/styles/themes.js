export const breakpoints = {
  mobile: "320px",
  mobileMax: "767px",
  tablet: "768px",
  tabletMax: "1023px",
  desktop: "1024px",
  maxContent: "1240px",
  minContent: "320px",
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
  secondary: "#fafafa",
  accent: "#EBF3D4",
};

export const lightTheme = {
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  heading: {
    color: "#001833",
  },
  hero: {
    text: "#22252a",
    bgDecoration: "#eaf3d6",
  },
  card: {
    bg: "#fafafa",
    borderIdle: "#fafafa",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "#ffffff",
      textIdle: "#3E4462",
      textActive: brandColors.main,
      borderIdle: "#fafafa",
      borderActive: brandColors.main,
    },
  },
  callToAction: {
    bg: "#fff",
    textHightlight: brandColors.main,
    text: "#3E4462",
    link: {
      textIdle: "#3e4462",
      textActive: brandColors.main,
    },
  },
  bg: {
    main: "#fafafa",
    secondary: "#1E1F28",
    form: "#22252A",
    footer: "#22252A",
  },
  link: {
    authNav: "#fafafa",
    authNavActive: brandColors.main,
    navFooter: brandColors.main,
  },
  startPage: {
    header: "#fafafa",
    description: "#fafafa",
    registerButton: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: brandColors.main,
      borderHover: "#fafafa",
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
    },
    signinButton: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "#748d2e",
      borderIdle: "#fafafa",
      borderHover: "#fafafa",
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
      fontColorHover: brandColors.main,
    },
  },
  authForm: {
    font: typography.family.primary,
    header: "#fafafa",
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
      fontColorIdle: "#fafafa",
      fontColorHover: "#22252A",
    },
  },
  newsletterForm: {
    font: typography.family.primary,
    header: "#fafafa",
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
      fillHover: "#fafafa",
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
      button: {
        bgIdle: brandColors.main,
        bgActive: brandColors.main,
        borderIdle: brandColors.main,
        borderActive: brandColors.main,
      },
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
      colorIdle: "#fafafa",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "#fafafa",
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
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "#fafafa",
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
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
      fontColorHover: "#fafafa",
      fontColorActive: "#22252A",
    },
    rectBig: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "#748d2e",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
      fontColorHover: "#22252A",
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "#22252A",
      bgActive: "#22252A",
      borderIdle: brandColors.main,
      borderHover: "#22252A",
      borderActive: "#22252A",
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
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
    logoTextIdle: "#fafafa",
    logoTextActive: brandColors.main,
    descriptionText: "#fafafa",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "#1e1f28",
  },
  notFound: {
    text: "#000",
  },
  editProfilePopup: {
    bg: "#fff",
    border: brandColors.main,
    text: "#23262a",
    icon: "#23262a",
    iconActive: brandColors.main,
    textActive: brandColors.main,
    button: {
      text: "#fafafa",
      icon: "#fafafa",
      iconActive: brandColors.main,
      textActive: brandColors.main,
    },
  },
  categoryFilter: {
    textIdle: "#E0E0E0",
    textActive: brandColors.main,
    decorationIdle: "#E0E0E0",
    decorationActive: brandColors.main,
    buttonIdle: "#81878F",
    buttonDisabled: "#E0E0E0",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "#fff",
    bgImage: brandColors.main,
    fontHead: "#3E4462",
    fontArticle: "#23262A",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "#22252A",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        iconIdle: "#fafafa",
        iconActive: "red",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "#22252A",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        textIdle: "#fafafa",
        textActive: brandColors.main,
      },
    },
  },
  paginationFilter: {
    bg: "#fafafa",
    boxShadow: "rgba(135, 135, 135, 0.2)",
    switchLinkIdle: "#0000006b",
    switchLinkActive: brandColors.main,
    switchLinkDisabled: "#d9d9d9",
    pageLinkBgIdle: "none",
    pageLinkBgActive: brandColors.main,
    pageLinkBgCurrent: "#ebf3d4",
    pageLinkFontCurrent: "#2A2C36",
    pageLinkFontIdle: "#22252a",
    pageLinkFontActive: "#fafafa",
  },
  logoutModal: {
    bg: "#FAFAFA",
    iconIdle: "#23262A",
    iconActive: brandColors.main,
    text: "#23262A",
    buttons: {
      logoutBgIdle: "#8BAA36",
      logoutBgActive: "#23262A",
      logoutBorderIdle: "#8BAA36",
      logoutBorderActive: "#8BAA36",
      logoutTextIdle: "#fafafa",
      logoutTextActive: "#8BAA36",

      cancelBgIdle: "#D9D9D9",
      cancelBgActive: "#23262A",
      cancelBorderIdle: "#D9D9D9",
      cancelBorderActive: "#8BAA36",
      cancelTextIdle: "#23262A",
      cancelTextActive: "#8BAA36",
    },
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
  card: {
    bg: "#2A2C36",
    borderIdle: "#000",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "#2A2C36",
      textIdle: "#fafafa",
      textActive: brandColors.main,
      borderIdle: "#000",
      borderActive: brandColors.main,
    },
  },
  callToAction: {
    bg: "#2A2C36",
    textHightlight: brandColors.main,
    text: "#fafafa",
    link: {
      textIdle: "#fafafa",
      textActive: brandColors.main,
    },
  },
  heading: {
    color: "#fafafa",
  },
  link: {
    ...lightTheme.link,
    navFooter: "#23262A",
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
      fill: "#fafafa",
      fillHover: "#22252a",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "#fafafa",
      background: "#1e1f28",
      placeholder: "#8c8c91",
      borderIdle: "#8c8c91",
      borderFocus: "#8c8c91",
      button: {
        bgIdle: brandColors.main,
        bgActive: brandColors.main,
        borderIdle: brandColors.main,
        borderActive: brandColors.main,
      },
    },
  },
  navigation: {
    font: typography.family.primary,
    colorIdle: "#fafafa",
    colorHover: brandColors.main,
    icon: "#fafafa",
    blend: "difference",
    mobile: {
      colorIdle: "#fafafa",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "#fafafa",
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
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "#fafafa",
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "#748d2e",
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
      fontColorActive: "#fafafa",
    },
    rectBig: {
      bgIdle: "#1d2024",
      bgHover: "#1d2024",
      bgActive: "#2c3036",
      borderIdle: "#1d2024",
      borderHover: "#1d2024",
      borderActive: "#2c3036",
      fontColorIdle: "#fafafa",
      fontColorHover: brandColors.main,
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "#22252A",
      bgActive: "#22252A",
      borderIdle: brandColors.main,
      borderHover: "#22252A",
      borderActive: "#22252A",
      fontColorIdle: "#fafafa",
      fontColorHover: "#fafafa",
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
    fontIdle: "#fafafa",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "difference",
  },
  mobileMenu: {
    bg: "#1E1F28",
    strokeIdle: "#fafafa",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "difference",
  },
  footer: {
    logoTextIdle: "#fafafa",
    logoTextActive: "#22252a",
    descriptionText: "#fafafa",
    legalText: "#8e8f92",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "#fafafa",
  },
  notFound: {
    text: "#fafafa",
  },
  editProfilePopup: {
    bg: "#1E1F28",
    border: brandColors.main,
    text: "#fafafa",
    icon: "#fafafa",
    iconActive: brandColors.main,
    textActive: brandColors.main,
    button: {
      text: "#fafafa",
      icon: "#fafafa",
      iconActive: brandColors.main,
      textActive: brandColors.main,
    },
  },
  categoryFilter: {
    textIdle: "#A2A2A6",
    textActive: brandColors.main,
    decorationIdle: "rgba(162, 162, 166, 0.5)",
    decorationActive: brandColors.main,
    buttonIdle: "#A2A2A6",
    buttonDisabled: "rgba(162, 162, 166, 0.3)",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "#2A2C36",
    bgImage: brandColors.main,
    fontHead: "#fafafa",
    fontArticle: "rgba(250, 250, 250, 0.60)",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "#22252A",
        borderIdle: brandColors.main,
        borderActive: "#22252A",
        iconIdle: "#fafafa",
        iconActive: "red",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "#22252A",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        textIdle: "#fafafa",
        textActive: brandColors.main,
      },
    },
  },
  paginationFilter: {
    bg: "#2A2C36",
    boxShadow: "rgba(31, 30, 30, 0.20)",
    switchLinkIdle: "rgba(250, 250, 250, 0.60)",
    switchLinkActive: brandColors.main,
    switchLinkDisabled: "rgba(250, 250, 250, 0.1)",
    pageLinkBgIdle: "none",
    pageLinkBgActive: brandColors.main,
    pageLinkBgCurrent: brandColors.main,
    pageLinkFontCurrent: "#fafafa",
    pageLinkFontIdle: "rgba(250, 250, 250, 0.60)",
    pageLinkFontActive: "#fafafa",
  },
  logoutModal: {
    bg: "#2A2C36",
    iconIdle: "#fafafa",
    iconActive: brandColors.main,
    text: "#fafafa",
    buttons: {
      logoutBgIdle: "#8BAA36",
      logoutBgActive: "#23262A",
      logoutBorderIdle: "#8BAA36",
      logoutBorderActive: "#8BAA36",
      logoutTextIdle: "#fafafa",
      logoutTextActive: "#8BAA36",

      cancelBgIdle: "#D9D9D9",
      cancelBgActive: "#23262A",
      cancelBorderIdle: "#D9D9D9",
      cancelBorderActive: "#8BAA36",
      cancelTextIdle: "#23262A",
      cancelTextActive: "#8BAA36",
    },
  },
};
