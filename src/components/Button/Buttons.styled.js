import styled from "styled-components";

export const StyledButton = styled.button`
	border-radius: 24px 44px;
	height: 70px;
	min-width: 161px;

	border: 1px solid ${(props) => props.theme.color.button.primary};
	font-family: "Poppins";
	color: #fafafa;
	background-color: ${(props) => props.theme.color.button.primary};
`;
// props.$variant === "normal"
// 				? `1px solid ${props.theme.color.button.primary}`
// 				: "none"
