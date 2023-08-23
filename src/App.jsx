import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Container } from "./components/Container/Container";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { ThemeSwitch } from "./components/ThemeToggle/ThemeSwitch";
import { Logo } from "./components/Logo/Logo";
import { Button } from "./components/Button/Buttons.styled";
export const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Container>
				<ThemeSwitch />
				<Logo />
				<Button>Search</Button>
				<Button $variant="outline">Sign in</Button>
				<Button $variant="rectBig">Subscribe</Button>
				<Button $variant="rectSmall">Log out</Button>
				<Button $variant="rectSmallDisabled">Cancel</Button>
			</Container>
		</ThemeProvider>
	);
};
