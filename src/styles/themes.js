import { createGlobalStyle } from "styled-components";

const media = {
	breakpoints: {
		mobile: "320px",
		tablet: "768px",
		desktop: "1024px",
		maxDesktop: "1400px",
	},
};

export const lightTheme = {
	color: {
		background: {
			primary: "#8BAA36",
			secondary: "#22252A",
			accent: "#D9D9D9",
			accent2: "transparent",
		},
		buttons: {
			primary: "#8BAA36",
			secondary: "#22252A",
			accent: "#D9D9D9",
			accent2: "transparent",
		},
		icons: {
			primary: "#8BAA36",
			secondary: "#FFFFFF",
		},
		text: {
			color: {
				primary: "#23262A",
				secondary: "#FAFAFA",
				accent: "#8BAA36",
				accent2: "#3E4462",
				placeholder: "#BDBDBD",
			},
		},
	},
	...media,
};

export const darkTheme = {
	color: {
		background: {
			primary: "#1E1F28",
			secondary: "#8BAA36",
			accent: "#2A2C36",
			accent2: "#D9D9D9",
		},
		buttons: {
			primary: "#8BAA36",
			secondary: "#22252A",
			accent: "#D9D9D9",
			accent2: "transparent",
		},
		icons: {
			primary: "#FFFFFF",
			secondary: "#1E1F28",
		},
		text: {
			color: {
				primary: "#FAFAFA",
				secondary: "#FAFAFA99",
				accent: "#8BAA36",
				accent2: "#FAFAFA",
				placeholder: "#FAFAFA80",
			},
		},
	},
	...media,
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
		background-color: ${(props) => props.theme.color.backgroundColor};
  		min-height: 100vh;
  		scroll-behavior: smooth;
  		text-rendering: optimizeSpeed;
		font-family: 'poppins';
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
