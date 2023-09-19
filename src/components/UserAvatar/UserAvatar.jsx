import PropTypes from "prop-types";
import { shortenString } from "../../utils/stringManipulation";
import { StyledDiv } from "./UserAvatar.styled";
export function UserAvatar({ image, placeholder, name = "No Data" }) {
  return (
    <StyledDiv>
      <picture>
        <source srcSet={image} type="image/jpeg" />
        <img src={placeholder} alt="user avatar" />
      </picture>
      <span>{shortenString(name, 10, "...")}</span>
    </StyledDiv>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
