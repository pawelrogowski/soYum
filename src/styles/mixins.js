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
