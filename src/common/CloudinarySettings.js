import { store } from "../redux/store";

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

let cloudinarySettings = getCloudinarySettings(store.getState().global.isDarkTheme);

store.subscribe(() => {
  const isDarkTheme = store.getState().global.isDarkTheme;
  cloudinarySettings = getCloudinarySettings(isDarkTheme);
});

function getCloudinarySettings(isDarkTheme) {
  return {
    cloudName: "dd9oa9bwd",
    uploadPreset: "so-yummy",
    sources: ["local", "camera"],
    cropping: false,
    multiple: false,
    defaultSource: "local",
    eager: [{ width: 44, height: 44, crop: "scale", format: "webp" }],
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
}

export { cloudinarySettings };
