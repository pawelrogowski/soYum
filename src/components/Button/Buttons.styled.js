import styled from "styled-components";
import { font } from "../../styles/mixins";

export const StyledButton = styled.button`
	border-radius: 24px 44px;
	height: 70px;
	min-width: 161px;

	border: 1px solid ${({ theme }) => theme.color.button.primary};
	${font({
		family: ({ theme }) => theme.family.primary,
		color: ({ theme }) => theme.color.button.font.primary,
		size: "16px",
		weight: "400",
	})}
	background-color: ${({ theme }) => theme.color.button.primary};
`;

// props.$variant === "normal"
// 				? `1px solid ${props.theme.color.button.primary}`
// 				: "none"
