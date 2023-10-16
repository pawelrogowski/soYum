import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { toggleProfileUpdateMenu } from "../../redux/slices/modalSlice";
import { Icon } from "../Icon/Icon";
import { UserUpdateForm } from "../UserUpdateForm/UserUpdateForm";
import { StyledDiv } from "./EditUserModal.styled";

export const EditUserModal = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(toggleProfileUpdateMenu(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(toggleProfileUpdateMenu(false));
    }
  };

  const handleClickClose = () => {
    dispatch(toggleProfileUpdateMenu(false));
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
    <StyledDiv ref={ref} {...modalMotion}>
      <div>
        <button type="button" onClick={handleClickClose}>
          <Icon icon="x" />
        </button>
        <UserUpdateForm />
      </div>
    </StyledDiv>
  );
};
