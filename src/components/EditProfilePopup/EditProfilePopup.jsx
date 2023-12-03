import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { baseIconMotion } from "../../common/animations";
import { useThrottle } from "../../hooks/useThrottle";
import {
  setIsLogoutModalOpen,
  setIsProfileUpdateMenuOpen,
  setIsUserEditMenuOpen,
} from "../../redux/slices/modalSlice";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditProfilePopup.styled";

const EditProfilePopup = ({ ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef(null);
  const name = useSelector((state) => state.user.user.name);

  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        dispatch(setIsUserEditMenuOpen(false));
      }
    },
    [dispatch]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        dispatch(setIsUserEditMenuOpen(false));
      }
    },
    [dispatch]
  );

  const handleClickInside = useCallback((event) => {
    event.stopPropagation();
  }, []);

  const handleAvatarClick = useThrottle(() => {
    if (name) {
      dispatch(setIsUserEditMenuOpen(false));
      dispatch(setIsProfileUpdateMenuOpen(true));
    } else {
      navigate("/signin");
    }
  }, 300);

  const throttledLogoutModalOpen = useThrottle(() => {
    dispatch(setIsLogoutModalOpen(true));
    dispatch(setIsUserEditMenuOpen(false));
  }, 300);

  const handleEditProfileOpen = useCallback(() => {
    handleAvatarClick();
  }, [handleAvatarClick]);

  const handleLogoutClick = useCallback(() => {
    throttledLogoutModalOpen();
  }, [throttledLogoutModalOpen]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClickOutside, handleKeyDown]);

  return (
    <StyledDiv ref={ref} onClick={handleClickInside} {...props}>
      <div onClick={handleEditProfileOpen}>
        <span>Edit profile</span>
        <Icon icon="edit" {...baseIconMotion} />
      </div>
      <Button type="button" onClick={handleLogoutClick} aria-label="log out">
        {!name ? "Sign in" : "Log out"}
        <Icon icon="arrow_long" {...baseIconMotion} />
      </Button>
    </StyledDiv>
  );
};

export default EditProfilePopup;
