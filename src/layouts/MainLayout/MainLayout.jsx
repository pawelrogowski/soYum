import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { NavigationMobile } from "../../components/NavigationMobile/NavigationMobile";
import { useSelector } from "react-redux";

export const MainLayout = () => {
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
    </>
  );
};

export default MainLayout;
