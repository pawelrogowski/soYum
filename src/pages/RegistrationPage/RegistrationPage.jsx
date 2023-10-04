import { Link } from "react-router-dom";

import { RegistrationForm } from "../../components/Forms/RegisterForm/RegisterForm";

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <Link to="/signin">Sign in</Link>
    </>
  );
};
export default RegistrationPage;
