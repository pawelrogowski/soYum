import { Outlet } from "react-router-dom";
import { Icon } from "../../components/Icon/Icon";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { PageContent } from "./AuthLayout.styled";

export const AuthLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <PageContent>
      <Icon
        hero="true"
        icon={
          isDesktop ? "hero-desktop" : isTablet ? "hero-tablet" : "hero-mobile"
        }
      />
      <div>
        <Outlet />
      </div>
    </PageContent>
  );
};
