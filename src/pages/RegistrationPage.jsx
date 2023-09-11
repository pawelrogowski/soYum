import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../styles/themes";
import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm";
import { PageContent } from "./RegistrationPage.styled";
import { Icon } from "../components/Icon/Icon";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
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
        <RegistrationForm />
        <span>
          <Link to="/signin">Sign in</Link>
        </span>
      </div>
    </PageContent>
  );
};
