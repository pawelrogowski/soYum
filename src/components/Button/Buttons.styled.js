import styled from "styled-components";
import { font, media } from "../../styles/mixins";

export const StyledButton = styled.button`
	${media.mobile`

		${font({
			family: ({ theme }) => theme.family.primary,
			color: ({ theme }) => theme.color.button.font.primary,
			size: "16px",
			weight: "400",
		})}

		background-color: ${({ theme }) => theme.color.button.primary};
		border-radius: 24px 44px;
		min-width: 161px;
		height: 70px;
		border: 1px solid ${({ theme }) => theme.color.button.primary};
		transition: background-color 100ms, color  100ms, border  100ms;

		&:hover {
			transition: background-color  100ms, color  100ms, border  100ms;
			background-color: transparent;
		}
	`}

	${(props) =>
		props.$variant === "square"
			? `
			${media.mobile`

				background-color: ${props.theme.color.button.primary};
				border-radius: 6px;
				min-width: 114px;
				height: 60px;
				border: none;

				&:hover {
					background-color: ${props.theme.color.button.secondary};
					color: ${props.theme.color.brand.primary};
				}`}`
			: null};
`;
