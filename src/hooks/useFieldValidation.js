import { useState } from "react";
import * as yup from "yup";

export const useFieldValidation = (validationSchema, fieldName) => {
  const [error, setError] = useState("");

  const validateField = async (value, parentFields) => {
    try {
      const fieldSchema = yup.reach(validationSchema, fieldName);
      await fieldSchema.validate(value, { ...parentFields });

      setError("");
      return { isValid: true, errorMessage: "" };
    } catch (error) {
      setError(error.message);
      return { isValid: false, errorMessage: error.message };
    }
  };

  return { error, validateField };
};
