import { Formik } from "formik";

import { baseButtonMotion } from "../../../common/animations";
import { validationSchema } from "../../../validation/registrationSchema";
import { Button } from "../../Button/Button";
import { CustomFormikInput } from "../../CustomFormikInput/CustomFormikInput";
import { StyledForm } from "./RegisterForm.styled";

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
      validateOnChange
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
                <CustomFormikInput
                  name="name"
                  type="text"
                  placeholder="Name"
                  icon="user"
                  motionObject={warnIconMotion}
                  errors={errors}
                  touched={touched}
                  autoComplete="off"
                />
              </li>
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
