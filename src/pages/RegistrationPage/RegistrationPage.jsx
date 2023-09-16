import { RegistrationForm } from "../../components/Forms/RegisterForm/RegisterForm";
import { NavLink } from "react-router-dom";

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <NavLink to="/signin">Sign in</NavLink>
    </>
  );
};
export default RegistrationPage;
