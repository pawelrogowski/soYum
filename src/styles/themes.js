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
  main: "rgba(112, 153, 29,1)",
  secondary: "rgba(250, 250, 250, 1)",
  accent: "rgba(235, 243, 212, 1)",
};

export const lightTheme = {
  focusOutline: "#000",
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  heading: {
    color: "rgba(0, 24, 51, 1)",
  },
  hero: {
    text: "rgba(22, 24, 26, 1)",
    bgDecoration: "rgba(234, 243, 214, 1)",
  },
  card: {
    bg: "rgba(250, 250, 250, 1)",
    borderIdle: "rgba(250, 250, 250, 1)",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "rgba(255, 255, 255, 1)",
      textIdle: "rgba(62, 68, 98, 1)",
      textActive: brandColors.main,
      borderIdle: "rgba(250, 250, 250, 1)",
      borderActive: brandColors.main,
    },
  },
  cardGallery: {
    buttonBgIdle: "transparent",
    buttonBgActive: brandColors.main,
    buttonBorderIdle: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextIdle: "rgba(22, 24, 26, 1)",
    buttonTextActive: "rgba(250, 250, 250, 1)",
  },
  callToAction: {
    bg: "rgba(255, 255, 255, 1)",
    textHightlight: brandColors.main,
    text: "rgba(62, 68, 98, 1)",
    link: {
      textIdle: "rgba(62, 68, 98, 1)",
      textActive: brandColors.main,
    },
  },
  bg: {
    main: "rgba(250, 250, 250, 1)",
    secondary: "rgba(19, 20, 24, 1)",
    form: "rgba(22, 24, 26, 1)",
    footer: "rgba(22, 24, 26, 1)",
  },
  link: {
    authNav: "rgba(250, 250, 250, 1)",
    authNavActive: brandColors.main,
    navFooter: brandColors.main,
  },
  startPage: {
    header: "rgba(250, 250, 250, 1)",
    description: "rgba(250, 250, 250, 1)",
    registerButton: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "rgba(116, 141, 46, 1)",
      borderIdle: brandColors.main,
      borderHover: "rgba(250, 250, 250, 1)",
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    signinButton: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "rgba(116, 141, 46, 1)",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: "rgba(250, 250, 250, 1)",
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
  },
  authForm: {
    font: typography.family.primary,
    header: "rgba(250, 250, 250, 1)",
    bg: "rgba(22, 24, 26, 1)",
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "transparent",
      fontIdle: "rgba(255, 255, 255, 0.8)",
      fontActive: "rgba(255, 255, 255, 1)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgba(255, 255, 255, 1)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgba(255, 255, 255, 1)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgba(246, 194, 62, 1)",
      correct: "rgba(60, 188, 129, 1)",
    },
    button: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "rgba(116, 141, 46, 1)",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(22, 24, 26, 1)",
    },
  },
  newsletterForm: {
    font: typography.family.primary,
    header: "rgba(250, 250, 250, 1)",
    bg: "rgba(22, 24, 26, 1)",
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "transparent",
      fontIdle: "rgba(255, 255, 255, 0.8)",
      fontActive: "rgba(255, 255, 255, 1)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgba(255, 255, 255, 1)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgba(255, 255, 255, 1)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgba(246, 194, 62, 1)",
      correct: "rgba(60, 188, 129, 1)",
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
      fillHover: "rgba(250, 250, 250, 1)",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "rgba(35, 38, 42, 1)",
      background: "rgba(255, 255, 255, 1)",
      placeholder: "rgba(189, 189, 189, 1)",
      borderIdle: "rgba(240, 240, 240, 1)",
      borderFocus: "rgba(240, 240, 240, 1)",
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
    colorIdle: "rgba(35, 38, 42, 1)",
    colorHover: brandColors.main,
    icon: "rgba(35, 38, 42, 1)",
    blend: "initial",
    mobile: {
      font: typography.family.primary,
      colorIdle: "rgba(250, 250, 250, 1)",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "rgba(250, 250, 250, 1)",
      colorHover: brandColors.main,
    },
  },
  button: {
    font: typography.family.primary,
    base: {
      bgIdle: "rgba(22, 24, 26, 1)",
      bgHover: brandColors.main,
      bgActive: "rgba(116, 141, 46, 1)",
      borderIdle: "rgba(22, 24, 26, 1)",
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(22, 24, 26, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
      fontColorActive: "rgba(22, 24, 26, 1)",
    },
    rectBig: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "rgba(116, 141, 46, 1)",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(22, 24, 26, 1)",
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "rgba(22, 24, 26, 1)",
      bgActive: "rgba(22, 24, 26, 1)",
      borderIdle: brandColors.main,
      borderHover: "rgba(22, 24, 26, 1)",
      borderActive: "rgba(22, 24, 26, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    rectSmallDisabled: {
      bgIdle: "rgba(217, 217, 217, 1)",
      bgHover: "rgba(255, 255, 255, 1)",
      bgActive: brandColors.main,
      borderIdle: "rgba(217, 217, 217, 1)",
      borderHover: "rgba(35, 38, 42, 1)",
      borderActive: brandColors.main,
      fontColorIdle: "rgba(35, 38, 42, 1)",
      fontColorHover: "rgba(35, 38, 42, 1)",
    },
  },
  themeSwitch: {
    bgOff: "rgba(250, 250, 250, 1)",
    bgOn: brandColors.main,
  },
  userAvatar: {
    fontIdle: "rgba(22, 24, 26, 1)",
    fontAlternativeIdle: "rgba(22, 24, 26, 1)",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "initial",
  },
  mobileMenu: {
    bg: "linear-gradient(200deg, rgba(235,243,212,1) 0%, rgba(235,243,212,1) 100%)",
    strokeIdle: "rgba(22, 24, 26, 1)",
    strokeHomeMobile: "rgba(22, 24, 26, 1)",
    strokeHomeTablet: "rgba(22, 24, 26, 1)",
    strokeRecipeMobile: "rgba(22, 24, 26, 1)",
    strokeRecipeTablet: "rgba(22, 24, 26, 1)",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "initial",
  },
  footer: {
    legalText: "rgba(142, 143, 146, 1)",
    logoTextIdle: "rgba(250, 250, 250, 1)",
    logoTextActive: brandColors.main,
    descriptionText: "rgba(250, 250, 250, 1)",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "rgba(19, 20, 24, 1)",
  },
  notFound: {
    text: "rgba(0, 0, 0, 0.3)",
  },
  editProfilePopup: {
    bg: "rgba(255, 255, 255, 1)",
    border: brandColors.main,
    text: "rgba(35, 38, 42, 1)",
    icon: "rgba(35, 38, 42, 1)",
    iconActive: brandColors.main,
    textActive: brandColors.main,
    button: {
      text: "rgba(250, 250, 250, 1)",
      icon: "rgba(250, 250, 250, 1)",
      iconActive: brandColors.main,
      textActive: brandColors.main,
    },
  },
  categoryFilter: {
    textIdle: "rgb(102 102 102)",
    textActive: brandColors.main,
    decorationIdle: "rgba(188, 188, 188, 1)",
    decorationActive: brandColors.main,
    buttonIdle: "rgba(129, 135, 143, 1)",
    buttonDisabled: "rgba(188, 188, 188, 1)",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "rgba(255, 255, 255, 1)",
    bgImage: brandColors.main,
    fontHead: "rgba(62, 68, 98, 1)",
    fontArticle: "rgba(35, 38, 42, 1)",
    boxShadow: "rgba(135, 135, 135, 0.1)",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "rgba(22, 24, 26, 1)",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        iconIdle: "rgba(250, 250, 250, 1)",
        iconActive: "rgba(231, 74, 59, 1)",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "rgba(22, 24, 26, 1)",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        textIdle: "rgba(250, 250, 250, 1)",
        textActive: brandColors.main,
      },
    },
  },
  paginationFilter: {
    bg: "rgba(250, 250, 250, 1)",
    boxShadow: "rgba(135, 135, 135, 0.2)",
    switchLinkIdle: "rgba(0, 0, 0, 0.4) ",
    switchLinkActive: brandColors.main,
    switchLinkDisabled: "rgba(217, 217, 217, 1)",
    pageLinkBgIdle: "none",
    pageLinkBgActive: brandColors.main,
    pageLinkBgCurrent: "rgba(235, 243, 212, 1)",
    pageLinkFontCurrent: "rgba(22, 24, 26, 1)",
    pageLinkFontIdle: "rgba(22, 24, 26, 1)",
    pageLinkFontActive: "rgba(250, 250, 250, 1)",
  },
  logoutModal: {
    bg: "rgba(250, 250, 250, 1)",
    iconIdle: "rgba(35, 38, 42, 1)",
    iconActive: brandColors.main,
    text: "rgba(35, 38, 42, 1)",
    buttons: {
      logoutBgIdle: brandColors.main,
      logoutBgActive: "rgba(35, 38, 42, 1)",
      logoutBorderIdle: brandColors.main,
      logoutBorderActive: brandColors.main,
      logoutTextIdle: "rgba(250, 250, 250, 1)",
      logoutTextActive: brandColors.main,

      cancelBgIdle: "rgba(217, 217, 217, 1)",
      cancelBgActive: "rgba(35, 38, 42, 1)",
      cancelBorderIdle: "rgba(217, 217, 217, 1)",
      cancelBorderActive: brandColors.main,
      cancelTextIdle: "rgba(35, 38, 42, 1)",
      cancelTextActive: brandColors.main,
    },
  },
  editUserModal: {
    bg: "rgba(250, 250, 250, 1)",
    backdrop: "rgba(0, 0, 0, 0.8)",
    iconIdle: "rgba(35, 38, 42, 1)",
    iconActive: brandColors.main,
  },
  userUpdateForm: {
    img: {
      bg: "lightgrey",
      boxShadow: "rgba(0, 0, 0, 0.9)",
      buttonBgIdle: brandColors.main,
      buttonBgActive: "rgba(22, 24, 26, 1)",
      iconIdle: "rgba(250, 250, 250, 1)",
      iconActive: brandColors.main,
    },
    input: {
      bgIdle: "transparent",
      bgActive: "transparent",
      bgDisabled: "transparent",
      borderIdle: "rgba(0,0,0,0.1)",
      borderActive: "rgba(0,0,0,0.7)",
      borderDisabled: "rgba(0,0,0,0.05)",
      iconUserIdle: "rgba(35, 38, 42, 1)",
      iconUserActive: "rgba(35, 38, 42, 1)",
      iconUserDisabled: "rgba(35, 38, 42, 1)73",
      iconEditIdle: "rgba(35, 38, 42, 1)",
      iconEditActive: brandColors.main,
      textIdle: "rgba(35, 38, 42, 1)",
      textActive: "rgba(35, 38, 42, 1)",
      textDisabled: "rgba(35, 38, 42, 1)73",
    },
    button: {
      bgIdle: brandColors.main,
      bgActive: "rgba(35, 38, 42, 1)",
      bgDisabled: "rgba(217, 217, 217, 1)",
      borderIdle: brandColors.main,
      borderActive: "rgba(35, 38, 42, 1)",
      borderDisabled: "rgba(217, 217, 217, 1)",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      textDisabled: "rgba(35, 38, 42, 1)",
    },
  },
  recipeTextInput: {
    borderIdle: "rgba(224, 224, 224, 1)",
    borderActive: brandColors.main,
    font: "rgba(0, 0, 0, 1)",
    fontPlaceholder: "rgba(0, 0, 0, 0.3) ",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(250, 250, 250, 1)",
  },
  select: {
    bg: "rgba(255, 255, 255, 1)",
    textIdle: "rgba(22, 24, 26, 1)",
    textActive: brandColors.main,
    textPlaceholder: "rgba(0, 0, 0, 0.3) ",
    iconIdle: "rgba(22, 24, 26, 1)",
    iconActive: brandColors.main,
    iconRemove: "rgba(231, 74, 59, 1)",
    borderIdle: "rgba(224, 224, 224, 1)",
    borderActive: brandColors.main,
    accent: brandColors.main,
    scrollbarBg: "rgba(255, 255, 255, 1)",
    scrollbarThumb: brandColors.main,
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(250, 250, 250, 1)",
    colorTextMenuIdle: "rgba(0, 0, 0, 0.5)",
    colorTextMenuActive: brandColors.main,
    colorBorderSearch: "transparent",
    ingredient: {
      bg: "rgba(245, 245, 245, 1)",
      borderIdle: "rgba(224, 224, 224, 1)",
      borderActive: brandColors.main,
    },
  },
  counter: {
    textIdle: "rgba(51, 51, 51, 1)",
    textActive: brandColors.main,
    iconIdle: "rgba(190, 190, 190, 1)",
    iconActive: brandColors.main,
    iconDisabled: "rgba(229, 229, 229, 1)",
    border: "rgba(190, 190, 190, 1)",
  },
  recipePreparationTextArea: {
    bg: "rgba(245, 245, 245, 1)",
    borderIdle: "rgba(224, 224, 224, 1)",
    borderActive: brandColors.main,
    textIdle: "rgba(35, 38, 42, 1)",
    textPlaceholder: "rgba(123, 123, 123, 1)",
    buttonBgRemoveActive: "rgba(231, 74, 59, 1)",
    buttonBgIdle: "rgba(250, 250, 250, 1)",
    buttonBgActive: brandColors.main,
    buttonBgDisabled: "rgba(250, 250, 250, 1)",
    buttonBorderIdle: "rgba(224, 224, 224, 1)",
    buttonBorderActive: brandColors.main,
    buttonBorderDisabled: "rgba(224, 224, 224, 1)",
  },
  recipePreparationStepsPreview: {
    text: "rgba(50, 50, 50, 1)",
    numberDecoration: brandColors.main,
    numberDecorationText: "rgba(250, 250, 250, 1)",
    buttonBgEditIdle: "rgba(246, 194, 62, 1)",
    buttonBgEditActive: "rgba(35, 35, 35, 1)",
    buttonBgRemoveIdle: "rgba(231, 74, 59, 1)",
    buttonBgRemoveActive: "rgba(35, 35, 35, 1)",
    iconEditIdle: "rgba(250, 250, 250, 1)",
    iconEditActive: "rgba(246, 194, 62, 1)",
    iconRemoveIdle: "rgba(250, 250, 250, 1)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
  },
  popularCard: {
    bgCard: "transparent",
    bgImage: "transparent",
    fontHead: "rgba(62, 68, 98, 1)",
    fontArticle: "rgba(35, 38, 42, 1)",
    borderIdle: "rgba(227, 227, 227, 1)",
    borderActive: brandColors.main,
  },
  followUs: {
    iconIdle: brandColors.main,
    iconActive: "rgba(19, 20, 24, 1)",
  },
  addRecipeForm: {
    buttonBgIdle: "rgba(22, 24, 26, 1)",
    buttonBorderIdle: "rgba(22, 24, 26, 1)",
    buttonTextIdle: "rgba(250, 250, 250, 1)",
    buttonBgActive: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextActive: "rgba(250, 250, 250, 1)",
  },
  noItemFound: {
    fontIdle: "rgba(0, 0, 0, 0.5)",
  },
  shoppingList: {
    fontHead: "rgba(250, 250, 250, 1)",
    fontProduct: "rgba(62, 68, 98, 1)",
    fontAmount: "rgba(250, 250, 250, 1)",
    iconRemoveIdle: "rgba(62, 68, 98, 1)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "rgba(235, 243, 212, 1)",
    borderItemIdle: "rgba(224, 224, 224, 1)",
    borderItemActive: brandColors.main,
  },
  productList: {
    fontHead: "rgba(250, 250, 250, 1)",
    fontProduct: "rgba(62, 68, 98, 1)",
    fontAmount: "rgba(250, 250, 250, 1)",
    iconRemoveIdle: "rgba(62, 68, 98, 1)",
    iconRemoveActive: brandColors.main,
    bgRow: "rgba(235, 243, 212, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "rgba(235, 243, 212, 1)",
    checkbox: "rgba(180, 184, 169, 1)",
  },
};

