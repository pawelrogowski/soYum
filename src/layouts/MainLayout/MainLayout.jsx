import { Header } from "../../components/Header/Header";
import { Container } from "../../components/Container/Container";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
