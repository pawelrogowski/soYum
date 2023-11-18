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
  main: "rgb(139, 170, 54)",
  secondary: "rgba(250, 250, 250, 1)",
  accent: "#EBF3D4",
};

export const lightTheme = {
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  heading: {
    color: "rgb(0, 24, 51)",
  },
  hero: {
    text: "rgb(34, 37, 42)",
    bgDecoration: "rgb(234, 243, 214)",
  },
  card: {
    bg: "rgba(250, 250, 250, 1)",
    borderIdle: "rgba(250, 250, 250, 1)",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "rgb(255, 255, 255)",
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
    buttonTextIdle: "#22252A",
    buttonTextActive: "#fafafa",
  },
  callToAction: {
    bg: "rgb(255, 255, 255)",
    textHightlight: brandColors.main,
    text: "rgba(62, 68, 98, 1)",
    link: {
      textIdle: "rgba(62, 68, 98, 1)",
      textActive: brandColors.main,
    },
  },
  bg: {
    main: "rgba(250, 250, 250, 1)",
    secondary: "rgb(30, 31, 40)",
    form: "rgb(34, 37, 42)",
    footer: "rgb(34, 37, 42)",
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
      bgActive: "rgb(116, 141, 46)",
      borderIdle: brandColors.main,
      borderHover: "rgba(250, 250, 250, 1)",
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    signinButton: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "rgb(116, 141, 46)",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: "rgba(250, 250, 250, 1)",
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
  },
  authForm: {
    font: typography.family.primary,
    header: "rgba(250, 250, 250, 1)",
    bg: "rgb(42, 44, 54)",
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "transparent",
      fontIdle: "rgba(255, 255, 255, 0.8)",
      fontActive: "rgb(255, 255, 255)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgb(255, 255, 255)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgb(255, 255, 255)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgb(246, 194, 62)",
      correct: "rgb(60, 188, 129)",
    },
    button: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "rgb(116, 141, 46)",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgb(34, 37, 42)",
    },
  },
  newsletterForm: {
    font: typography.family.primary,
    header: "rgba(250, 250, 250, 1)",
    bg: "rgb(42, 44, 54)",
    textInput: {
      font: typography.family.primary,
      bgIdle: "transparent",
      bgActive: "transparent",
      fontIdle: "rgba(255, 255, 255, 0.8)",
      fontActive: "rgb(255, 255, 255)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgb(255, 255, 255)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgb(255, 255, 255)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgb(246, 194, 62)",
      correct: "rgb(60, 188, 129)",
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
      font: "rgb(35, 38, 42)",
      background: "rgb(255, 255, 255)",
      placeholder: "rgb(189, 189, 189)",
      borderIdle: "rgb(240, 240, 240)",
      borderFocus: "rgb(240, 240, 240)",
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
    colorIdle: "rgb(35, 38, 42)",
    colorHover: brandColors.main,
    icon: "rgb(35, 38, 42)",
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
      bgIdle: "rgb(34, 37, 42)",
      bgHover: brandColors.main,
      bgActive: "rgb(116, 141, 46)",
      borderIdle: "rgb(34, 37, 42)",
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgb(34, 37, 42)",
      fontColorHover: "rgba(250, 250, 250, 1)",
      fontColorActive: "rgb(34, 37, 42)",
    },
    rectBig: {
      bgIdle: brandColors.main,
      bgHover: brandColors.main,
      bgActive: "rgb(116, 141, 46)",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgb(34, 37, 42)",
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "rgb(34, 37, 42)",
      bgActive: "rgb(34, 37, 42)",
      borderIdle: brandColors.main,
      borderHover: "rgb(34, 37, 42)",
      borderActive: "rgb(34, 37, 42)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    rectSmallDisabled: {
      bgIdle: "#D9D9D9",
      bgHover: "rgb(255, 255, 255)",
      bgActive: brandColors.main,
      borderIdle: "#D9D9D9",
      borderHover: "rgb(35, 38, 42)",
      borderActive: brandColors.main,
      fontColorIdle: "rgb(35, 38, 42)",
      fontColorHover: "rgb(35, 38, 42)",
    },
  },
  themeSwitch: {
    bgOff: "rgba(250, 250, 250, 1)",
    bgOn: brandColors.main,
  },
  userAvatar: {
    fontIdle: "rgb(34, 37, 42)",
    fontAlternativeIdle: "rgb(34, 37, 42)",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "initial",
  },
  mobileMenu: {
    bg: "linear-gradient(200deg, rgba(235,243,212,1) 0%, rgba(235,243,212,1) 100%)",
    strokeIdle: "rgb(34, 37, 42)",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "initial",
  },
  footer: {
    legalText: "#8e8f92",
    logoTextIdle: "rgba(250, 250, 250, 1)",
    logoTextActive: brandColors.main,
    descriptionText: "rgba(250, 250, 250, 1)",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "rgb(30, 31, 40)",
  },
  notFound: {
    text: "#000",
  },
  editProfilePopup: {
    bg: "rgb(255, 255, 255)",
    border: brandColors.main,
    text: "rgb(35, 38, 42)",
    icon: "rgb(35, 38, 42)",
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
    textIdle: "#bcbcbc",
    textActive: brandColors.main,
    decorationIdle: "#bcbcbc",
    decorationActive: brandColors.main,
    buttonIdle: "#81878F",
    buttonDisabled: "#bcbcbc",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "rgb(255, 255, 255)",
    bgImage: brandColors.main,
    fontHead: "rgba(62, 68, 98, 1)",
    fontArticle: "rgb(35, 38, 42)",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "rgb(34, 37, 42)",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        iconIdle: "rgba(250, 250, 250, 1)",
        iconActive: "rgba(231, 74, 59, 1)",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "rgb(34, 37, 42)",
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
    switchLinkIdle: "#0000006b",
    switchLinkActive: brandColors.main,
    switchLinkDisabled: "#d9d9d9",
    pageLinkBgIdle: "none",
    pageLinkBgActive: brandColors.main,
    pageLinkBgCurrent: "#ebf3d4",
    pageLinkFontCurrent: "rgb(42, 44, 54)",
    pageLinkFontIdle: "rgb(34, 37, 42)",
    pageLinkFontActive: "rgba(250, 250, 250, 1)",
  },
  logoutModal: {
    bg: "rgba(250, 250, 250, 1)",
    iconIdle: "rgb(35, 38, 42)",
    iconActive: brandColors.main,
    text: "rgb(35, 38, 42)",
    buttons: {
      logoutBgIdle: brandColors.main,
      logoutBgActive: "rgb(35, 38, 42)",
      logoutBorderIdle: brandColors.main,
      logoutBorderActive: brandColors.main,
      logoutTextIdle: "rgba(250, 250, 250, 1)",
      logoutTextActive: brandColors.main,

      cancelBgIdle: "#D9D9D9",
      cancelBgActive: "rgb(35, 38, 42)",
      cancelBorderIdle: "#D9D9D9",
      cancelBorderActive: brandColors.main,
      cancelTextIdle: "rgb(35, 38, 42)",
      cancelTextActive: brandColors.main,
    },
  },
  editUserModal: {
    bg: "rgba(250, 250, 250, 1)",
    backdrop: "rgba(0, 0, 0, 0.8)",
    iconIdle: "rgb(35, 38, 42)",
    iconActive: brandColors.main,
  },
  userUpdateForm: {
    img: {
      bg: "lightgrey",
      boxShadow: "rgba(0, 0, 0, 0.9)",
      buttonBgIdle: brandColors.main,
      buttonBgActive: "rgb(34, 37, 42)",
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
      iconUserIdle: "rgb(35, 38, 42)",
      iconUserActive: "rgb(35, 38, 42)",
      iconUserDisabled: "#23262a73",
      iconEditIdle: "rgb(35, 38, 42)",
      iconEditActive: brandColors.main,
      textIdle: "rgb(35, 38, 42)",
      textActive: "rgb(35, 38, 42)",
      textDisabled: "#23262a73",
    },
    button: {
      bgIdle: brandColors.main,
      bgActive: "rgb(35, 38, 42)",
      bgDisabled: "#D9D9D9",
      borderIdle: brandColors.main,
      borderActive: "rgb(35, 38, 42)",
      borderDisabled: "#D9D9D9",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      textDisabled: "rgb(35, 38, 42)",
    },
  },
  recipeTextInput: {
    borderIdle: "rgb(224, 224, 224)",
    borderActive: brandColors.main,
    font: "#000",
    fontPlaceholder: "#0000004D",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(250, 250, 250, 1)",
  },
  select: {
    bg: "rgb(255, 255, 255)",
    textIdle: "rgb(34, 37, 42)",
    textActive: brandColors.main,
    textPlaceholder: "#0000004d",
    iconIdle: "rgb(34, 37, 42)",
    iconActive: brandColors.main,
    iconRemove: "rgba(231, 74, 59, 1)",
    borderIdle: "rgb(224, 224, 224)",
    borderActive: brandColors.main,
    accent: brandColors.main,
    scrollbarBg: "rgb(255, 255, 255)",
    scrollbarThumb: brandColors.main,
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgba(250, 250, 250, 1)",
    colorTextMenuIdle: "rgba(0, 0, 0, 0.5)",
    colorTextMenuActive: brandColors.main,
    colorBorderSearch: "transparent",
    ingredient: {
      bg: "rgb(245, 245, 245)",
      borderIdle: "rgb(224, 224, 224)",
      borderActive: brandColors.main,
    },
  },
  counter: {
    textIdle: "rgb(51, 51, 51)",
    textActive: brandColors.main,
    iconIdle: "rgb(190, 190, 190)",
    iconActive: brandColors.main,
    iconDisabled: "rgb(229, 229, 229)",
    border: "rgb(190, 190, 190)",
  },
  recipePreparationTextArea: {
    bg: "rgb(245, 245, 245)",
    borderIdle: "rgb(224, 224, 224)",
    borderActive: brandColors.main,
    textIdle: "rgb(35, 38, 42)",
    textPlaceholder: "rgb(123, 123, 123)",
    buttonBgRemoveActive: "rgba(231, 74, 59, 1)",
    buttonBgIdle: "rgba(250, 250, 250, 1)",
    buttonBgActive: brandColors.main,
    buttonBgDisabled: "rgba(250, 250, 250, 1)",
    buttonBorderIdle: "rgb(224, 224, 224)",
    buttonBorderActive: brandColors.main,
    buttonBorderDisabled: "rgb(224, 224, 224)",
  },
  recipePreparationStepsPreview: {
    text: "#323232",
    numberDecoration: brandColors.main,
    numberDecorationText: "rgba(250, 250, 250, 1)",
    buttonBgEditIdle: "rgb(246, 194, 62)",
    buttonBgEditActive: "#232323",
    buttonBgRemoveIdle: "rgba(231, 74, 59, 1)",
    buttonBgRemoveActive: "#232323",
    iconEditIdle: "rgba(250, 250, 250, 1)",
    iconEditActive: "rgb(246, 194, 62)",
    iconRemoveIdle: "rgba(250, 250, 250, 1)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
  },
  popularCard: {
    bgCard: "transparent",
    bgImage: "transparent",
    fontHead: "rgba(62, 68, 98, 1)",
    fontArticle: "rgb(35, 38, 42)",
    borderIdle: "#E3E3E3",
    borderActive: brandColors.main,
  },
  followUs: {
    iconIdle: brandColors.main,
    iconActive: "rgb(30, 31, 40)",
  },
  addRecipeForm: {
    buttonBgIdle: "rgb(34, 37, 42)",
    buttonBorderIdle: "rgb(34, 37, 42)",
    buttonTextIdle: "rgba(250, 250, 250, 1)",
    buttonBgActive: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextActive: "rgba(250, 250, 250, 1)",
  },
  noItemFound: {
    fontIdle: "rgba(0, 0, 0, 0.5)",
  },
  shoppingList: {
    fontHead: "#fafafa",
    fontProduct: "#3E4462",
    fontAmount: "#fafafa",
    iconRemoveIdle: "#3E4462",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "#EBF3D4",
    borderItemIdle: "#E0E0E0",
    borderItemActive: brandColors.main,
  },
  productList: {
    fontHead: "#fafafa",
    fontProduct: "#3E4462",
    fontAmount: "#fafafa",
    iconRemoveIdle: "#3E4462",
    iconRemoveActive: brandColors.main,
    bgRow: "#EBF3D4",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "#EBF3D4",
    checkbox: "#b4b8a9",
  },
};

