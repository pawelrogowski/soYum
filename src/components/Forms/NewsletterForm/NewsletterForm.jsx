import { Formik } from "formik";
import PropTypes from "prop-types";

import { validationSchema } from "../../../schemas/registrationSchema";
import { Button } from "../../Button/Button";
import { CustomFormikInput } from "../../CustomFormikInput/CustomFormikInput";
import { StyledForm } from "./NewsletterForm.styled";
export const NewsletterForm = ({ layout }) => {
  const initialFormValues = { email: "" };

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
        let $emailInfo = errors.email;
        let $emailTouched = touched.email;

        const styledFormProps = {
          $emailInfo,
          $emailTouched,
        };
        return (
          <StyledForm {...styledFormProps} $layout={layout}>
            {layout === "column" && (
              <>
                <h2>Subscribe to our Newsletter</h2>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers.
                </p>
              </>
            )}
            <div>
              <CustomFormikInput
                name="email"
                type="email"
                placeholder="Enter your email address"
                icon="envelope"
                motionObject={warnIconMotion}
                errors={errors}
                touched={touched}
                autocomplete="off"
              />
            </div>
            <Button variant="rectBig" type="submit" aria-label="Submit form">
              Subscribe
            </Button>
          </StyledForm>
        );
      }}
    </Formik>
  );
};

NewsletterForm.propTypes = {
  layout: PropTypes.string,
};
export default NewsletterForm;
