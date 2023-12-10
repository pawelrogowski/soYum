import { object, string } from "yup";

import { emailPattern, passwordPattern } from "./regexPatterns";

export const validationSchema = object({
  email: string().matches(emailPattern, "Invalid email").required("Email is required"),
  password: string()
    .matches(
      passwordPattern,
      "Password should contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
    )
    .required("Password is required"),
});
