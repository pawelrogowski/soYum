import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userMenuMotion } from "../../common/animations";
import useShowDecorations from "../../hooks/useShowDecorations";
import { setIsUserEditMenuOpen } from "../../redux/slices/modalSlice";
import { shortenString } from "../../utils/stringManipulation";
import { LoaderLine } from "../LoaderLine/LoaderLine";
import { StyledDiv } from "./UserAvatar.styled";

const EditProfilePopup = lazy(() => import("../EditProfilePopup/EditProfilePopup"));

export function UserAvatar({ image, placeholder, name = "No Data" }) {
  const shouldUseDecor = useShowDecorations();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isEditProfilePopupOpen = useSelector((state) => state.modal.isUserEditMenuOpen);
  const userName = useSelector((state) => state.user.user.name);

  const handleOpenUserEdit = () => {
    if (!userName) {
      navigate("/signin");
      return;
    }
    if (!isEditProfilePopupOpen) {
      setTimeout(() => dispatch(setIsUserEditMenuOpen(!isEditProfilePopupOpen)), 0);
    }
  };

  return (
    <StyledDiv $addDecor={shouldUseDecor}>
      <button onClick={handleOpenUserEdit} disabled={isEditProfilePopupOpen}>
        <picture>
          <source srcSet={image} type="image/jpeg" />
          <img src={placeholder} alt="user avatar" width="44px" height="44px" loading="eager" />
        </picture>
        <span>{shortenString(name, 10, "...")}</span>
      </button>
      <Suspense fallback={<LoaderLine isGlobal />}>
        <AnimatePresence>
          {isEditProfilePopupOpen && <EditProfilePopup {...userMenuMotion} />}
        </AnimatePresence>
      </Suspense>
    </StyledDiv>
  );
}

UserAvatar.propTypes = {
  image: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserAvatar;
