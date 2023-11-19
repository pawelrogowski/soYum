import { useRef } from "react";
import * as yup from "yup";

/**
 * React Hook `useValidation` for validating form fields using Yup.
 * @returns {Object} An object containing `errors` object and `validate` function.
 * @property {Object.<string, string>} errors - Object containing validation error messages keyed by field names.
 * @property {function} validate - Function to validate a field.
 *
 * @example
 * const { errors, validate } = useValidation();
 * const validationSchema = yup.object().shape({
 *   name: yup.string().required('Name is required')
 * });
 * const result = validate(validationSchema, 'name', 'John Doe');
 */
export const useValidation = () => {
  /**
   * State to store validation errors.
   * @type {Object.<string, string>}
   */
  const errors = useRef({});

  /**
   * Validates a form field using Yup schema.
   * @function
   * @param {Object} validationSchema - Yup validation schema.
   * @param {string} fieldName - Name of the field to validate.
   * @param {*} value - Value of the field to validate.
   * @param {Object} [parentFields] - Parent fields for nested validation.
   * @returns {Object} An object containing `isValid` and `errorMessage`.
   * @property {boolean} isValid - Whether the field value is valid.
   * @property {string} errorMessage - Validation error message.
   */
  const validate = (validationSchema, fieldName, value, parentFields) => {
    try {
      const fieldSchema = yup.reach(validationSchema, fieldName);
      fieldSchema.validateSync(value, { ...parentFields });

      errors.current = { ...errors.current, [fieldName]: "" };
      return { isValid: true, errorMessage: "" };
    } catch (error) {
      errors.current = { ...errors.current, [fieldName]: error.message };
      return { isValid: false, errorMessage: error.message };
    }
  };

  return { errors, validate };
};
