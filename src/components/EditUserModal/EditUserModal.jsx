import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { baseIconMotion, editUserModalMotion, userMenuMotion } from "../../common/animations";
import {
  setIsImageUploadModalLoading,
  setIsImageUploadModalOpen,
  setIsProfileUpdateMenuOpen,
} from "../../redux/slices/modalSlice";
import { UserUpdateForm } from "../Forms/UserUpdateForm/UserUpdateForm";
import { Icon } from "../Icon/Icon";
import { LoaderLine } from "../LoaderLine/LoaderLine";
import { StyledDiv } from "./EditUserModal.styled";

export const EditUserModal = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { isImageUploadModalLoading } = useSelector((state) => state.modal);

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
    dispatch(setIsImageUploadModalOpen(false));
    dispatch(setIsImageUploadModalLoading(false));
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
      <AnimatePresence mode="wait">
        <motion.div {...userMenuMotion} ref={ref}>
          <AnimatePresence>
            {isImageUploadModalLoading && <LoaderLine isGlobal={false} />}
          </AnimatePresence>
          <button type="button" onClick={handleClickClose}>
            <Icon icon="x" {...baseIconMotion} />
          </button>
          <UserUpdateForm />
        </motion.div>
      </AnimatePresence>
    </StyledDiv>
  );
};

export default EditUserModal;
