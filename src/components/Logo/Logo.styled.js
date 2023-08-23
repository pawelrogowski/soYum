import styled from "styled-components";
import { Icon } from "../Icon/Icon";
export const LogoIcon = styled(Icon)`
	stroke: ${({ theme }) => theme.logo.icon};
	background-color: ${({ theme }) => theme.logo.bg};
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	border-radius: 1.2rem;
	stroke-width: 2;
	padding: 0.7rem 0.5rem 0.6rem 0.6rem;
	max-width: 4rem;
	max-height: 4rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		max-width: 4.4rem;
		max-height: 4.4rem;
	}
`;
