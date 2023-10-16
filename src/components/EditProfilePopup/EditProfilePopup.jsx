import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  toggleIsLogoutModalOpen,
  toggleIsProfileUpdateMenuOpen,
  toggleIsUserEditMenuOpen,
} from "../../redux/slices/modalSlice";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditProfilePopup.styled";

export const EditProfilePopup = ({ ...props }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleIsUserEditMenuOpen(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(toggleIsUserEditMenuOpen(false));
    }
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const handleEditProfileOpen = () => {
    dispatch(toggleIsUserEditMenuOpen(false));
    dispatch(toggleIsProfileUpdateMenuOpen(true));
  };

  const handleLogoutModalOpen = () => {
    dispatch(toggleIsLogoutModalOpen(true));
    dispatch(toggleIsUserEditMenuOpen(false));
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDiv ref={ref} onClick={handleClickInside} {...props}>
      <div onClick={handleEditProfileOpen}>
        <span>Edit profile</span>
        <Icon icon="edit" />
      </div>
      <Button
        type="button"
        onClick={handleLogoutModalOpen}
        aria-label="log out"
      >
        Log out
        <Icon icon="arrow_long" />
      </Button>
    </StyledDiv>
  );
};
