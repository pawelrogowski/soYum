import ThemeContext from "./contexts/ThemeContext";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { Container } from "./components/Container/Container";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/themes";
import { ThemeSwitch } from "./components/ThemeToggle/ThemeSwitch";
import { Logo } from "./components/Logo/Logo";
import { Button } from "./components/Button/Buttons.styled";
import { Icon } from "./components/Icon/Icon";
export const App = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Container>
				<ThemeSwitch />
				<Logo />
				<Button>Search</Button>
				<Button $variant="outlineSmall">Sign in</Button>
				<Button $variant="outlineBig">Other categories</Button>
				<Button $variant="rectBig">Subscribe</Button>
				<Button $variant="rectSmall">Log out</Button>
				<Button $variant="rectSmallDisabled">Cancel</Button>
			</Container>
			<div>
				<Icon variant="!round" />
				<Icon variant="arrow_long" />
				<Icon variant="arrow_slim" />
				<Icon variant="camera" />
				<Icon variant="capture" />
				<Icon variant="checkbox" />
				<Icon variant="checkmark_round" />
				<Icon variant="clock" />
				<Icon variant="edit" />
				<Icon variant="envelope" />
				<Icon variant="facebook" />
				<Icon variant="hamburger" />
				<Icon variant="instagram" />
				<Icon variant="lock" />
				<Icon variant="login_background" />
				<Icon variant="plus" />
				<Icon variant="search" />
				<Icon variant="spec_rectangle" />
				<Icon variant="spec_round" />
				<Icon variant="twitter" />
				<Icon variant="x" />
				<Icon variant="x_round" />
				<Icon variant="youtube" />
			</div>
		</ThemeProvider>
	);
};
