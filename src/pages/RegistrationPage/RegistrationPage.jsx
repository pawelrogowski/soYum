import { Link } from "react-router-dom";

import { RegistrationForm } from "../../components/Forms/RegisterForm/RegisterForm";
import { Icon } from "../../components/Icon/Icon";

export const RegistrationPage = () => {
  return (
    <>
      <RegistrationForm />
      <div className="auth-links">
        <Link to="/signin">Sign in</Link>
        <Link to="/home">
          Continue without the account <Icon icon="arrow_long" />
        </Link>
      </div>
    </>
  );
};
export default RegistrationPage;
