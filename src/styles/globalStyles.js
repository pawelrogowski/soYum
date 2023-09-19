import { createGlobalStyle } from "styled-components";
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
      transition: background-color 200ms;
  		scroll-behavior: smooth;
  		text-rendering: optimizeSpeed;
      font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      min-width: 28rem;
      overflow: auto;
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
	  transition: background-color 0s 600000s, color 0s 600000s;
    -webkit-box-shadow: 0 0 0px 10000px ${(props) =>
      props.theme.authForm.bg} inset;
	}

`;
