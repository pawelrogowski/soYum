import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { baseIconMotion, editUserModalMotion } from "../../common/animations";
import { setIsProfileUpdateMenuOpen } from "../../redux/slices/modalSlice";
import { UserUpdateForm } from "../Forms/UserUpdateForm/UserUpdateForm";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditUserModal.styled";

export const EditUserModal = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(setIsProfileUpdateMenuOpen(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(setIsProfileUpdateMenuOpen(false));
    }
  };

  const handleClickClose = () => {
    dispatch(setIsProfileUpdateMenuOpen(false));
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
    <StyledDiv {...editUserModalMotion}>
      <div ref={ref}>
        <button type="button" onClick={handleClickClose}>
          <Icon icon="x" {...baseIconMotion} />
        </button>
        <UserUpdateForm />
      </div>
    </StyledDiv>
  );
};
