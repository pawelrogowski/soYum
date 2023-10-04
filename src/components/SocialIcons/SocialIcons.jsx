import { Link } from "react-router-dom";

import { Icon } from "../Icon/Icon";
import { StyledUl } from "./SocialIcons.styled";

export const SocialIcons = () => {
  return (
    <StyledUl>
      <li>
        <Link to="#" aria-label="navigate to our facebook">
          <Icon icon="facebook" />
        </Link>
      </li>
      <li>
        <Link to="#" aria-label="navigate to our youtube">
          <Icon icon="youtube" />
        </Link>
      </li>
      <li>
        <Link to="#" aria-label="navigate to our twitter">
          <Icon icon="twitter" />
        </Link>
      </li>
      <li>
        <Link to="#" aria-label="navigate to our instagram">
          <Icon icon="instagram" />
        </Link>
      </li>
    </StyledUl>
  );
};

export default SocialIcons;