export const darkTheme = {
  breakpoints,
  brandColors: {
    ...brandColors,
  },
  bg: {
    main: "rgb(30, 31, 40)",
    secondary: brandColors.main,
    form: "rgb(34, 37, 42)",
    footer: brandColors.main,
  },
  hero: {
    text: "rgba(250, 250, 250, 1)",
    bgDecoration: "rgb(234, 243, 214)",
  },
  card: {
    bg: "rgb(42, 44, 54)",
    borderIdle: "#000",
    borderActive: brandColors.main,
    caption: {
      bgIdle: "rgb(42, 44, 54)",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      borderIdle: "#000",
      borderActive: brandColors.main,
    },
  },
  cardGallery: {
    buttonBgIdle: "transparent",
    buttonBgActive: brandColors.main,
    buttonBorderIdle: brandColors.main,
    buttonBorderActive: brandColors.main,
    buttonTextIdle: "#fafafa",
    buttonTextActive: "#22252A",
  },
  callToAction: {
    bg: "rgb(42, 44, 54)",
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
    navFooter: "rgb(35, 38, 42)",
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
      fontActive: "rgb(35, 38, 42)",
      borderIdle: "rgba(255, 255, 255, 0.2)",
      borderActive: "rgb(35, 38, 42)",
      iconIdle: "rgba(255, 255, 255, 0.8)",
      iconActive: "rgb(255, 255, 255)",
      error: "rgba(231, 74, 59, 1)",
      warning: "rgb(246, 194, 62)",
      correct: "rgb(60, 188, 129)",
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
      fillHover: "rgb(34, 37, 42)",
    },
  },
  form: {
    font: typography.family.primary,
    search: {
      font: "rgba(250, 250, 250, 1)",
      background: "rgb(30, 31, 40)",
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
      colorHover: "rgb(35, 38, 42)",
    },
  },
  button: {
    font: typography.family.primary,
    base: {
      bgIdle: brandColors.main,
      bgHover: "rgb(34, 37, 42)",
      bgActive: "#2c3036",
      borderIdle: brandColors.main,
      borderHover: "rgb(34, 37, 42)",
      borderActive: "#2c3036",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    outlineSmall: {
      bgIdle: "transparent",
      bgHover: "transparent",
      bgActive: "transparent",
      borderIdle: "rgba(250, 250, 250, 1)",
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    outlineBig: {
      bgIdle: "transparent",
      bgHover: brandColors.main,
      bgActive: "transparent",
      borderIdle: brandColors.main,
      borderHover: brandColors.main,
      borderActive: "rgb(116, 141, 46)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
      fontColorActive: "rgba(250, 250, 250, 1)",
    },
    rectBig: {
      bgIdle: "#1d2024",
      bgHover: "#1d2024",
      bgActive: "#2c3036",
      borderIdle: "#1d2024",
      borderHover: "#1d2024",
      borderActive: "#2c3036",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: brandColors.main,
    },
    rectSmall: {
      bgIdle: brandColors.main,
      bgHover: "rgb(34, 37, 42)",
      bgActive: "rgb(34, 37, 42)",
      borderIdle: brandColors.main,
      borderHover: "rgb(34, 37, 42)",
      borderActive: "rgb(34, 37, 42)",
      fontColorIdle: "rgba(250, 250, 250, 1)",
      fontColorHover: "rgba(250, 250, 250, 1)",
    },
    rectSmallDisabled: {
      bgIdle: "#D9D9D9",
      bgHover: "rgb(255, 255, 255)",
      bgActive: brandColors.main,
      borderIdle: "#D9D9D9",
      borderHover: "rgb(35, 38, 42)",
      borderActive: brandColors.main,
      fontColorIdle: "rgb(35, 38, 42)",
      fontColorHover: "rgb(35, 38, 42)",
    },
  },
  themeSwitch: {
    ...lightTheme.themeSwitch,
  },
  userAvatar: {
    fontIdle: "rgba(250, 250, 250, 1)",
    fontAlternativeIdle: "rgb(34, 37, 42)",
    fontHover: brandColors.main,
    fontActive: brandColors.main,
    borderIdle: "none",
    borderHover: brandColors.main,
    borderActive: brandColors.main,
    blend: "difference",
  },
  mobileMenu: {
    bg: "rgb(30, 31, 40)",
    strokeIdle: "rgba(250, 250, 250, 1)",
    strokeHover: brandColors.main,
    strokeActive: brandColors.main,
    blend: "difference",
  },
  footer: {
    logoTextIdle: "rgba(250, 250, 250, 1)",
    logoTextActive: "rgb(34, 37, 42)",
    descriptionText: "rgba(250, 250, 250, 1)",
    legalText: "#8e8f92",
  },
  backgroundDecoration: {
    primary: brandColors.main,
    secondary: "rgba(250, 250, 250, 1)",
  },
  notFound: {
    text: "rgba(250, 250, 250, 1)",
  },
  editProfilePopup: {
    bg: "rgb(30, 31, 40)",
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
    textIdle: "#A2A2A6",
    textActive: brandColors.main,
    decorationIdle: "rgba(162, 162, 166, 0.5)",
    decorationActive: brandColors.main,
    buttonIdle: "#A2A2A6",
    buttonDisabled: "rgba(162, 162, 166, 0.3)",
    buttonActive: brandColors.main,
  },
  recipeCard: {
    bgCard: "rgb(42, 44, 54)",
    bgImage: brandColors.main,
    fontHead: "rgba(250, 250, 250, 1)",
    fontArticle: "rgba(250, 250, 250, 0.60)",
    button: {
      delete: {
        bgIdle: brandColors.main,
        bgActive: "rgb(34, 37, 42)",
        borderIdle: brandColors.main,
        borderActive: "rgb(34, 37, 42)",
        iconIdle: "rgba(250, 250, 250, 1)",
        iconActive: "rgba(231, 74, 59, 1)",
      },
      seeRecipe: {
        bgIdle: brandColors.main,
        bgActive: "rgb(34, 37, 42)",
        borderIdle: brandColors.main,
        borderActive: "22252A",
        textIdle: "rgba(250, 250, 250, 1)",
        textActive: brandColors.main,
      },
    },
  },
  paginationFilter: {
    bg: "rgb(42, 44, 54)",
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
    bg: "rgb(42, 44, 54)",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    text: "rgba(250, 250, 250, 1)",
    buttons: {
      logoutBgIdle: brandColors.main,
      logoutBgActive: "rgb(35, 38, 42)",
      logoutBorderIdle: brandColors.main,
      logoutBorderActive: brandColors.main,
      logoutTextIdle: "rgba(250, 250, 250, 1)",
      logoutTextActive: brandColors.main,

      cancelBgIdle: "#D9D9D9",
      cancelBgActive: "rgb(35, 38, 42)",
      cancelBorderIdle: "#D9D9D9",
      cancelBorderActive: brandColors.main,
      cancelTextIdle: "rgb(35, 38, 42)",
      cancelTextActive: brandColors.main,
    },
  },
  editUserModal: {
    backdrop: "rgba(0, 0, 0, 0.8)",
    bg: "rgb(42, 44, 54)",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
  },
  userUpdateForm: {
    img: {
      bg: "lightgrey",
      boxShadow: "rgba(255, 255, 255, 0.9)",
      buttonBgIdle: brandColors.main,
      buttonBgActive: "rgb(34, 37, 42)",
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
      bgActive: "rgb(35, 38, 42)",
      bgDisabled: "#D9D9D9",
      borderIdle: brandColors.main,
      borderActive: "rgb(35, 38, 42)",
      borderDisabled: "#D9D9D9",
      textIdle: "rgba(250, 250, 250, 1)",
      textActive: brandColors.main,
      textDisabled: "rgb(35, 38, 42)",
    },
  },
  recipeTextInput: {
    borderIdle: "#FAFAFA4D",
    borderActive: brandColors.main,
    font: "rgba(250, 250, 250, 1)",
    fontPlaceholder: "#FAFAFA4D",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgb(30, 31, 40)",
  },
  select: {
    bg: brandColors.main,
    textIdle: "rgba(250, 250, 250, 1)",
    textActive: "rgba(250, 250, 250, 1)",
    textPlaceholder: "#FAFAFA8D",
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    iconRemove: "rgba(231, 74, 59, 1)",
    borderIdle: "#FAFAFA4D",
    borderActive: brandColors.main,
    accent: brandColors.main,
    scrollbarBg: brandColors.main,
    scrollbarThumb: "rgb(34, 37, 42)",
    error: "rgba(231, 74, 59, 1)",
    errorBg: "rgb(30, 31, 40)",
    colorTextMenuIdle: "rgba(250, 250, 250, 0.5)",
    colorTextMenuActive: "rgba(250, 250, 250, 1)",
    colorBorderSearch: "rgba(250, 250, 250, 0.20)",
    ingredient: {
      bg: "transparent",
      borderIdle: "rgb(74, 75, 82)",
      borderActive: brandColors.main,
    },
  },
  counter: {
    textIdle: "rgba(250, 250, 250, 1)",
    textActive: brandColors.main,
    iconIdle: "rgba(250, 250, 250, 1)",
    iconActive: brandColors.main,
    iconDisabled: "#4c4c4c",
    border: "rgba(250, 250, 250, 1)",
  },
  recipePreparationTextArea: {
    bg: "transparent",
    borderIdle: "rgb(74, 75, 82)",
    borderActive: brandColors.main,
    textIdle: "rgba(250, 250, 250, 1)",
    textPlaceholder: "rgba(250, 250, 250, 0.6)",
    buttonBgRemoveActive: "rgba(231, 74, 59, 1)",
    buttonBgIdle: "rgb(30, 31, 40)",
    buttonBgActive: brandColors.main,
    buttonBgDisabled: "rgb(30, 31, 40)",
    buttonBorderIdle: "rgb(224, 224, 224)",
    buttonBorderActive: brandColors.main,
    buttonBorderDisabled: "rgb(224, 224, 224)",
  },
  recipePreparationStepsPreview: {
    text: "rgba(250, 250, 250, 1)",
    numberDecoration: brandColors.main,
    numberDecorationText: "rgb(30, 31, 40)",
    buttonBgEditIdle: "rgb(246, 194, 62)",
    buttonBgEditActive: "#232323",
    buttonBgRemoveIdle: "rgba(231, 74, 59, 1)",
    buttonBgRemoveActive: "#232323",
    iconEditIdle: "rgb(30, 31, 40)",
    iconEditActive: "rgb(246, 194, 62)",
    iconRemoveIdle: "rgb(30, 31, 40)",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
  },
  popularCard: {
    bgCard: "transparent",
    bgImage: "transparent",
    fontHead: "rgba(250, 250, 250, 1)",
    fontArticle: "rgba(250, 250, 250, 0.60)",
    borderIdle: "rgb(74, 75, 82)",
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
    fontHead: "#fafafa",
    fontProduct: "#fafafa",
    fontAmount: "#fafafa",
    iconRemoveIdle: "#fafafa",
    iconRemoveActive: "rgba(231, 74, 59, 1)",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "#2A2C36",
    borderItemIdle: "#606167",
    borderItemActive: brandColors.main,
  },
  productList: {
    fontHead: "#fafafa",
    fontProduct: "#fafafa",
    fontAmount: "#fafafa",
    iconRemoveActive: brandColors.main,
    bgRow: "#2A2C36",
    bgHead: brandColors.main,
    bgAmount: brandColors.main,
    bgPicture: "#2A2C36",
    checkbox: "#b4b8a9",
  },
};
