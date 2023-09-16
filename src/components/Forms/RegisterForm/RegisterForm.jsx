import { Button } from "../../Button/Button";
import { StyledForm } from "./RegistrationForm.styled";
import { Formik, Field, ErrorMessage } from "formik";
import { Icon } from "../../Icon/Icon";
import { validationSchema } from "../../../schemas/registrationSchema";

export const RegistrationForm = () => {
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
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="false"
                />
                <Icon icon="user" />
                {touched.name &&
                  ($nameInfo ? (
                    <Icon
                      {...warnIconMotion}
                      icon={
                        $nameInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon {...warnIconMotion} icon="no-error" />
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
                  autoComplete="false"
                />
                <Icon icon="envelope" />
                {touched.email &&
                  ($emailInfo ? (
                    <Icon
                      {...warnIconMotion}
                      icon={
                        $emailInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon {...warnIconMotion} icon="no-error" />
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
                <Icon {...warnIconMotion} icon="lock" />
                {touched.password &&
                  ($passwordInfo ? (
                    <Icon
                      {...warnIconMotion}
                      icon={
                        $passwordInfo.includes("required") ? "error" : "warning"
                      }
                    />
                  ) : (
                    <Icon {...warnIconMotion} icon="no-error" />
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
