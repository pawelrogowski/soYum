import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../../styles/themes";
import { PageContent } from "./SignInPage.styled";
import { Icon } from "../../components/Icon/Icon";
import { Link } from "react-router-dom";
import { SignInForm } from "../../components/Forms/SignInForm/SignInForm";

export const SignInPage = () => {
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
        <SignInForm />
        <span>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </PageContent>
  );
};

export default SignInPage;
