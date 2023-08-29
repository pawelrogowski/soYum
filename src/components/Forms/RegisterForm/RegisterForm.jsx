import { Button } from "../../Button/Button";
import { StyledForm } from "./RegisterForm.styled";
import { Formik, Field } from "formik";
import { Icon } from "../../Icon/Icon";
export const RegisterForm = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			onSubmit={(values) => {
				console.log("Form Submitted", values);
			}}
		>
			{({ handleSubmit }) => (
				<StyledForm onSubmit={handleSubmit}>
					<h1>Registration</h1>
					<ul>
						<li>
							<label htmlFor="name">name</label>
							<Icon icon="user" />
							<Field
								id="name"
								name="name"
								type="text"
								placeholder="Name"
								required
								aria-label="Enter your name"
								aria-required="true"
							/>
						</li>
						<li>
							<label htmlFor="email">email</label>
							<Icon icon="envelope" />
							<Field
								id="email"
								name="email"
								type="email"
								placeholder="Email"
								required
								aria-label="Enter your email"
								aria-required="true"
							/>
						</li>
						<li>
							<label htmlFor="password">password</label>
							<Icon icon="lock" />
							<Field
								id="password"
								name="password"
								type="password"
								placeholder="Password"
								required
								aria-label="Enter your password"
								aria-required="true"
							/>
						</li>
					</ul>
					<Button variant="rectBig" type="submit" aria-label="Submit form">
						Sign up
					</Button>
				</StyledForm>
			)}
		</Formik>
	);
};
