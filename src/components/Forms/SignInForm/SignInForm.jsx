import { Button } from "../../Button/Button";
import { StyledForm } from "./SignInForm.styled";
import { Formik } from "formik";
import { validationSchema } from "../../../schemas/singInSchema";
import { CustomFormikInput } from "../../CustomFormikInput/CustomFormikInput";

export const SignInForm = () => {
  const initialFormValues = { name: "", email: "", password: "" };

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
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
                  autocomplete="off"
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
                  autocomplete="off"
                />
              </li>
            </ul>
            <Button variant="rectBig" type="submit" aria-label="Submit form">
              Sign up
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
