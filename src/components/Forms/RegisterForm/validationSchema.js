import * as Yup from "yup";

export const validationSchema = Yup.object({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.email("Invalid email")
		.required("Email is required")
		.max(100, "email can not be longer than 100 characters"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});
