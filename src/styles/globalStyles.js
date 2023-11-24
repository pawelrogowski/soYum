import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  root: {
    --base-bezier: cubic-bezier(0.17, 0.67, 1, 1.23);
  }
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
		padding: 0;
  }

	html, body {
		margin: 0;
		padding: 0;
		font-size: 10px;
	}

	body {
		background-color: ${({ theme: t }) => t.bg.main};
    transition: ${({ isTransitionEnabled }) =>
      isTransitionEnabled ? "background-color 200ms" : "none"};
  	scroll-behavior: smooth;
  	text-rendering: optimizeSpeed;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-width: 28rem;
  }

  .active-nav-link {
    color: ${({ theme: t }) => t.brandColors.main} !important;

    svg {
      stroke: ${({ theme: t }) => t.brandColors.main} !important;
    }
  }

  .active-nav-link-mobile {
    color: ${({ theme: t }) => t.brandColors.main} !important;
    span {
      color: ${({ theme: t }) => t.brandColors.main} !important;
    }
    svg {
      stroke: ${({ theme: t }) => t.brandColors.main} !important;
    }
  }

  .active-nav-link-footer {
    color: ${({ theme: t }) => t.link.navFooter} !important;
  }



  main {
    min-height: calc(100dvh - 62px);
  }

  input,textarea,div {
    outline: none;
  }
  span+footer {
    visibility: hidden;
  }
  div[id="root"] {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-x: hidden;
  }

	a {
		text-decoration: none;
		color: inherit;
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	td,
	th {
		padding: 0;
	}

  svg {
    outline: none;
  }

	ol,
	ul {
	  list-style: none;
	}

	img {
    font-size: 0;
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

  .popup-box {
    width: 500px;
    height: 500px;
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
    -webkit-box-shadow: 0 0 0px 10000px ${(props) => props.theme.authForm.bg} inset;
	}

`;
