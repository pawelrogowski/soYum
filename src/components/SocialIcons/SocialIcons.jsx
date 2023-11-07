import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { socialIconMotion } from "../../common/animations";
import { Icon } from "../Icon/Icon";
import { StyledUl } from "./SocialIcons.styled";

export const SocialIcons = () => {
  return (
    <StyledUl>
      <motion.li {...socialIconMotion}>
        <Link to="#" aria-label="navigate to our facebook">
          <Icon icon="facebook" />
        </Link>
      </motion.li>
      <motion.li {...socialIconMotion}>
        <Link to="#" aria-label="navigate to our youtube">
          <Icon icon="youtube" />
        </Link>
      </motion.li>
      <motion.li {...socialIconMotion}>
        <Link to="#" aria-label="navigate to our twitter">
          <Icon icon="twitter" />
        </Link>
      </motion.li>
      <motion.li {...socialIconMotion}>
        <Link to="#" aria-label="navigate to our instagram">
          <Icon icon="instagram" />
        </Link>
      </motion.li>
    </StyledUl>
  );
};

export default SocialIcons;
