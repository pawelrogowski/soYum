import { Field, ErrorMessage } from "formik";
import { Icon } from "../Icon/Icon";
import PropTypes from "prop-types";

export const CustomFormikInput = ({
  name,
  type,
  placeholder,
  icon,
  motionObject,
  errors,
  touched,
}) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autocomplete="off"
      />
      <Icon icon={icon} />
      {touched[name] &&
        (errors[name] ? (
          <Icon
            {...motionObject}
            icon={errors[name].includes("required") ? "error" : "warning"}
          />
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
};
