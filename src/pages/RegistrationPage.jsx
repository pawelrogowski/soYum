import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../styles/themes";
import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm";
import { ReactComponent as HeroIconMobile } from "../assets/icons/auth-hero/heroMobile.svg";
import { ReactComponent as HeroIconTablet } from "../assets/icons/auth-hero/heroTablet.svg";
import { ReactComponent as HeroIconDesktop } from "../assets/icons/auth-hero/heroDesktop.svg";

import { StyledDiv } from "./RegistrationPage.styled";

export const RegistrationPage = () => {
  const isTablet = useMediaQuery({ minWidth: breakpoints.tablet });
  const isDesktop = useMediaQuery({ minWidth: breakpoints.desktop });

  return (
    <StyledDiv>
      {isDesktop ? (
        <HeroIconDesktop />
      ) : isTablet ? (
        <HeroIconTablet />
      ) : (
        <HeroIconMobile />
      )}
      <RegistrationForm />
    </StyledDiv>
  );
};
