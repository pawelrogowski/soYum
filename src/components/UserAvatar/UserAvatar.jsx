import PropTypes from "prop-types";
import { shortenString } from "../../utils/stringManipulation";
import { StyledButton } from "./UserAvatar.styled";
import { EditProfilePopup } from "../EditProfilePopup/EditProfilePopup";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserEditMenu } from "../../redux/slices/modalSlice";

export function UserAvatar({ image, placeholder, name = "No Data" }) {
  const dispatch = useDispatch();

  const isEditProfilePopupOpen = useSelector(
    (state) => state.modal.isUserEditMenuOpen
  );

  const handleOpenUserEdit = () => {
    if (!isEditProfilePopupOpen) {
      setTimeout(() => dispatch(toggleUserEditMenu(true)), 0);
    }
  };

  return (
    <StyledButton onClick={handleOpenUserEdit}>
      <picture>
        <source srcSet={image} type="image/jpeg" />
        <img src={placeholder} alt="user avatar" />
      </picture>
      <span>{shortenString(name, 10, "...")}</span>
      {isEditProfilePopupOpen && <EditProfilePopup />}
    </StyledButton>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
