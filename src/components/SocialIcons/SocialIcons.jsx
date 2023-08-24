import { StyledUl } from "./SocialIcons.styled";
import { Icon } from "../Icon/Icon";
import { Link } from "react-router-dom";

export const SocialIcons = () => {
	return (
		<StyledUl>
			<Link to="#">
				<li>
					<Icon icon="facebook" />
				</li>
			</Link>
			<Link to="#">
				<li>
					<Icon icon="youtube" />
				</li>
			</Link>
			<Link to="#">
				<li>
					<Icon icon="twitter" />
				</li>
			</Link>
			<Link to="#">
				<li>
					<Icon icon="instagram" />
				</li>
			</Link>
		</StyledUl>
	);
};
