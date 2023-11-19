const lightPallete = {
  window: "#fafafa",
  sourceBg: "#fafafa",
  windowBorder: "lightgrey",
  tabIcon: "#8BAA36",
  inactiveTabIcon: "lightgray",
  menuIcons: "#8BAA36",
  link: "#8BAA36",
  action: "#8BAA36",
  inProgress: "#8BAA36",
  complete: "#53ad9d",
  error: "#c43737",
  textDark: "#000",
  textLight: "#000",
};

const darkPallete = {
  window: "#2A2C36",
  sourceBg: "#2A2C36",
  windowBorder: "rgba(255, 255, 255, 0.1)",
  tabIcon: "#8BAA36",
  inactiveTabIcon: "rgba(255, 255, 255, 0.2)",
  menuIcons: "#8BAA36",
  link: "#8BAA36",
  action: "#8BAA36",
  inProgress: "#8BAA36",
  complete: "#53ad9d",
  error: "#c43737",
  textDark: "rgba(255, 255, 255, 0.1)",
  textLight: "#000",
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
