import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

import { StyledLabel } from "./RecipeTextInput.styled";
export const RecipeTextInput = ({ name, placeholder }) => {
  return (
    <StyledLabel htmlFor="name">
      <Field type="text" name={name} id={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="span" />
    </StyledLabel>
  );
};

RecipeTextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
