export const cloudinarySettings = {
  cloudName: "dd9oa9bwd",
  uploadPreset: "so-yummy",
  sources: ["local", "url", "camera"],
  cropping: false,
  multiple: false,
  defaultSource: "local",
  eager: [{ width: 44, height: 44, crop: "scale", format: "webp" }],
  styles: {
    palette: {
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
