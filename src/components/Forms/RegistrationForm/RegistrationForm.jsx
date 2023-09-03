import { Button } from "../../Button/Button";
import { StyledForm } from "./RegistrationForm.styled";
import { Formik, Field, ErrorMessage } from "formik";
import { Icon } from "../../Icon/Icon";
import { validationSchema } from "./validationSchema";

export const RegistrationForm = () => {
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
        let $nameInfo = errors.name;
        let $emailInfo = errors.email;
        let $passwordInfo = errors.password;
        let $nameTouched = touched.name;
        let $emailTouched = touched.email;
        let $passwordTouched = touched.password;

        const styledFormProps = {
          $nameInfo,
          $emailInfo,
          $passwordInfo,
          $nameTouched,
          $emailTouched,
          $passwordTouched,
        };

        return (
          <StyledForm {...styledFormProps}>
            <h1>Registration</h1>
            <ul>
              <li>
                <label htmlFor="name">name</label>
                <Field id="name" name="name" type="text" placeholder="Name" />
                <Icon icon="user" />
                {touched.name &&
                  ($nameInfo ? (
                    <Icon
                      icon={
                        $nameInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon icon="no-error" />
                  ))}
                <ErrorMessage name="name" component="span" />
              </li>
              <li>
                <label htmlFor="email">email</label>

                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
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
