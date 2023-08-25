import { Link } from "react-router-dom";
import { StyledNav } from "./Navigation.styled";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const Navigation = ({ variant }) => {
	console.log(variant);
	return (
		<StyledNav $variant={variant}>
			<ul>
				<li>
					<Link to="#">Categories</Link>
				</li>
				<li>
					<Link to="#">Add recipes</Link>
				</li>
				<li>
					<Link to="#">My Recipes</Link>
				</li>
				<li>
					<Link to="#">Favorites</Link>
				</li>
				<li>
					<Link to="#">Shopping List</Link>
				</li>
				{variant !== "footer" && (
					<li>
						<Link to="#">
							<Icon icon="search" />
							{variant !== "header" && <span>Search</span>}
						</Link>
					</li>
				)}
			</ul>
		</StyledNav>
	);
};

Navigation.propTypes = {
	variant: PropTypes.string.isRequired,
};
