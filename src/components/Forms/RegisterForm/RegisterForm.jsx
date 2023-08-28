import { Button } from "../../Button/Button";
import { TextInput } from "../../TextInput/TextInput";
import { StyledForm } from "./RegisterForm.styled";

export const RegisterForm = () => {
	return (
		<StyledForm>
			<h1>Registration</h1>
			<ul>
				<li>
					<TextInput placeholder="Name" iconLeft="user" iconRight="!round" />
				</li>
				<li>
					<TextInput
						placeholder="Email"
						iconLeft="envelope"
						iconRight="!round"
					/>
				</li>
				<li>
					<TextInput
						placeholder="Password"
						iconLeft="lock"
						iconRight="!round"
					/>
				</li>
			</ul>
			<Button variant="rectBig">Sign up</Button>
		</StyledForm>
	);
};
