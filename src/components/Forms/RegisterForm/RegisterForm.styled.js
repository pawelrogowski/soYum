import { styled } from "styled-components";

import { flexContainer, font } from "../../../styles/mixins";
export const StyledForm = styled.form`
	width: 50rem;
	height: 48.4rem;
	padding: 4.4rem 5rem;
	border-radius: 3rem;
	background-color: ${({ theme }) => theme.registerForm.bg};
	h1 {
		${font({
			family: ({ theme }) => theme.registerForm.font,
			color: ({ theme }) => theme.registerForm.header,
			size: "2.8rem",
			weight: "600",
			height: "3rem",
			spacing: "-0.056rem",
		})}
	}
	ul {
		${flexContainer({
			direction: "column",
			justify: "flex-start",
			align: "normal",
			wrap: "nowrap",
			gap: "2.4rem",
		})}
		margin-top:3.2rem;
		margin-bottom: 5rem;
		li {
			position: relative;
			svg {
				position: absolute;
			}
		}
	}
	button {
		width: 100%;
	}
`;
