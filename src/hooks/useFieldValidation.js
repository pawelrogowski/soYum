import { useState } from "react";
import * as yup from "yup";

export const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = async (validationSchema, fieldName, value, parentFields) => {
    try {
      const fieldSchema = yup.reach(validationSchema, fieldName);
      await fieldSchema.validate(value, { ...parentFields });

      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: "" }));
      return { isValid: true, errorMessage: "" };
    } catch (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: error.message }));
      return { isValid: false, errorMessage: error.message };
    }
  };

  return { errors, validate };
};
