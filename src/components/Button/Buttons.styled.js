import styled from "styled-components";
import { font } from "../../styles/mixins";

export const Button = styled.button`
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
	transition: background-color 100ms, color 100ms, border 100ms;
	cursor: pointer;

	&:hover {
		transition: background-color 100ms, color 100ms, border 100ms;
		background-color: ${({ theme }) => theme.color.button.secondary};
		border: 1px solid ${({ theme }) => theme.color.button.secondary};
	}

	${(props) =>
		props.$variant === "outline"
			? `
				background-color: transparent;
				border: 2px solid ${props.theme.color.button.accent};

				&:hover {
					background-color: transparent;
					color: ${props.theme.color.button.primary};
					border: 2px solid ${props.theme.color.button.primary};
				}`
			: props.$variant === "squareBig"
			? `
				background-color: ${props.theme.color.button.accent3};
				border-radius: 6px;
				min-width: 114px;
				width: 339px; 
				height: 60px;
				border: none;

				&:hover {
					background-color: ${props.theme.color.button.accent3};
					color: ${props.theme.color.button.font.accent2};
					border: none;
				}`
			: props.$variant === "squareSmall"
			? `
				background-color: ${props.theme.color.brand.primary};
				border-radius: 6px;
				min-width: 114px;
				height: 60px;
				border: none;

				&:hover {
					background-color: ${props.theme.color.button.accent3};
					color: ${props.theme.color.brand.secondary};
					border: none;
				}`
			: props.$variant === "disabled"
			? `
				background-color: ${props.theme.color.button.disabled};
				color: ${props.theme.color.button.font.disabled};
				border-radius: 6px;
				min-width: 114px;
				height: 60px;
				border: none;

				&:hover {
					background-color: ${props.theme.color.button.accent2};
					color: ${props.theme.color.button.font.disabled};
					border: 1px solid ${props.theme.color.button.font.disabled};
				}`
			: props.$variant === "hero"
			? `
				background-color: transparent;
				color: ${props.theme.color.button.font.hero};
				border: 2px solid ${props.theme.color.brand.primary};
				border-radius: 24px 44px;
				min-width: 239px;
				height: 60px;


				&:hover {
					background-color: ${props.theme.color.brand.primary};
					color: ${props.theme.color.button.font.heroHover};
					border: 2px solid ${props.theme.color.brand.primary};
				}`
			: null};
`;
