import { Link } from "react-router-dom";

import { SignInForm } from "../../components/Forms/SignInForm/SignInForm";

export const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <Link to="/register">Register</Link>
    </>
  );
};

export default SignInPage;
