import { object, string } from "yup";

export const validationSchema = object({
  email: string()
    .matches(/^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Invalid email")
    .required("Email is required"),
});