export const darkTheme = {
  focusOutline: "#fff",
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  bg: {
    main: "rgba(19, 20, 24, 1)",
    secondary: brandColors.main,
    form: "rgba(22, 24, 26, 1)",
    footer: brandColors.main,
  },
  hero: {
    text: "rgba(250, 250, 250, 1)",
    bgDecoration: "rgba(234, 243, 214, 1)",
  },
  card: {
    bg: "rgba(22, 24, 26, 1)",
    borderIdle: "rgba(0, 0, 0, 0.3)",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "rgba(22, 24, 26, 1)",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      borderIdle: "rgba(0, 0, 0, 0.3)",
      borderActive: brandColors.main,
    },
  },
  cardGallery: {
    buttonBgIdle: "transparent",
    buttonBgActive: brandColors.main,
    buttonBorderIdle: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextIdle: "rgba(250, 250, 250, 1)",
    buttonTextActive: "rgba(22, 24, 26, 1)",
  },
  callToAction: {
    bg: "rgba(22, 24, 26, 1)",
    textHightlight: brandColors.main,
    text: "rgba(250, 250, 250, 1)",
    link: {
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
    },
  },
  heading: {
    color: "rgba(250, 250, 250, 1)",
  },
  link: {
    ...lightTheme.link,
    navFooter: "rgba(35, 38, 42, 1)",
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
      fontIdle: "rgba(255, 255, 255, 0.8)",
      fontActive: "rgba(35, 38, 42, 1)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgba(35, 38, 42, 1)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgba(255, 255, 255, 1)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgba(246, 194, 62, 1)",
      correct: "rgba(60, 188, 129, 1)",
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
      fill: "rgba(250, 250, 250, 1)",
      fillHover: "rgba(22, 24, 26, 1)",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "rgba(250, 250, 250, 1)",
      background: "rgba(19, 20, 24, 1)",
      placeholder: "rgba(140, 140, 145, 1)",
      borderIdle: "rgba(140, 140, 145, 1)",
      borderFocus: "rgba(140, 140, 145, 1)",
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
    colorIdle: "rgba(250, 250, 250, 1)",
    colorHover: brandColors.main,
    icon: "rgba(250, 250, 250, 1)",
    blend: "difference",
    mobile: {
      colorIdle: "rgba(250, 250, 250, 1)",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "rgba(250, 250, 250, 1)",
      colorHover: "rgba(35, 38, 42, 1)",
    },
  },
  button: {
    font: typography.family.primary,
    base: {
      bgIdle: brandColors.main,
      bgHover: "rgba(22, 24, 26, 1)",
      bgActive: "rgba(44, 48, 54, 1)",
      borderIdle: brandColors.main,
      borderHover: "rgba(22, 24, 26, 1)",
      borderActive: "rgba(44, 48, 54, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgba(116, 141, 46, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
      fontColorActive: "rgba(250, 250, 250, 1)",
    },
    rectBig: {
      bgIdle: "rgba(29, 32, 36, 1)",
      bgHover: "rgba(29, 32, 36, 1)",
      bgActive: "rgba(44, 48, 54, 1)",
      borderIdle: "rgba(29, 32, 36, 1)",
      borderHover: "rgba(29, 32, 36, 1)",
      borderActive: "rgba(44, 48, 54, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "rgba(22, 24, 26, 1)",
      bgActive: "rgba(22, 24, 26, 1)",
      borderIdle: brandColors.main,
      borderHover: "rgba(22, 24, 26, 1)",
      borderActive: "rgba(22, 24, 26, 1)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    rectSmallDisabled: {
      bgIdle: "rgba(217, 217, 217, 1)",
      bgHover: "rgba(255, 255, 255, 1)",
      bgActive: brandColors.main,
      borderIdle: "rgba(217, 217, 217, 1)",
      borderHover: "rgba(35, 38, 42, 1)",
      borderActive: brandColors.main,
      fontColorIdle: "rgba(35, 38, 42, 1)",
      fontColorHover: "rgba(35, 38, 42, 1)",
    },
  },
  themeSwitch: {
    ...lightTheme.themeSwitch,
  },
  userAvatar: {
    fontIdle: "rgba(250, 250, 250, 1)",
    fontAlternativeIdle: "rgba(22, 24, 26, 1)",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "difference",
  },
  mobileMenu: {
    bg: "rgba(19, 20, 24, 1)",
    strokeIdle: "rgba(250, 250, 250, 1)",
    strokeHomeMobile: "rgba(250, 250, 250, 1)",
    strokeHomeTablet: "rgba(22, 24, 26, 1)",
    strokeRecipeMobile: "rgba(22, 24, 26, 1)",
    strokeRecipeTablet: "rgba(22, 24, 26, 1)",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
  },
  footer: {
    logoTextIdle: "rgba(250, 250, 250, 1)",
    logoTextActive: "rgba(22, 24, 26, 1)",
    descriptionText: "rgba(250, 250, 250, 1)",
    legalText: "rgba(142, 143, 146, 1)",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "rgba(250, 250, 250, 1)",
  },
  notFound: {
    text: "rgba(250, 250, 250, 1)",
  },
  editProfilePopup: {
    bg: "rgba(19, 20, 24, 1)",
    border: brandColors.main,
    text: "rgba(250, 250, 250, 1)",
    icon: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    textActive: brandColors.main,
    button: {
      text: "rgba(250, 250, 250, 1)",
      icon: "rgba(250, 250, 250, 1)",
      iconActive: brandColors.main,
      textActive: brandColors.main,
    },
  },
  categoryFilter: {
    textIdle: "rgba(162, 162, 166, 1)",
    textActive: brandColors.main,
    decorationIdle: "rgba(162, 162, 166, 0.5)",
    decorationActive: brandColors.main,
    buttonIdle: "rgba(162, 162, 166, 1)",
    buttonDisabled: "rgba(162, 162, 166, 0.3)",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "rgba(22, 24, 26, 1)",
    bgImage: brandColors.main,
    fontHead: "rgba(250, 250, 250, 1)",
    fontArticle: "rgba(250, 250, 250, 0.60)",
    boxShadow: "transparent",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "rgba(22, 24, 26, 1)",
        borderIdle: brandColors.main,
        borderActive: "rgba(22, 24, 26, 1)",
        iconIdle: "rgba(250, 250, 250, 1)",
        iconActive: "rgba(231, 74, 59, 1)",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "rgba(22, 24, 26, 1)",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        textIdle: "rgba(250, 250, 250, 1)",
        textActive: brandColors.main,
      },
    },
  },
  paginationFilter: {
    bg: "rgba(22, 24, 26, 1)",
    boxShadow: "rgba(31, 30, 30, 0.20)",
    switchLinkIdle: "rgba(250, 250, 250, 0.60)",
    switchLinkActive: brandColors.main,
    switchLinkDisabled: "rgba(250, 250, 250, 0.1)",
    pageLinkBgIdle: "none",
    pageLinkBgActive: brandColors.main,
    pageLinkBgCurrent: brandColors.main,
    pageLinkFontCurrent: "rgba(250, 250, 250, 1)",
    pageLinkFontIdle: "rgba(250, 250, 250, 0.60)",
    pageLinkFontActive: "rgba(250, 250, 250, 1)",
  },
  logoutModal: {
    bg: "rgba(22, 24, 26, 1)",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    text: "rgba(250, 250, 250, 1)",
    buttons: {
      logoutBgIdle: brandColors.main,
      logoutBgActive: "rgba(35, 38, 42, 1)",
      logoutBorderIdle: brandColors.main,
      logoutBorderActive: brandColors.main,
      logoutTextIdle: "rgba(250, 250, 250, 1)",
      logoutTextActive: brandColors.main,

      cancelBgIdle: "rgba(217, 217, 217, 1)",
      cancelBgActive: "rgba(35, 38, 42, 1)",
      cancelBorderIdle: "rgba(217, 217, 217, 1)",
      cancelBorderActive: brandColors.main,
      cancelTextIdle: "rgba(35, 38, 42, 1)",
      cancelTextActive: brandColors.main,
    },
  },
  editUserModal: {
    backdrop: "rgba(0, 0, 0, 0.8)",
    bg: "rgba(22, 24, 26, 1)",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
  },
  userUpdateForm: {
    img: {
      bg: "lightgrey",
      boxShadow: "rgba(255, 255, 255, 0.9)",
      buttonBgIdle: brandColors.main,
      buttonBgActive: "rgba(22, 24, 26, 1)",
      iconIdle: "rgba(250, 250, 250, 1)",
      iconActive: brandColors.main,
    },
    input: {
      bgIdle: "transparent",
      bgActive: "transparent",
      bgDisabled: "transparent",
      borderIdle: "rgba(255,255,255,0.4)",
      borderActive: "rgba(250, 250, 250, 1)",
      borderDisabled: "rgba(255,255,255,0.2)",
      iconUserIdle: "rgba(250, 250, 250, 1)",
      iconUserActive: "rgba(250, 250, 250, 1)",
      iconUserDisabled: "rgba(250, 250, 250, 1)",
      iconEditIdle: "rgba(250, 250, 250, 1)",
      iconEditActive: brandColors.main,
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: "rgba(250, 250, 250, 1)",
      textDisabled: "rgba(250, 250, 250, 1)",
    },
    button: {
      bgIdle: brandColors.main,
      bgActive: "rgba(35, 38, 42, 1)",
      bgDisabled: "rgba(217, 217, 217, 1)",
      borderIdle: brandColors.main,
      borderActive: "rgba(35, 38, 42, 1)",
      borderDisabled: "rgba(217, 217, 217, 1)",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      textDisabled: "rgba(35, 38, 42, 1)",
    },
  },
  recipeTextInput: {
    borderIdle: "rgba(255, 255, 255, 0.2)",
    borderActive: brandColors.main,
    font: "rgba(250, 250, 250, 1)",
    fontPlaceholder: "rgba(123, 123, 123, 1)",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(19, 20, 24, 1)",
  },
  select: {
    bg: brandColors.main,
    textIdle: "rgba(250, 250, 250, 1)",
    textActive: "rgba(250, 250, 250, 1)",
    textPlaceholder: "rgba(123, 123, 123, 1)",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    iconRemove: "rgba(231, 74, 59, 1)",
    borderIdle: "rgba(255, 255, 255, 0.2)",
    borderActive: brandColors.main,
    accent: brandColors.main,
    scrollbarBg: brandColors.main,
    scrollbarThumb: "rgba(22, 24, 26, 1)",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(19, 20, 24, 1)",
    colorTextMenuIdle: "rgba(250, 250, 250, 0.5)",
    colorTextMenuActive: "rgba(250, 250, 250, 1)",
    colorBorderSearch: "rgba(250, 250, 250, 0.20)",
    ingredient: {
      bg: "transparent",
      borderIdle: "rgba(74, 75, 82, 1)",
      borderActive: brandColors.main,
    },
  },
  counter: {
    textIdle: "rgba(250, 250, 250, 1)",
    textActive: brandColors.main,
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    iconDisabled: "rgba(76, 76, 76, 1)",
    border: "rgba(255, 255, 255, 0.2)",
  },
  recipePreparationTextArea: {
    bg: "transparent",
    borderIdle: "rgba(74, 75, 82, 1)",
    borderActive: brandColors.main,
    textIdle: "rgba(250, 250, 250, 1)",
    textPlaceholder: "rgba(250, 250, 250, 0.6)",
    buttonBgRemoveActive: "rgba(231, 74, 59, 1)",
    buttonBgIdle: "rgba(19, 20, 24, 1)",
    buttonBgActive: brandColors.main,
    buttonBgDisabled: "rgba(19, 20, 24, 1)",
    buttonBorderIdle: "rgba(224, 224, 224, 1)",
    buttonBorderActive: brandColors.main,
    buttonBorderDisabled: "rgba(224, 224, 224, 1)",
  },
  recipePreparationStepsPreview: {
    text: "rgba(250, 250, 250, 1)",
    numberDecoration: brandColors.main,
    numberDecorationText: "rgba(19, 20, 24, 1)",
    buttonBgEditIdle: "rgba(246, 194, 62, 1)",
    buttonBgEditActive: "rgba(35, 35, 35, 1)",
    buttonBgRemoveIdle: "rgba(231, 74, 59, 1)",
    buttonBgRemoveActive: "rgba(35, 35, 35, 1)",
    iconEditIdle: "rgba(19, 20, 24, 1)",
    iconEditActive: "rgba(246, 194, 62, 1)",
    iconRemoveIdle: "rgba(19, 20, 24, 1)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
  },
  popularCard: {
    bgCard: "transparent",
    bgImage: "transparent",
    fontHead: "rgba(250, 250, 250, 1)",
    fontArticle: "rgba(250, 250, 250, 0.60)",
    borderIdle: "rgba(74, 75, 82, 1)",
    borderActive: brandColors.main,
  },
  followUs: {
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
  },
  addRecipeForm: {
    buttonBgIdle: brandColors.main,
    buttonBorderIdle: brandColors.main,
    buttonTextIdle: "rgba(250, 250, 250, 1)",
    buttonBgActive: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextActive: "rgba(250, 250, 250, 1)",
  },
  noItemFound: {
    fontIdle: "rgba(250, 250, 250, 0.5)",
  },
  shoppingList: {
    fontHead: "rgba(250, 250, 250, 1)",
    fontProduct: "rgba(250, 250, 250, 1)",
    fontAmount: "rgba(250, 250, 250, 1)",
    iconRemoveIdle: "rgba(250, 250, 250, 1)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "rgba(22, 24, 26, 1)",
    borderItemIdle: "rgba(96, 97, 103, 1)",
    borderItemActive: brandColors.main,
  },
  productList: {
    fontHead: "rgba(250, 250, 250, 1)",
    fontProduct: "rgba(250, 250, 250, 1)",
    fontAmount: "rgba(250, 250, 250, 1)",
    iconRemoveActive: brandColors.main,
    bgRow: "rgba(22, 24, 26, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "rgba(22, 24, 26, 1)",
    checkbox: "rgba(180, 184, 169, 1)",
  },
};
