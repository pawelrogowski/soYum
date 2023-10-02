import PropTypes from "prop-types";
import { shortenString } from "../../utils/stringManipulation";
import { StyledDiv } from "./UserAvatar.styled";
import { EditProfilePopup } from "../EditProfilePopup/EditProfilePopup";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserEditMenu } from "../../redux/slices/modalSlice";
import { useEffect, useRef } from "react";

export function UserAvatar({ image, placeholder, name = "No Data" }) {
  const dispatch = useDispatch();
  const popupRef = useRef(null);

  const isEditProfilePopupOpen = useSelector(
    (state) => state.modal.isUserEditMenuOpen
  );

  const handleOpenUserEdit = () => {
    !isEditProfilePopupOpen && dispatch(toggleUserEditMenu(true));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      dispatch(toggleUserEditMenu(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(toggleUserEditMenu(false));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <StyledDiv onClick={handleOpenUserEdit}>
      <picture>
        <source srcSet={image} type="image/jpeg" />
        <img src={placeholder} alt="user avatar" />
      </picture>
      <span>{shortenString(name, 10, "...")}</span>
      {isEditProfilePopupOpen && <EditProfilePopup ref={popupRef} />}
    </StyledDiv>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
