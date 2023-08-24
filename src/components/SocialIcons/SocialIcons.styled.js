import styled from "styled-components";
import { flexContainer } from "../../styles/mixins";

export const StyledUl = styled.ul`
	display: inline-block;
	li {
		${flexContainer({
			justify: "center",
			align: "center",
		})}
		&:focus {
			svg {
				fill: ${({ theme }) => theme.icon.social.fillHover};
				transition: fill 100ms;
			}
		}
	}
	svg {
		width: 1.8rem;
		height: 1.8rem;
		fill: ${({ theme }) => theme.icon.social.fill};
		transition: fill 100ms;
		&:hover,
		&:focus {
			fill: ${({ theme }) => theme.icon.social.fillHover};
			transition: fill 100ms;
		}
	}
	${flexContainer({
		justify: "center",
		align: "center",
		gap: "1.6rem",
	})}
`;
