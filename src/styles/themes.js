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
	brand: {
		primary: "#8BAA36",
		secondary: "#FAFAFA",
	},
};

export const lightTheme = {
	color: {
		background: {
			primary: brandColors.brand.primary,
			secondary: "#22252A",
			accent: "#D9D9D9",
			accent2: "transparent",
		},
		button: {
			primary: "#22252A",
			secondary: brandColors.brand.primary,
			accent: "#FAFAFA",
			accent2: "transparent",
			accent3: "#1E1F28",
			disabled: "#D9D9D9",
			font: {
				primary: "#FAFAFA",
				secondary: "#FAFAFA",
				accent: brandColors.brand.primary,
				accent2: brandColors.brand.primary,
				hero: "#22252A",
				heroHover: "#FAFAFA",
				disabled: "#23262A",
			},
		},
		icon: {
			primary: brandColors.brand.primary,
			secondary: "#FFFFFF",
		},
		font: {
			primary: "#23262A",
			secondary: "#FAFAFA",
			accent: brandColors.brand.primary,
			accent2: "#000",
			placeholder: "#BDBDBD",
		},
		...brandColors,
	},

	...media,
	...typography,
};

export const darkTheme = {
	color: {
		background: {
			primary: "#1E1F28",
			secondary: brandColors.brand.primary,
			accent: "#2A2C36",
			accent2: "#D9D9D9",
		},
		button: {
			primary: brandColors.brand.primary,
			secondary: "#22252A",
			accent: "#FAFAFA",
			accent2: "transparent",
			accent3: brandColors.brand.primary,
			disabled: "#D9D9D9",
			font: {
				primary: "#FAFAFA",
				secondary: "#FAFAFA",
				accent: brandColors.brand.primary,
				accent2: "#1E1F28",
				hero: "#22252A",
				heroHover: "#FAFAFA",
				disabled: "#23262A",
			},
		},
		icon: {
			primary: "#FFFFFF",
			secondary: "#1E1F28",
		},
		font: {
			primary: "#FAFAFA",
			secondary: "#FAFAFA",
			accent: brandColors.brand.primary,
			accent2: "#FAFAFA99",
			placeholder: "#FAFAFA80",
		},
		...brandColors,
	},

	...media,
	...typography,
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
	}

	body {	
		background-color: ${(props) => props.theme.color.background.accent};
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
