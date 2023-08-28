import styled from "styled-components";
import { font, flexContainer } from "../../styles/mixins";

export const StyledInput = styled.input`
	position: relative;
	${font({
		family: ({ theme }) => theme.textInput.font,
		color: ({ theme }) => theme.textInput.font,
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

	~ svg {
		position: absolute;
		width: 2.4rem;
		height: 2.4rem;
		top: 50%;
		transform: translateY(-50%);

		&:nth-of-type(1) {
			stroke: white;
			fill: none;
			left: 1.8rem;
		}
		&:nth-of-type(2) {
			fill: #e74a3b;
			right: 1.9rem;
		}
	}

	height: 6rem;
	max-height: 6rem;
	width: 100%;
	padding: 1.6rem 5rem;
	outline: none;
	border-radius: 5px;
	border: 0.1rem solid ${({ theme }) => theme.textInput.borderIdle};
	color: ${({ theme }) => theme.textInput.fontIdle};
	background-color: ${({ theme }) => theme.textInput.bgIdle};
	transition: color 100ms, background-color 100ms, border 100ms, fill 100ms;
	&:focus,
	&:hover {
		border: 0.1rem solid ${({ theme }) => theme.textInput.borderActive};
		${({ theme }) => theme.textInput.fontActive};
	}
	&:focus,
	&:not(:placeholder-shown) ~ svg {
		&:nth-of-type(1) {
			stroke: ${({ theme }) => theme.textInput.iconActive};
		}
	}
`;
