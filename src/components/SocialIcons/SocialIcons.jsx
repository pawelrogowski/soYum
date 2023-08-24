import { StyledUl } from "./SocialIcons.styled";
import { Icon } from "../Icon/Icon";

export const SocialIcons = () => {
	return (
		<StyledUl>
			<li>
				<Icon icon="facebook" />
			</li>
			<li>
				<Icon icon="youtube" />
			</li>
			<li>
				<Icon icon="twitter" />
			</li>
			<li>
				<Icon icon="instagram" />
			</li>
		</StyledUl>
	);
};
