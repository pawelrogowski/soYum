import styled from "styled-components";

export const StyledButton = styled.button`
	background-color: ${(props) => props.theme.backgroundColor};
	color: ${(props) => props.theme.primaryColor};
`;
