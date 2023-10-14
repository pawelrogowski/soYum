import { AnimatePresence } from "framer-motion";

import { Icon } from "../Icon/Icon";
import { StyledDiv } from "./LogoutModal.styled";

export const LogoutModal = () => {
  return (
    <AnimatePresence>
      <button type="button" aria-label="close logout window">
        <Icon icon="x" />
      </button>
      <StyledDiv>LogoutModal</StyledDiv>
    </AnimatePresence>
  );
};
