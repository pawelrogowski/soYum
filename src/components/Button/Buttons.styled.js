import styled, { css } from "styled-components";
import { font } from "../../styles/mixins";

export const Button = styled.button`
	${font({
		family: ({ theme }) => theme.button.font,
		color: ({ theme }) => theme.button.base.fontColorIdle,
		size: "1.6rem",
		weight: "400",
	})}

	background-color: ${({ theme }) => theme.button.base.bgIdle};
	border-radius: 2.4rem 4.4rem;
	min-width: 16.1rem;
	height: 7rem;
	border: 0.1rem solid ${({ theme }) => theme.button.base.borderIdle};
	transition: background-color 100ms, color 100ms, border 100ms;
	cursor: pointer;
	outline: none;

	&:hover,
	&:focus {
		transition: background-color 100ms, color 100ms, border 100ms;
		background-color: ${({ theme }) => theme.button.base.bgHover};
		border: 0.1rem solid ${({ theme }) => theme.button.base.borderHover};
	}
	&:active {
		transition: background-color 100ms, color 100ms, border 100ms;
		background-color: ${({ theme }) => theme.button.base.bgActive};
		border: 0.1rem solid ${({ theme }) => theme.button.base.borderActive};
	}

	${(props) =>
		props.$variant === "outline"
			? css`
					background-color: ${props.theme.button.outline.bgIdle};
					border: 0.2rem solid ${props.theme.button.outline.borderIdle};
					color: ${props.theme.button.outline.fontColorIdle};
					&:hover,
					&:focus {
						background-color: ${props.theme.button.outline.bgIdle};
						color: ${props.theme.button.outline.fontColorHover};
						border: 0.2rem solid ${props.theme.button.outline.borderHover};
					}
					&:active {
						background-color: ${({ theme }) =>
							theme.button.outline.bgActive};
						border: 0.2rem solid
							${({ theme }) => theme.button.outline.borderActive};
					}
			  `
			: props.$variant === "rectBig"
			? css`
					background-color: ${props.theme.button.rectBig.bgIdle};
					border: 0.2rem solid ${props.theme.button.rectBig.borderIdle};
					color: ${props.theme.button.rectBig.fontColorIdle};
					border-radius: 0.6rem;
					min-width: 33.9rem;
					height: 6rem;
					&:hover,
					&:focus {
						background-color: ${props.theme.button.rectBig.bgHover};
						color: ${props.theme.button.rectBig.fontColorHover};
						border: 0.2rem solid ${props.theme.button.rectBig.borderHover};
					}
					&:active {
						background-color: ${({ theme }) =>
							theme.button.rectBig.bgActive};
						border: 0.2rem solid
							${({ theme }) => theme.button.rectBig.borderActive};
					}
			  `
			: props.$variant === "rectSmall"
			? css`
					background-color: ${props.theme.button.rectSmall.bgIdle};
					border: 0.2rem solid ${props.theme.button.rectSmall.borderIdle};
					color: ${props.theme.button.rectSmall.fontColorIdle};
					border-radius: 0.6rem;
					min-width: 19.2rem;
					height: 5.9rem;
					&:hover,
					&:focus {
						background-color: ${props.theme.button.rectSmall.bgHover};
						color: ${props.theme.button.rectSmall.fontColorHover};
						border: 0.2rem solid
							${props.theme.button.rectSmall.borderHover};
					}
					&:active {
						background-color: ${({ theme }) =>
							theme.button.rectSmall.bgActive};
						border: 0.2rem solid
							${({ theme }) => theme.button.rectSmall.borderActive};
					}
			  `
			: props.$variant === "rectSmallDisabled"
			? css`
					background-color: ${props.theme.button.rectSmallDisabled.bgIdle};
					border: 0.2rem solid
						${props.theme.button.rectSmallDisabled.borderIdle};
					color: ${props.theme.button.rectSmallDisabled.fontColorIdle};
					border-radius: 0.6rem;
					min-width: 19.2rem;
					height: 5.9rem;
					&:hover,
					&:focus {
						background-color: ${props.theme.button.rectSmallDisabled
							.bgHover};
						color: ${props.theme.button.rectSmallDisabled.fontColorHover};
						border: 0.2rem solid
							${props.theme.button.rectSmallDisabled.borderHover};
					}
					&:active {
						background-color: ${({ theme }) =>
							theme.button.rectSmallDisabled.bgActive};
						border: 0.2rem solid
							${({ theme }) =>
								theme.button.rectSmallDisabled.borderActive};
					}
			  `
			: null};
`;
