import { createGlobalStyle } from "styled-components";

const media = {
	breakpoints: {
		mobile: "320px",
		tablet: "768px",
		desktop: "1024px",
		maxDesktop: "1400px",
	},
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
};

export const lightTheme = {
	media,
	bg: {
		main: "#FAFAFA",
		secondary: "#22252A",
		form: "#2A2C36",
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
	media,
	bg: {
		main: "#2A2C36",
		secondary: "#1d2024",
		form: "#2A2C36",
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
		background-color: ${(props) => props.theme.bg.main};
  		min-height: 100vh;
  		scroll-behavior: smooth;
  		text-rendering: optimizeSpeed;
		font-family: 'Poppins';
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
`;
