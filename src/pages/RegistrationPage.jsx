import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../styles/themes";
import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm";
import { StyledDiv } from "./RegistrationPage.styled";
import { Icon } from "../components/Icon/Icon";

export const RegistrationPage = () => {
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });

  return (
    <StyledDiv>
      <Icon
        hero="true"
        icon={
          isDesktop ? "hero-desktop" : isTablet ? "hero-tablet" : "hero-mobile"
        }
      />
      <RegistrationForm />
    </StyledDiv>
  );
};
