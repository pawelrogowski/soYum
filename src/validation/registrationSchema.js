import { object, string } from "yup";

export const validationSchema = object({
  name: string().required("Name is required"),
  email: string().email("Invalid email").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
