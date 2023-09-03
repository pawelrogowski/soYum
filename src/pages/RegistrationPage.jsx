import { RegistrationForm } from "../components/Forms/RegistrationForm/RegistrationForm";
import { Container } from "../components/Container/Container";
import { Icon } from "../components/Icon/Icon";
import Hero from "../assets/icons/hero_login.svg";
export const RegistrationPage = () => {
  return (
    <Container variant="Registration" as="main">
      {/* <Icon icon="hero-login-register" /> */}
      <Hero />
      <RegistrationForm />
    </Container>
  );
};
