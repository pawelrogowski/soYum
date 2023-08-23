import styled from "styled-components";
import { Icon } from "../Icon/Icon";

export const LogoIcon = styled(Icon)`
	stroke: ${(props) => props.theme.brandSecondary};
	background-color: ${(props) => props.theme.brandPrimary};
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	width: 40px;
	height: 40px;
	border-radius: 12px;
	stroke-width: 2;
	padding: 7px 5px 6px 6px;
`;
