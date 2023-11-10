import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { baseIconMotion } from "../../common/animations";
import { setIsLogoutModalOpen } from "../../redux/slices/modalSlice";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./LogoutModal.styled";
export const LogoutModal = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      dispatch(setIsLogoutModalOpen(false));
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      dispatch(setIsLogoutModalOpen(false));
    }
  };

  const handleClickClose = () => {
    dispatch(setIsLogoutModalOpen(false));
  };

  const handleLogoutClick = () => {
    navigate("/signin");
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
        <button type="button" aria-label="close logout window" onClick={handleClickClose}>
          <Icon icon="x" {...baseIconMotion} />
        </button>
        <p>Are you sure you want to log out?</p>
        <div>
          <Button variant="rectSmall" aria-label="confirm logout" onClick={handleLogoutClick}>
            Log out
          </Button>
          <Button variant="rectSmallDisabled" aria-label="cancel" onClick={handleClickClose}>
            Cancel
          </Button>
        </div>
      </div>
    </StyledDiv>
  );
};
