import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes";
import { useState } from "react";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

const AppContainer = styled.div`
	background-color: ${(props) => props.theme.backgroundColor};
`;

export const App = () => {
	const [theme, setTheme] = useState(lightTheme);

	const handleThemeToggle = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	return (
		<ThemeProvider theme={lightTheme}>
			<AppContainer>
				<ThemeToggle theme={theme} toggleTheme={handleThemeToggle} />
			</AppContainer>
		</ThemeProvider>
	);
};
