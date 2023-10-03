import { RegistrationForm } from "../../components/Forms/RegisterForm/RegisterForm";
import { Link } from "react-router-dom";

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <Link to="/signin">Sign in</Link>
    </>
  );
};
export default RegistrationPage;
