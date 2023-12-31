import { motion } from "framer-motion";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import { routeChangeMotion } from "../../common/animations";
import { Icon } from "../../components/Icon/Icon";
import { LoaderDots } from "../../components/LoaderDots/LoaderDots";
import { breakpoints } from "../../styles/themes";
import { PageContent } from "./AuthLayout.styled";
export const AuthLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <PageContent>
      <Icon hero icon={isDesktop ? "hero-desktop" : isTablet ? "hero-tablet" : "hero-mobile"} />
      <motion.div {...routeChangeMotion}>
        <Suspense fallback={<LoaderDots />}>
          <Outlet />
        </Suspense>
      </motion.div>
    </PageContent>
  );
};

export default AuthLayout;
