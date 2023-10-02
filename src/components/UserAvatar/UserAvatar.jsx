import PropTypes from "prop-types";
import { shortenString } from "../../utils/stringManipulation";
import { StyledDiv } from "./UserAvatar.styled";
import { EditProfilePopup } from "../EditProfilePopup/EditProfilePopup";
import { useSelector, useDispatch } from "react-redux";
import { toggleUserEditMenu } from "../../redux/slices/modalSlice";
import { AnimatePresence } from "framer-motion";

export function UserAvatar({ image, placeholder, name = "No Data" }) {
  const dispatch = useDispatch();

  const isEditProfilePopupOpen = useSelector(
    (state) => state.modal.isUserEditMenuOpen
  );

  const handleOpenUserEdit = () => {
    if (!isEditProfilePopupOpen) {
      setTimeout(
        () => dispatch(toggleUserEditMenu(!isEditProfilePopupOpen)),
        0
      );
    }
  };

  const menuMotion = {
    initial: { scale: 0.2, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: {
      scale: -0.0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 50,
      },
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <StyledDiv>
      <button onClick={handleOpenUserEdit} disabled={isEditProfilePopupOpen}>
        <picture>
          <source srcSet={image} type="image/jpeg" />
          <img src={placeholder} alt="user avatar" />
        </picture>
        <span>{shortenString(name, 10, "...")}</span>
      </button>
      <AnimatePresence>
        {isEditProfilePopupOpen && <EditProfilePopup {...menuMotion} />}
      </AnimatePresence>
    </StyledDiv>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
