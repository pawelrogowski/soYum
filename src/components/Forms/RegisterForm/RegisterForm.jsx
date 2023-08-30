import { Button } from "../../Button/Button";
import { StyledForm } from "./RegisterForm.styled";
import { Formik, Field, ErrorMessage } from "formik";
import { Icon } from "../../Icon/Icon";
import { validationSchema } from "./validationSchema";

export const RegisterForm = () => {
	const initialFormValues = { name: "", email: "", password: "" };

	const handleSubmit = (values) => {
		console.log("Form Submitted", values);
	};

	return (
		<Formik
			initialValues={initialFormValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			validateOnBlur
		>
			{(formik) => {
				let styledFormProps = {};

				if (formik.errors.email) {
					styledFormProps.hasError = true;
					styledFormProps.errorType = "email";
				}

				return (
					<StyledForm {...styledFormProps}>
						<h1>Registration</h1>
						<ul>
							<li>
								<label htmlFor="name">name</label>
								<Icon icon="user" />
								<Field id="name" name="name" type="text" placeholder="Name" />
								<ErrorMessage name="name" component="span" />
							</li>
							<li>
								<label htmlFor="email">email</label>
								<Icon icon="envelope" />
								<Field
									id="email"
									name="email"
									type="email"
									placeholder="Email"
									aria-label="Enter your email"
									aria-required="true"
								/>
								<ErrorMessage name="email" component="span" />
							</li>
							<li>
								<label htmlFor="password">password</label>
								<Icon icon="lock" />
								<Field
									id="password"
									name="password"
									type="password"
									placeholder="Password"
									aria-label="Enter your password"
									aria-required="true"
								/>
								<ErrorMessage name="password" component="span" />
							</li>
						</ul>
						<Button variant="rectBig" type="submit" aria-label="Submit form">
							Sign up
						</Button>
					</StyledForm>
				);
			}}
		</Formik>
	);
};
