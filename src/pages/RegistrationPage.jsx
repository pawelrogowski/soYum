import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm";
import { ReactComponent as HeroIcon } from "../assets/icons/auth-hero/hero.svg";

import { StyledDiv } from "./RegistrationPage.styled";
export const RegistrationPage = () => {
  return (
    <StyledDiv>
      <HeroIcon />
      <RegistrationForm />
    </StyledDiv>
  );
};
