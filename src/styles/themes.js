import { createGlobalStyle } from "styled-components";
import "../assets/fonts/Poppins-Regular.woff2";
import "../assets/fonts/Poppins-SemiBold.woff2";
import "modern-normalize/modern-normalize.css";

const breakpoints = {
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
    secondary: "#22252A",
    form: "#2A2C36",
  },
  registerForm: {
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
    header: {
      colorIdle: "#23262A",
      colorHover: brandColors.main,
      icon: "#23262A",
    },
    footer: {
      colorIdle: "#FAFAFA",
      colorHover: "#23262A",
    },
    hamburger: {
      colorIdle: "#22252A",
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
};

export const darkTheme = {
  breakpoints,
  bg: {
    main: "#2A2C36",
    secondary: "#1d2024",
    form: "#2A2C36",
  },
  registerForm: {
    ...lightTheme.registerForm,
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
    header: {
      colorIdle: "#FAFAFA",
      colorHover: brandColors.main,
    },
    footer: {
      colorIdle: "#FAFAFA",
      colorHover: "#23262A",
    },
    hamburger: {
      colorIdle: "#FAFAFA",
      colorHover: brandColors.main,
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
};

export const GlobalStyles = createGlobalStyle`

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

	html, body {
		margin: 0;
		padding: 0;
		font-size: 10px;
	}

	body {
		background-color: ${({ theme }) => theme.bg.main};
  		min-height: 100vh;
  		scroll-behavior: smooth;
  		text-rendering: optimizeSpeed;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      min-width: 37.5rem;
  }

	a {
		text-decoration: none;
		color: inherit;
		outline: none;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
	}

	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	figure,
	p,
	pre {
  	margin: 0;
	}

	ol,
	ul {
	  list-style: none;
	  margin: 0;
	  padding: 0;
	}

	img {
  	max-width: 100%;
 		display: block;
	}

	input,
	button,
	textarea,
	select {
  	font: inherit;
	}

	input::placeholder,
	textarea::placeholder {
		color: #999;
	}

	@media (prefers-reduced-motion: reduce) {
  	* {
    	animation-duration: 0.01ms !important;
    	animation-iteration-count: 1 !important;
    	transition-duration: 0.01ms !important;
    	scroll-behavior: auto !important;
  	}
	}

	// this is for autofil on webkit browsers
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
	  border: 0.1rem solid SlateBlue;
	  -webkit-text-fill-color: #fafafa;
	  transition: background-color 50000s ease-in-out 0s;
	}


`;
