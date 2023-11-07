import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { baseIconMotion } from "../../common/animations";
import { toggleIsProfileUpdateMenuOpen } from "../../redux/slices/modalSlice";
import { UserUpdateForm } from "../Forms/UserUpdateForm/UserUpdateForm";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./EditUserModal.styled";

export const EditUserModal = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleIsProfileUpdateMenuOpen(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(toggleIsProfileUpdateMenuOpen(false));
    }
  };

  const handleClickClose = () => {
    dispatch(toggleIsProfileUpdateMenuOpen(false));
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

  const modalMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: {
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
      stiffness: 420,
      damping: 30,
    },
  };

  return (
    <StyledDiv {...modalMotion}>
      <div ref={ref}>
        <button type="button" onClick={handleClickClose}>
          <Icon icon="x" {...baseIconMotion} />
        </button>
        <UserUpdateForm />
      </div>
    </StyledDiv>
  );
};
