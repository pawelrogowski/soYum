import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { baseButtonMotion } from "../../../common/animations";
import { loginUser } from "../../../redux/api/userAPI";
import { setSignInRedirectPatch } from "../../../redux/slices/globalSlice";
import { validationSchema } from "../../../validation/singInSchema";
import { Button } from "../../Button/Button";
import { CustomFormikInput } from "../../CustomFormikInput/CustomFormikInput";
import LoaderLine from "../../LoaderLine/LoaderLine";
import { StyledForm } from "./SignInForm.styled";

export const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialFormValues = { email: "", password: "" };
  const isLoginInProgress = useSelector((state) => state.user.login.loading);
  const { signInRedirectPath } = useSelector((state) => state.global);

  const handleSubmit = async (values) => {
    try {
      await dispatch(loginUser(values)).unwrap();
      dispatch(setSignInRedirectPatch("/home"));
      toast.success("Welcome Back!");
      navigate(signInRedirectPath);
    } catch (error) {
      toast.error(JSON.stringify(error.message));
      console.error("Failed to sign in:", error);
    }
  };

  const warnIconMotion = {
    initial: { scale: 0.2 },
    animate: { scale: 1 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <Formik
      initialValues={initialFormValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur
    >
      {({ errors, touched }) => {
        let $emailInfo = errors.email;
        let $passwordInfo = errors.password;
        let $emailTouched = touched.email;
        let $passwordTouched = touched.password;

        const styledFormProps = {
          $emailInfo,
          $passwordInfo,
          $emailTouched,
          $passwordTouched,
        };

        return (
          <StyledForm {...styledFormProps}>
            {isLoginInProgress && <LoaderLine />}
            <h1>Sign In</h1>
            <ul>
              <li>
                <CustomFormikInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  icon="envelope"
                  motionObject={warnIconMotion}
                  errors={errors}
                  touched={touched}
                  autoComplete="off"
                />
              </li>
              <li>
                <CustomFormikInput
                  name="password"
                  type="password"
                  placeholder="Password"
                  icon="lock"
                  motionObject={warnIconMotion}
                  errors={errors}
                  touched={touched}
                  autoComplete="off"
                />
              </li>
            </ul>
            <Button variant="rectBig" type="submit" aria-label="Submit form" {...baseButtonMotion}>
              Sign up
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
