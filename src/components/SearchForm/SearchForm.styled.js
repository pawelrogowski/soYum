import styled from "styled-components";
import { font } from "../../styles/mixins";
export const StyledForm = styled.form`
	position: relative;

	label,
	p {
		display: none;
	}
	input {
		${font({
			family: ({ theme }) => theme.navigation.font,
			color: ({ theme }) => theme.navigation.footer.colorHover,
			size: "1.6rem",
			weight: "400",
		})}
		height: 7rem;
		border: 0.1rem solid #f0f0f0;
		width: 39rem;
		border-radius: 2.4rem 0rem 0rem 4.4rem;
		padding: 0 6rem 0rem 4.9rem;
		outline: none;
		&:focus,
		&:hover,
		&:focus-within {
			border: 0.1rem solid #0000005e;
		}
		&::placeholder {
			color: #bdbdbd;
		}
	}
	button {
		position: absolute;
		top: 0;
		left: 349px;
	}
`;
