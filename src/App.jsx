import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import styled from "styled-components";

const ToggleButton = styled.button`
	background-color: ${(props) => props.theme.backgroundColor};
`;

export const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<ThemeProvider theme={theme}>
			<div>
				<ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
			</div>
		</ThemeProvider>
	);
};
