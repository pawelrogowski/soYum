import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoaderDots } from "../../components/LoaderDots/LoaderDots";
import { NavigationMobile } from "../../components/NavigationMobile/NavigationMobile";
import { breakpoints } from "../../styles/themes";

export const MainLayout = () => {
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
    maxWidth: breakpoints.tabletMax,
  });

  const isMobileMenuOpen = useSelector((state) => state.modal.isMobileMenuOpen);

  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && <NavigationMobile />}
      </AnimatePresence>
      <Header />
      <Suspense fallback={<LoaderDots />}>
        <Outlet />
      </Suspense>
      <Footer
        variant={isMobileSize ? "mobile" : isTabletSize ? "tablet" : "desktop"}
      />
    </>
  );
};

export default MainLayout;
