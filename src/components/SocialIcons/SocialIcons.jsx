import { StyledUl } from "./SocialIcons.styled";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const SocialIcons = () => {
	return (
		<StyledUl>
			<li>
				<Link to="#">
					<Icon icon="facebook" />
				</Link>
			</li>
			<li>
				<Link to="#">
					<Icon icon="youtube" />
				</Link>
			</li>
			<li>
				<Link to="#">
					<Icon icon="twitter" />
				</Link>
			</li>
			<li>
				<Link to="#">
					<Icon icon="instagram" />
				</Link>
			</li>
		</StyledUl>
	);
};
