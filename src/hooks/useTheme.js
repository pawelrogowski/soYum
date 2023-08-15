import { useState } from "react";
import { lightTheme, darkTheme } from "../styles/themes";

export const useTheme = () => {
	const [themeName, setThemeName] = useState(
		localStorage.getItem("theme") || "light"
	);

	const toggleTheme = () => {
		const newTheme = themeName === "light" ? "dark" : "light";
		setThemeName(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	const theme = themeName === "light" ? lightTheme : darkTheme;

	return { theme, toggleTheme };
};
