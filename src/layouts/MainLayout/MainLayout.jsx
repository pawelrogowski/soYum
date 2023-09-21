import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavigationMobile } from "../../components/NavigationMobile/NavigationMobile";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { FooterMobile } from "../../components/Footer/Mobile/FooterMobile";
import { FooterTablet } from "../../components/Footer/Tablet/FooterTablet";
import { FooterDesktop } from "../../components/Footer/Desktop/FooterDesktop";

export const MainLayout = () => {
  const isMobileSize = useMediaQuery({ maxWidth: breakpoints.mobileMax });
  const isTabletSize = useMediaQuery({
    minWidth: breakpoints.tablet,
    maxWidth: breakpoints.tabletMax,
  });
  const isMobileMenuOpen = useSelector(
    (state) => state.global.isMobileMenuOpen
  );
  return (
    <>
      <AnimatePresence>
        {isMobileMenuOpen && <NavigationMobile />}
      </AnimatePresence>
      <Header />
      <Container>
        <Outlet />
      </Container>
      {isMobileSize ? (
        <FooterMobile />
      ) : isTabletSize ? (
        <FooterTablet />
      ) : (
        <FooterDesktop />
      )}
    </>
  );
};

export default MainLayout;
