import { throttle } from "lodash";
import { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { baseIconMotion } from "../../common/animations";
import {
  setIsLogoutModalOpen,
  setIsProfileUpdateMenuOpen,
  setIsUserEditMenuOpen,
} from "../../redux/slices/modalSlice";
import { Button, Icon } from "..";
import { StyledDiv } from "./EditProfilePopup.styled";

const EditProfilePopup = ({ ...props }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

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

  const throttledEditProfileOpen = throttle(() => {
    dispatch(setIsUserEditMenuOpen(false));
    dispatch(setIsProfileUpdateMenuOpen(true));
  }, 300);

  const throttledLogoutModalOpen = throttle(() => {
    dispatch(setIsLogoutModalOpen(true));
    dispatch(setIsUserEditMenuOpen(false));
  }, 300);

  const handleEditProfileOpen = useCallback(() => {
    throttledEditProfileOpen();
  }, [throttledEditProfileOpen]);

  const handleLogoutModalOpen = useCallback(() => {
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
      <Button type="button" onClick={handleLogoutModalOpen} aria-label="log out">
        Log out
        <Icon icon="arrow_long" {...baseIconMotion} />
      </Button>
    </StyledDiv>
  );
};

export default EditProfilePopup;
