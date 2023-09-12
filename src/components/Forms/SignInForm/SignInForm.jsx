import { Button } from "../../Button/Button";
import { StyledForm } from "./SignInForm.styled";
import { Formik, Field, ErrorMessage } from "formik";
import { Icon } from "../../Icon/Icon";
import { validationSchema } from "./singInSchema";

export const SignInForm = () => {
  const initialFormValues = { name: "", email: "", password: "" };

  const handleSubmit = (values) => {
    console.log("Form Submitted", values);
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
                <label htmlFor="email">email</label>

                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="false"
                />
                <Icon icon="envelope" />
                {touched.email &&
                  ($emailInfo ? (
                    <Icon
                      icon={
                        $emailInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon icon="no-error" />
                  ))}
                <ErrorMessage name="email" component="span" />
              </li>
              <li>
                <label htmlFor="password">password</label>

                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                />
                <Icon icon="lock" />
                {touched.password &&
                  ($passwordInfo ? (
                    <Icon
                      icon={
                        $passwordInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon icon="no-error" />
                  ))}
                <ErrorMessage name="password" component="span" />
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