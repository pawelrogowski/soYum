import styled from "styled-components";
import { font, flexContainer } from "../../styles/mixins";

export const StyledDiv = styled.div`
	position: relative;
	height: 6rem;
	width: 40rem;
	max-height: 6rem;
	max-width: 40rem;
	${font({
		family: ({ theme }) => theme.textInput.font,
		color: ({ theme }) => theme.textInput.font,
		size: "1.6rem",
		weight: "400",
	})}

	${flexContainer({
		direction: "row",
		justify: "flex-start",
		align: "center",
		wrap: "nowrap",
		gap: 0,
	})}

	svg {
		position: absolute;
		width: 2.4rem;
		height: 2.4rem;
		&:nth-of-type(1) {
			left: 1.6rem;
		}
		&:nth-of-type(2) {
			right: 1.6rem;
		}
	}

	input {
		height: 100%;
		width: 100%;
		padding: 1.6rem 5rem;
		outline: none;
		border-radius: 5px;
		border: 1px solid ${({ theme }) => theme.textInput.borderIdle};
		color: ${({ theme }) => theme.textInput.fontIdle};
		background-color: ${({ theme }) => theme.textInput.bgIdle};
		transition: color 100ms, background-color 100ms, border 100ms;
		&:focus {
			border: 1px solid ${({ theme }) => theme.textInput.borderActive};
			${({ theme }) => theme.textInput.fontActive};
		}
		&:focus,
		&:not(:placeholder-shown) ~ svg {
			color: ${({ theme }) => theme.textInput.fontActive};
		}
	}
`;
