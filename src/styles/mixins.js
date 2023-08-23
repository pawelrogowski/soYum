import { css } from "styled-components";

export const font = ({
	color = "#000",
	size,
	family,
	height,
	spacing = "normal",
	weight = "normal",
	style,
}) => css`
	color: ${color};
	font-size: ${size};
	font-family: ${family};
	line-height: ${height};
	letter-spacing: ${spacing};
	font-weight: ${weight};
	font-style: ${style};
`;

export const flexContainer = ({
	direction = "row",
	justify = "flex-start",
	align = "stretch",
	wrap = "nowrap",
	gap = "0",
}) => css`
	display: flex;
	flex-direction: ${direction};
	justify-content: ${justify};
	align-items: ${align};
	flex-wrap: ${wrap};
	gap: ${gap};
`;

export const flexItem = ({
	flex = "1",
	grow = "0",
	shrink = "1",
	basis = "auto",
	order = "0",
}) => css`
	flex: ${flex} ${grow} ${shrink};
	flex-basis: ${basis};
	order: ${order};
`;

export const breakpoint = {
	tablet: (...args) => css`
		@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
			${css(...args)};
		}
	`,
	desktop: (...args) => css`
		@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
			${css(...args)};
		}
	`,
};
