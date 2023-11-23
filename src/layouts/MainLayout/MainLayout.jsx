import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoaderLine } from "../../components/LoaderLine/LoaderLine";
import { breakpoints } from "../../styles/themes";

const NavigationMobile = lazy(() => import("../../components/NavigationMobile/NavigationMobile"));
const LogoutModal = lazy(() => import("../../components/LogoutModal/LogoutModal"));
const EditUserModal = lazy(() => import("../../components/EditUserModal/EditUserModal"));

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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <Suspense fallback={<LoaderLine />}>
            <NavigationMobile />
          </Suspense>
        )}
      </AnimatePresence>
      <Header />

      <Suspense fallback={<LoaderLine isGlobal />}>
        <Outlet />
      </Suspense>

      <Footer variant={isMobileSize ? "mobile" : isTabletSize ? "tablet" : "desktop"} />
      <AnimatePresence>
        {isProfileUpdateMenuOpen && (
          <Suspense fallback={<LoaderLine />}>
            <EditUserModal />
          </Suspense>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isLogoutModalOpen && (
          <Suspense fallback={<LoaderLine />}>
            <LogoutModal />
          </Suspense>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainLayout;
