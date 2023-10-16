import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import {
  toggleProfileUpdateMenu,
  toggleUserEditMenu,
} from "../../redux/slices/modalSlice";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditProfilePopup.styled";

export const EditProfilePopup = ({ ...props }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleUserEditMenu(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(toggleUserEditMenu(false));
    }
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  const handleEditProfileOpen = () => {
    dispatch(toggleUserEditMenu(false));
    dispatch(toggleProfileUpdateMenu(true));
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
      <Button>
        Log out
        <Icon icon="arrow_long" />
      </Button>
    </StyledDiv>
  );
};
