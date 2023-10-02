import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditProfilePopup.styled";
import { Button } from "../Button/Button";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { toggleUserEditMenu } from "../../redux/slices/modalSlice";

export const EditProfilePopup = () => {
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <StyledDiv ref={ref}>
      <div>
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
