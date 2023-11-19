import { Link } from "react-router-dom";

import { SignInForm } from "../../components/Forms/SignInForm/SignInForm";
import { Icon } from "../../components/Icon/Icon";

export const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <div className="auth-links">
        <Link to="/register">Register</Link>
        <Link to="/home">
          Continue without the account
          <Icon icon="arrow_long" />
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
