import { object, string } from "yup";

export const validationSchema = object({
  email: string().email("Invalid email").required("Email is required"),
});
