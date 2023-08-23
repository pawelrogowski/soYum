import styled, { css } from "styled-components";

export const StyledSvg = styled.svg`
	fill: gray;

	${({ variant }) =>
		variant === "!round"
			? css`
					use {
						fill: yellow;
						stroke-width: 0;
					}
			  `
			: variant === "arrow_long"
			? css`
					use {
						stroke: blue;
					}
			  `
			: null}
`;
