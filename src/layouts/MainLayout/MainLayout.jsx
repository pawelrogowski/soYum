import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import { EditUserModal } from "../../components/EditUserModal/EditUserModal";
import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoaderLine } from "../../components/LoaderLine/LoaderLine";
import { LogoutModal } from "../../components/LogoutModal/LogoutModal";
import { NavigationMobile } from "../../components/NavigationMobile/NavigationMobile";
import { breakpoints } from "../../styles/themes";

export const MainLayout = () => {
  const isProfileUpdateMenuOpen = useSelector((state) => state.modal.isProfileUpdateMenuOpen);
  const isLogoutModalOpen = useSelector((state) => state.modal.isLogoutModalOpen);
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
    maxWidth: breakpoints.tabletMax,
  });

  const isMobileMenuOpen = useSelector((state) => state.modal.isMobileMenuOpen);

  return (
    <>
      <AnimatePresence>{isMobileMenuOpen && <NavigationMobile />}</AnimatePresence>
      <Header />
      <div className="main-content">
        <Suspense fallback={<LoaderLine />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer variant={isMobileSize ? "mobile" : isTabletSize ? "tablet" : "desktop"} />
      <AnimatePresence>{isProfileUpdateMenuOpen && <EditUserModal />}</AnimatePresence>
      <AnimatePresence>{isLogoutModalOpen && <LogoutModal />}</AnimatePresence>
    </>
  );
};

export default MainLayout;
