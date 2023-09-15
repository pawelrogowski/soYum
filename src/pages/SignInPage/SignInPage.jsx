import { NavLink } from "react-router-dom";
import { SignInForm } from "../../components/Forms/SignInForm/SignInForm";

export const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default SignInPage;
