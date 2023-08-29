import { styled } from "styled-components";
import { Form } from "formik";
import { flexContainer, font } from "../../../styles/mixins";

export const StyledForm = styled(Form)`
	width: 50rem;
	height: 48.4rem;
	padding: 4.4rem 5rem;
	border-radius: 3rem;
	background-color: ${({ theme }) => theme.registerForm.bg};
	transition: color 100ms, background-color 100ms, border 100ms, fill 100ms;

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
				width: 2.4rem;
				height: 2.4rem;
				top: 50%;
				transform: translateY(-50%);

				&:nth-of-type(1) {
					stroke: ${({ theme }) => theme.registerForm.textInput.iconIdle};
					fill: none;
					left: 1.8rem;
				}
				&:nth-of-type(2) {
					fill: #e74a3b;
					right: 1.9rem;
				}
			}

			&:focus-within,
			&:hover,
			&:focus {
				svg {
					&:nth-of-type(1) {
						stroke: ${({ theme }) => theme.registerForm.textInput.iconActive};
					}
				}
			}
		}
	}

	button {
		width: 100%;
	}

	p {
		${font({
			family: ({ theme }) => theme.registerForm.font,
			color: ({ theme }) => theme.registerForm.header,
			size: "1.4rem",
			weight: "400",
			height: "2.1rem",
		})}
		position: absolute;
		left: 0.1rem;
		bottom: -23px;
	}

	label {
		display: none;
	}

	input {
		position: relative;
		${font({
			family: ({ theme }) => theme.registerForm.textInput.font,
			color: ({ theme }) => theme.registerForm.textInput.font,
			size: "1.8rem",
			weight: "400",
		})}

		${flexContainer({
			direction: "row",
			justify: "flex-start",
			align: "center",
			wrap: "nowrap",
			gap: 0,
		})}

		height: 6rem;
		max-height: 6rem;
		width: 100%;
		padding: 1.6rem 5rem;
		outline: none;
		border-radius: 5px;
		border: 0.1rem solid
			${({ theme }) => theme.registerForm.textInput.borderIdle};
		color: ${({ theme }) => theme.registerForm.textInput.fontIdle};
		background-color: ${({ theme }) => theme.registerForm.textInput.bgIdle};
		transition: color 100ms, background-color 100ms, border 100ms, fill 100ms;
		&:focus,
		&:hover {
			border: 0.1rem solid
				${({ theme }) => theme.registerForm.textInput.borderActive};
			${({ theme }) => theme.registerForm.textInput.fontActive};
		}
	}
`;
