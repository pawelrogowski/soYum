import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Container } from "./components/Container/Container";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { ThemeSwitch } from "./components/ThemeToggle/ThemeSwitch";
import { Button } from "./components/Button/Buttons";
import { Logo } from "./components/Logo/Logo";

export const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Container>
				<ThemeSwitch />
				<Logo />
				<Button $variant="normal" />
				<Button $variant="square" />
			</Container>
		</ThemeProvider>
	);
};
