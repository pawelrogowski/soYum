import { ErrorMessage, Field } from "formik";
import PropTypes from "prop-types";

import { Icon } from "../Icon/Icon";

export const CustomFormikInput = ({
  name,
  type,
  placeholder,
  icon,
  motionObject,
  errors,
  touched,
  autoComplete,
}) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <Icon icon={icon} />
      {touched[name] &&
        (errors[name] ? (
          <Icon {...motionObject} icon={errors[name].includes("required") ? "error" : "warning"} />
        ) : (
          <Icon {...motionObject} icon="no-error" />
        ))}
      <ErrorMessage name={name} component="span" />
    </>
  );
};

CustomFormikInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.string.isRequired,
  motionObject: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  autoComplete: PropTypes.string,
};

export default CustomFormikInput;
