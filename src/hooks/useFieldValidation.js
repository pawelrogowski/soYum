import { useState } from "react";

export const useFieldValidation = (validationSchema, fieldName) => {
  const [error, setError] = useState("");

  const validateField = async (value) => {
    try {
      await validationSchema.validateAt(fieldName, { [fieldName]: value });
      setError("");
      return { isValid: true, errorMessage: "" };
    } catch (error) {
      setError(error.message);
      return { isValid: false, errorMessage: error.message };
    }
  };

  return { error, validateField };
};
