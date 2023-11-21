const lightPallete = {
  window: "rgba(250, 250, 250, 1)",
  sourceBg: "rgba(250, 250, 250, 1)",
  windowBorder: "rgba(211, 211, 211, 1)",
  tabIcon: "rgba(139, 170, 54, 1)",
  inactiveTabIcon: "rgba(211, 211, 211, 1)",
  menuIcons: "rgba(139, 170, 54, 1)",
  link: "rgba(139, 170, 54, 1)",
  action: "rgba(139, 170, 54, 1)",
  inProgress: "rgba(139, 170, 54, 1)",
  complete: "rgba(83, 173, 157, 1)",
  error: "rgba(196, 55, 55, 1)",
  textDark: "rgba(0, 0, 0, 1)",
  textLight: "rgba(0, 0, 0, 1)",
};

const darkPallete = {
  window: "rgba(42, 44, 54, 1)",
  sourceBg: "rgba(42, 44, 54, 1)",
  windowBorder: "rgba(255, 255, 255, 0.1)",
  tabIcon: "rgba(139, 170, 54, 1)",
  inactiveTabIcon: "rgba(255, 255, 255, 0.2)",
  menuIcons: "rgba(139, 170, 54, 1)",
  link: "rgba(139, 170, 54, 1)",
  action: "rgba(139, 170, 54, 1)",
  inProgress: "rgba(139, 170, 54, 1)",
  complete: "rgba(83, 173, 157, 1)",
  error: "rgba(196, 55, 55, 1)",
  textDark: "rgba(255, 255, 255, 0.1)",
  textLight: "rgba(0, 0, 0, 1)",
};

export const getCloudinarySettings = (isDarkTheme, isRecipeImage) => {
  return {
    cloudName: "dd9oa9bwd",
    uploadPreset: isRecipeImage ? "recipe" : "avatar",
    sources: ["local", "camera"],
    cropping: false,
    multiple: false,
    defaultSource: "local",
    tags: isRecipeImage ? ["recipe", "food"] : ["avatar", "user"],
    context: { alt: "user_uploaded" },
    clientAllowedFormats: ["avif", "webp", "jpg", "png", "jpeg", "", ""],
    maxImageFileSize: 2000000,
    maxImageWidth: 2000,
    styles: {
      frame: { background: "rgba(0,0,0,0.2)" },
      palette: {
        ...(isDarkTheme ? darkPallete : lightPallete),
      },
      fonts: {
        default: "Poppins",
        "'Poppins'": {
          url: "../../assets/fonts/Poppins-Regular.woff2",
          active: true,
        },
      },
    },
  };
};
